import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import { BrowserRouter } from "react-router-dom";
import Providers from "./providers.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Providers>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Providers>
	</StrictMode>
);
