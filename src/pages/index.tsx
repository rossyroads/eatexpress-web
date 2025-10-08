import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

function App() {
	const navigate = useNavigate();
	return (
		<>
			<h1>Test</h1>
			<div className="bg-amber-400 min-w-2 text-4xl">tailwindtest</div>
			<Button color="primary" onPress={() => navigate("/basket")}>
				Button
			</Button>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
		</>
	);
}

export default App;
