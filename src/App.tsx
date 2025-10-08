import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BasketPage from "./pages/basket";

function App() {
	return (
		<Routes>
			<Route element={<IndexPage />} path="/" />
			<Route element={<BasketPage />} path="/basket" />
		</Routes>
	);
}

export default App;
