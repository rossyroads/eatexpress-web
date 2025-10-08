import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HeroUIProvider } from "@heroui/react";
import "./styles/globals.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HeroUIProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</HeroUIProvider>
	</StrictMode>
);
