import type { User } from 'oidc-client-ts';
import { useAuth } from 'react-oidc-context';

function useUserAuth() {
  const auth = useAuth();

  if (!auth.user || auth.user == undefined) {
    throw new Error('No user profile found!');
  }

  const user: User = auth.user;
  const token = auth.user.access_token;
  const userId = auth.user.profile.sub;

  return { user, token, userId };
}

export default useUserAuth;
