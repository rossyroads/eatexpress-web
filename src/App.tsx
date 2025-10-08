import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BasketPage from "./pages/customer/basket";
import DefaultLayout from "./layouts/default";
import TermsPage from "./pages/terms";
import PrivacyPage from "./pages/privacy";

function App() {
	return (
		<DefaultLayout>
			<Routes>
				<Route element={<IndexPage />} path="/" />
				<Route element={<BasketPage />} path="/basket" />
				<Route element={<TermsPage />} path="/terms" />
				<Route element={<PrivacyPage />} path="/privacy" />
			</Routes>
		</DefaultLayout>
	);
}

export default App;
