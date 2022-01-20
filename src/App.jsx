import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Contact from "./pages/Contact";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Contacts />} />
				<Route path="/:id" element={<Contact />} />
				<Route path="/add" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
