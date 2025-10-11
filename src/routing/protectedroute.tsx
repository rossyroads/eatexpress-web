import { withAuthenticationRequired } from 'react-oidc-context';
import { Outlet } from 'react-router-dom';

function JustOutlet() {
  return <Outlet />;
}

const ProtectedRoute = withAuthenticationRequired(JustOutlet, {
  OnRedirecting: () => <div>Redirecting to the login page...</div>,
});

export default ProtectedRoute;
