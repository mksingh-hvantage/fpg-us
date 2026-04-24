import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from 'react';
import api from '../services/api';
import type { User, Permission } from '../types/admin';

interface AuthContextType {
  user: User | null;
  token: string | null;
  permissions: Permission[];
  canView: (module: string) => boolean;
  canCreate: (module: string) => boolean;
  canEdit: (module: string) => boolean;
  canDelete: (module: string) => boolean;
  login: (emailOrToken: string, passwordOrUser?: string | User) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('admin_user');
    return stored ? JSON.parse(stored) : null;
  });
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('admin_token'));
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [isLoading, setIsLoading] = useState(() => !!localStorage.getItem('admin_token'));
  const didVerify = useRef(false);

  const loadPermissions = async (userId: string) => {
    try {
      const res = await api.get(`/permissions/${userId}`);
      setPermissions(Array.isArray(res.data) ? res.data : []);
    } catch {
      setPermissions([]);
    }
  };

  useEffect(() => {
    if (didVerify.current) return;
    didVerify.current = true;

    if (!token) return;

    api.get('/auth/me')
      .then(async (res) => {
        setUser(res.data);
        localStorage.setItem('admin_user', JSON.stringify(res.data));
        if (res.data.role !== 'SUPER_ADMIN') {
          await loadPermissions(res.data.id);
        }
      })
      .catch(() => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
      })
      .finally(() => setIsLoading(false));
  }, [token]);

  const checkPerm = (module: string, key: keyof Permission): boolean => {
    if (user?.role === 'SUPER_ADMIN') return true;
    if (!Array.isArray(permissions)) return false;
    const perm = permissions.find((p) => p.module === module);
    return perm ? !!perm[key] : false;
  };

  const canView = (module: string) => checkPerm(module, 'canView');
  const canCreate = (module: string) => checkPerm(module, 'canCreate');
  const canEdit = (module: string) => checkPerm(module, 'canEdit');
  const canDelete = (module: string) => checkPerm(module, 'canDelete');

  const login = async (emailOrToken: string, passwordOrUser?: string | User) => {
    // Support "login as" — login(token, userObject)
    if (passwordOrUser && typeof passwordOrUser === 'object') {
      setToken(emailOrToken);
      setUser(passwordOrUser);
      localStorage.setItem('admin_token', emailOrToken);
      localStorage.setItem('admin_user', JSON.stringify(passwordOrUser));
      if (passwordOrUser.role !== 'SUPER_ADMIN') {
        await loadPermissions(passwordOrUser.id);
      }
      return;
    }
    // Normal login — login(email, password)
    const res = await api.post('/auth/login', { email: emailOrToken, password: passwordOrUser });
    const { token: newToken, user: newUser } = res.data;
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem('admin_token', newToken);
    localStorage.setItem('admin_user', JSON.stringify(newUser));
    if (newUser.role !== 'SUPER_ADMIN') {
      await loadPermissions(newUser.id);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setPermissions([]);
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
  };

  return (
    <AuthContext.Provider value={{ user, token, permissions, canView, canCreate, canEdit, canDelete, login, logout, isAuthenticated: !!token && !!user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
