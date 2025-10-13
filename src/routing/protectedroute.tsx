import React from 'react';
import { hasAuthParams, useAuth } from 'react-oidc-context';
import { Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const auth = useAuth();
  const [hasTriedSignin, setHasTriedSignin] = React.useState(false);

  React.useEffect(() => {
    // the `return` is important - addAccessTokenExpiring() returns a cleanup function
    return auth.events.addAccessTokenExpiring(() => {
      auth.signinSilent();
      setHasTriedSignin(true);
    });
  }, [auth.events, auth.signinSilent]);

  // automatically sign-in
  React.useEffect(() => {
    if (
      !hasAuthParams() &&
      !auth.isAuthenticated &&
      !auth.activeNavigator &&
      !auth.isLoading &&
      !hasTriedSignin
    ) {
      auth.signinRedirect();
      setHasTriedSignin(true);
    }
  }, [auth, hasTriedSignin]);

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... caused {auth.error.message}</div>;
  }

  if (!auth.isAuthenticated) {
    return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
  } else {
    return <Outlet />;
  }
}

export default ProtectedRoute;
