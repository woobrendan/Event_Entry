import { useState } from "react";
import { Order, EventOrder, BronzeTest } from "../models/props";

import { initialBronze, initialEventOrder } from "../functions/initalStates";

import NewOrder from "./NewOrder";
import TicketType from "./TicketType";

import "../styles/orderForm.scss";
import EventOrderForm from "./event_entry/EventOrderForm";

const OverallOrder: React.FC = () => {
	const [overallOrder, setOverallOrder] = useState<Order>({});
	const [currentComp, setCurrentComp] = useState(0);
	const [currentTicket, setCurrentTicket] = useState(1);

	const compNav = (val: string): void => {
		if (val === "next" || val === "back") {
			setCurrentComp((prev) => (val === "next" ? prev + 1 : prev - 1));
		}
		if (val === "restart") {
			setCurrentComp(1);
		}
	};

	// Handle Logic for setting ticket type. set as ticket x in overall order, then set intial state
	const setTicketType = (name: string) => {
		const currentTix = `ticket${currentTicket}`;
		let initial: EventOrder | BronzeTest;

		if (name === "eventOrder") {
			setOverallOrder((prev) => ({
				...prev,
				[currentTix]: initialEventOrder as EventOrder,
			}));

			const newCompList = [
				...components,
				<EventOrderForm compNav={compNav} />,
			];

			setComponents(newCompList);
		} else if (name === "bronzeTest") {
			setOverallOrder((prev) => ({
				...prev,
				[currentTix]: initialBronze as BronzeTest,
			}));
		}
	};

	const thisTicket = Object.keys(overallOrder)[0];

	const [components, setComponents] = useState([
		<NewOrder compNav={compNav} />,
		<TicketType
			setTicketType={setTicketType}
			compNav={compNav}
			type={thisTicket}
		/>,
	]);

	const currentComponent = components[currentComp];
	return (
		<section className="order_form_container">{currentComponent}</section>
	);
};

export default OverallOrder;
