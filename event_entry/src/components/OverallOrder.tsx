import { useState } from "react";
import { Order } from "../models/props";
import NewOrder from "./NewOrder";
import TicketType from "./TicketType";

const OverallOrder: React.FC = () => {
	const [overallOrder, setOverallOrder] = useState<Order>({});
	const [currentComp, setCurrentComp] = useState(0);
	const [currentTicket, setCurrentTicket] = useState(0);

	const compNav = (val: string): void => {
		setCurrentComp((prev) => (val === "next" ? prev + 1 : prev - 1));
	};

	// const handleBoxClick = (name: string, val: string) => {
	//     setOrder((prev) => ({
	//         ...prev,
	//         [name]: val,
	//     }));
	// };

	const setTicketType = (name: string) => {
		setOverallOrder((prev) => ({
			...prev,
			[name]: {},
		}));
	};

	const thisTicket = Object.keys(overallOrder)[0];

	const components = [
		<NewOrder compNav={compNav} />,
		<TicketType
			setTicketType={setTicketType}
			compNav={compNav}
			type={thisTicket}
		/>,
	];
	return <></>;
};

export default OverallOrder;
