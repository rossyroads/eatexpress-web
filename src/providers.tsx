import { HeroUIProvider, ToastProvider } from '@heroui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IconoirProvider } from 'iconoir-react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { iconProps } from '@/config/iconoir';
import SecurityContextProvider from '@/routing/securitycontext';

function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <SecurityContextProvider>
          <HeroUIProvider>
            <ToastProvider placement="top-center" />
            <IconoirProvider iconProps={iconProps}>{children}</IconoirProvider>
          </HeroUIProvider>
        </SecurityContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default Providers;
