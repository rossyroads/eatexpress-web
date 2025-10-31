import { useContext, useEffect } from 'react';
import SecurityContext from '@/lib/securityContext';
import { Outlet } from 'react-router-dom';

export function RouteGuard() {
  const { isInitialised, isAuthenticated, login } = useContext(SecurityContext);

  useEffect(() => {
    if (isInitialised && !isAuthenticated()) {
      login();
    }
  }, [isAuthenticated, login, isInitialised]);

  if (!isAuthenticated()) {
    return <div>Authenticating</div>;
  }

  return <Outlet />;
}
