import { HeroUIProvider } from '@heroui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IconoirProvider } from 'iconoir-react';

import { AuthProvider } from 'react-oidc-context';
import { onSigninCallback, userManager } from './utils/keycloak';

function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <>
      <AuthProvider
        userManager={userManager}
        onSigninCallback={onSigninCallback}
      >
        <QueryClientProvider client={queryClient}>
          <HeroUIProvider>
            <IconoirProvider
              iconProps={{
                color: '#AAAAAA',
                strokeWidth: 1,
                width: '1em',
                height: '1em',
              }}
            >
              {children}
            </IconoirProvider>
          </HeroUIProvider>
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default Providers;
