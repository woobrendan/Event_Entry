import { useState } from "react";
import NewOrder from "./NewOrder";
import TicketType from "./TicketType";

import "../styles/orderForm.scss";

const OverallOrder: React.FC = () => {
	const [currentComp, setCurrentComp] = useState(0);

	const compNav = (val: string): void => {
		setCurrentComp((prev) => (val === "next" ? prev + 1 : prev - 1));
	};

	const components = [<NewOrder compNav={compNav} />, <TicketType />];

	const currentComponent = components[currentComp];
	return (
		<section className="order_form_container">{currentComponent}</section>
	);
};

export default OverallOrder;
