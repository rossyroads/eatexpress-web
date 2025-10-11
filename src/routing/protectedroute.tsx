import { useAuth } from 'react-oidc-context';
import { Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return (
      <div>
        Oops... {auth.error.source} caused {auth.error.message}
      </div>
    );
  }

  if (auth.isAuthenticated) {
    return <Outlet />;
  } else {
    auth.signinRedirect();
  }

  return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
}

export default ProtectedRoute;
