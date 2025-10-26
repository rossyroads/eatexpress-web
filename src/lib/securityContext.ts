import { createContext } from 'react';
import type { User } from '@/types/user';

export type SecurityContext = {
  isInitialised: boolean;
  isAuthenticated: () => boolean;
  loggedInUser: User | undefined;
  login: () => void;
};

export default createContext<SecurityContext>({
  isInitialised: false,
  isAuthenticated: () => false,
  loggedInUser: undefined,
  login: () => {},
});
