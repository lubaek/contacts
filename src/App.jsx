import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contacts from "./pages/Contacts";
import Contact from "./pages/Contact";
import FoodTracking from "./pages/FoodTracking";

function App() {
	return (
		<BrowserRouter>
			<ToastContainer position="top-right" />
			<Routes>
				<Route exact path="/" element={<Contacts />} />
				<Route path="/:id" element={<Contact />} />
				<Route path="/add" element={<Contact />} />
				<Route path="/food" element={<FoodTracking />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
