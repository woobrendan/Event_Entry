import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { DriverInfoInterface, Ticket, isEventOrder } from "../../store/types";
import { currentTicketActions } from "../../store/currentTicketSlice";

//** Components */
import SeriesSelect from "./SeriesSelect";
import EventSelect from "./EventSelect";
import EntryInfo from "./EntryInfo";
import ClassSelect from "./ClassSelect";
import DriverInfo from "./DriverInfo";

const EventOrderForm: React.FC = () => {
	const [eventComp, setEventComp] = useState(0);
	const [bronzeTest, setBronzeTest] = useState({
		driver1: null,
		driver2: null,
	});
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

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, driver: string, driverObj: DriverInfoInterface) => {
		setBronzeTest((prev) => ({
			...prev,
			[`driver${driver}`]: driverObj,
		}));
	};

	let components: any = [];

	if (isEventOrder(currentTicket)) {
		const { event, series } = currentTicket;
		components = [
			<EventSelect handleBoxClick={handleBoxClick} compNav={compNav} event={event} />,
			<SeriesSelect handleBoxClick={handleBoxClick} compNav={compNav} series={series} />,
			<ClassSelect
				handleBoxClick={handleBoxClick}
				compNav={compNav}
				series={series}
				classif={currentTicket.class}
			/>,
			<EntryInfo handleFormElement={handleFormElement} compNav={compNav} eventOrder={currentTicket} />,
			<DriverInfo
				handleFormElement={handleFormElement}
				compNav={compNav}
				eventOrder={currentTicket}
				handleCheck={handleCheck}
			/>,
		];
	}

	const eventComponent = components[eventComp];

	return <section className="order_form_container">{eventComponent}</section>;
};

export default EventOrderForm;
