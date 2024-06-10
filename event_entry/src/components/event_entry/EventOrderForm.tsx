import { useState } from "react";
import { DriverInfoInterface, EventOrder } from "../../models/props";
import { initialEventOrder } from "../../functions/helpers";

//** Components */
import SeriesSelect from "./SeriesSelect";
import EventSelect from "./EventSelect";
import EntryInfo from "./EntryInfo";
import ClassSelect from "./ClassSelect";
import DriverInfo from "./DriverInfo";

import "../../styles/orderForm.scss";

interface Props {
	compNav: (val: string) => void;
}

const EventOrderForm: React.FC<Props> = ({ compNav }) => {
	// each order will indicate type, at end add to redux cart
	// when ticket type set, set state keys (event class etc)
	const [order, setOrder] = useState<EventOrder>(initialEventOrder);

	const [eventComp, setEventComp] = useState(0);

	// const compNav = (val: string): void => {
	// 	setCurrentComp((prev) => (val === "next" ? prev + 1 : prev - 1));
	// };

	const handleFormElement = <
		T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
	>(
		e: React.ChangeEvent<T>,
		driver?: string
	) => {
		setOrder((prev: EventOrder) => ({
			...prev,
			...(driver
				? {
						[driver]: {
							...(prev[driver] as DriverInfoInterface),
							[e.target.name]: e.target.value,
						},
				  }
				: { [e.target.name]: e.target.value }),
		}));
	};

	const handleBoxClick = (name: string, val: string) => {
		setOrder((prev) => ({
			...prev,
			[name]: val,
		}));
	};

	const components = [
		<EventSelect
			handleBoxClick={handleBoxClick}
			compNav={compNav}
			event={order.event}
		/>,
		<SeriesSelect
			handleBoxClick={handleBoxClick}
			compNav={compNav}
			series={order.series}
		/>,
		<ClassSelect
			handleBoxClick={handleBoxClick}
			compNav={compNav}
			series={order.series}
			classif={order.class}
		/>,
		<EntryInfo
			handleFormElement={handleFormElement}
			compNav={compNav}
			eventOrder={order}
		/>,
		<DriverInfo
			handleFormElement={handleFormElement}
			compNav={compNav}
			eventOrder={order}
		/>,
		//add bronze test question
	];

	const eventComponent = components[eventComp];

	return <section className="order_form_container">{eventComponent}</section>;
};

export default EventOrderForm;
