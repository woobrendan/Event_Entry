import OverallOrder from "./components/OverallOrder";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles/app.scss";
import EventOrderForm from "./components/event_entry/EventOrderForm";

const App: React.FC = () => {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<OverallOrder />} />
					<Route path="/eventOrder" element={<EventOrderForm />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
