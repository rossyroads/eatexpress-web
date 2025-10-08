import { HeroUIProvider } from '@heroui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IconoirProvider } from 'iconoir-react';

function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <>
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
    </>
  );
}

export default Providers;
