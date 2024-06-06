import OrderForm from "./components/OrderForm";
import OverallOrder from "./components/OverallOrder";
import "./styles/app.scss";

const App: React.FC = () => {
	return (
		<div className="App">
			{/* <OrderForm /> */}
			<OverallOrder />
		</div>
	);
};

export default App;
