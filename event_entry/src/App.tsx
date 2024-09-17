import OverallOrder from "./components/OverallOrder";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles/app.scss";
import EventOrderForm from "./components/event_entry/EventOrderForm";
import Lumirank from "./components/rentals/Lumirank";

import "./styles/orderForm.scss";

const App: React.FC = () => {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<OverallOrder />} />
					<Route path="/eventOrder" element={<EventOrderForm />} />
					<Route path="/rentals" element={<Lumirank />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
