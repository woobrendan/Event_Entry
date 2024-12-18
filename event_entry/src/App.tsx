import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles/app.scss";
import EventOrderForm from "./components/event_entry/EventOrderForm";
import Lumirank from "./components/rentals/Lumirank";
import TicketType from "./components/TicketType";
import CartDashboard from "./components/Cart/CartDashboard";
import BronzeTest from "./components/bronze_test/BronzeTest";

import "./styles/orderForm.scss";
import "./styles/ticketType.scss";

const App: React.FC = () => {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<TicketType />} />
					<Route path="/eventOrder" element={<EventOrderForm />} />
					<Route path="/rentals" element={<Lumirank />} />
					<Route path="/cart" element={<CartDashboard />} />
					<Route path="/bronzeTest" element={<BronzeTest />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
