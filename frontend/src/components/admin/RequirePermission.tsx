import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface Props {
  module: string;
  children: React.ReactNode;
}

export default function RequirePermission({ module, children }: Props) {
  const { canView } = useAuth();

  if (!canView(module)) {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
}
