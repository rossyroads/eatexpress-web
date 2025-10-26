import { type PropsWithChildren, useEffect, useState } from 'react';
import SecurityContext from '@/lib/securityContext';
import {
  addAccessTokenToAuthHeader,
  removeAccessTokenFromAuthHeader,
} from '@/lib/auth';
import { isExpired } from 'react-jwt';
import Keycloak from 'keycloak-js';
import type { User } from '@/types/user';

const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
};

const keycloak: Keycloak = new Keycloak(keycloakConfig);

export default function SecurityContextProvider({
  children,
}: PropsWithChildren) {
  const [loggedInUser, setLoggedInUser] = useState<User | undefined>(undefined);
  const [isInitialised, setIsInitialised] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: 'check-sso' });
  }, []);

  keycloak.onReady = () => {
    setIsInitialised(true);
  };

  keycloak.onAuthSuccess = () => {
    addAccessTokenToAuthHeader(keycloak.token);
    updateUserFromToken();
  };

  keycloak.onAuthLogout = () => {
    removeAccessTokenFromAuthHeader();
  };

  keycloak.onAuthError = () => {
    removeAccessTokenFromAuthHeader();
  };

  keycloak.onTokenExpired = () => {
    keycloak.updateToken(-1).then(function () {
      addAccessTokenToAuthHeader(keycloak.token);
      updateUserFromToken();
    });
  };

  function login() {
    keycloak.login();
  }

  function isAuthenticated() {
    if (keycloak.token) return !isExpired(keycloak.token);
    else return false;
  }

  function updateUserFromToken() {
    if (!keycloak.idTokenParsed || !keycloak.tokenParsed) return;

    const name = keycloak.idTokenParsed.given_name;
    const realmRoles = keycloak.tokenParsed.realm_access?.roles ?? [];

    setLoggedInUser({
      name,
      roles: realmRoles,
    });
  }

  return (
    <SecurityContext.Provider
      value={{
        isInitialised,
        isAuthenticated,
        loggedInUser,
        login,
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
}
