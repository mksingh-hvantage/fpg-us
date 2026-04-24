import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from 'react';
import { getCustomerMe } from '../services/customerService';
import type { Customer } from '../types/customer';

interface CustomerAuthContextType {
  customer: Customer | null;
  token: string | null;
  login: (token: string, customer: Customer) => void;
  logout: () => void;
  updateCustomer: (data: Partial<Customer>) => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const CustomerAuthContext = createContext<CustomerAuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useCustomerAuth() {
  const context = useContext(CustomerAuthContext);
  if (!context) throw new Error('useCustomerAuth must be used within CustomerAuthProvider');
  return context;
}

export function CustomerAuthProvider({ children }: { children: ReactNode }) {
  const [customer, setCustomer] = useState<Customer | null>(() => {
    const stored = localStorage.getItem('customer_user');
    return stored ? JSON.parse(stored) : null;
  });
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('customer_token'));
  const [isLoading, setIsLoading] = useState(() => !!localStorage.getItem('customer_token'));
  const didVerify = useRef(false);

  useEffect(() => {
    if (didVerify.current) return;
    didVerify.current = true;

    if (!token) return;

    getCustomerMe()
      .then((res) => {
        setCustomer(res.data);
        localStorage.setItem('customer_user', JSON.stringify(res.data));
      })
      .catch(() => {
        setCustomer(null);
        setToken(null);
        localStorage.removeItem('customer_token');
        localStorage.removeItem('customer_user');
      })
      .finally(() => setIsLoading(false));
  }, [token]);

  const login = (newToken: string, newCustomer: Customer) => {
    setToken(newToken);
    setCustomer(newCustomer);
    localStorage.setItem('customer_token', newToken);
    localStorage.setItem('customer_user', JSON.stringify(newCustomer));
  };

  const logout = () => {
    setCustomer(null);
    setToken(null);
    localStorage.removeItem('customer_token');
    localStorage.removeItem('customer_user');
  };

  const updateCustomer = (data: Partial<Customer>) => {
    setCustomer((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, ...data };
      localStorage.setItem('customer_user', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <CustomerAuthContext.Provider value={{ customer, token, login, logout, updateCustomer, isAuthenticated: !!token && !!customer, isLoading }}>
      {children}
    </CustomerAuthContext.Provider>
  );
}
