import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { EventOrder, Ticket, isEventOrder } from "../../store/types";

//** Components */
import SeriesSelect from "./SeriesSelect";
import EventSelect from "./EventSelect";
import EntryInfo from "./EntryInfo";
import ClassSelect from "./ClassSelect";
import DriverInfo from "./DriverInfo";

import "../../styles/orderForm.scss";
import { currentTicketActions } from "../../store/currentTicketSlice";

const EventOrderForm: React.FC = ({}) => {
	const [eventComp, setEventComp] = useState(0);
	const dispatch = useAppDispatch();

	const currentTicket = useAppSelector((state) => state.currentTicket) as Ticket;

	const compNav = (val: string): void => {
		setEventComp((prev) => (val === "next" ? prev + 1 : prev - 1));
	};

	const handleFormElement = <T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
		e: React.ChangeEvent<T>,
		driver?: string
	) => {
		dispatch(currentTicketActions.handleEventForm({ driver, name: e.target.name, value: e.target.value }));
	};

	const handleBoxClick = (name: string, value: string) => {
		dispatch(currentTicketActions.setEventKeyValue({ name, value }));
	};
	let components: any = [];

	if (isEventOrder(currentTicket)) {
		components = [
			<EventSelect handleBoxClick={handleBoxClick} compNav={compNav} event={currentTicket.event} />,
			<SeriesSelect handleBoxClick={handleBoxClick} compNav={compNav} series={currentTicket.series} />,
			<ClassSelect
				handleBoxClick={handleBoxClick}
				compNav={compNav}
				series={currentTicket.series}
				classif={currentTicket.class}
			/>,
			<EntryInfo handleFormElement={handleFormElement} compNav={compNav} eventOrder={currentTicket} />,
			<DriverInfo handleFormElement={handleFormElement} compNav={compNav} eventOrder={currentTicket} />,
			//add bronze test question
		];
	}

	const eventComponent = components[eventComp];

	return <section className="order_form_container">{eventComponent}</section>;
};

export default EventOrderForm;
