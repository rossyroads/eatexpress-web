import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Providers({ children }: { children: React.ReactNode }) {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<HeroUIProvider>{children}</HeroUIProvider>
			</QueryClientProvider>
		</>
	);
}

export default Providers;
