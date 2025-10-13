import { HeroUIProvider, ToastProvider } from '@heroui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IconoirProvider } from 'iconoir-react';

import { AuthProvider } from 'react-oidc-context';
import { onSigninCallback, userManager } from './config/oidc';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { iconProps } from './config/iconoir';

function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <>
      <AuthProvider
        userManager={userManager}
        onSigninCallback={onSigninCallback}
      >
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <HeroUIProvider>
            <ToastProvider placement="top-center" />
            <IconoirProvider iconProps={iconProps}>{children}</IconoirProvider>
          </HeroUIProvider>
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default Providers;
