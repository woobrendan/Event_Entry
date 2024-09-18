import OverallOrder from "./components/OverallOrder";

import "./styles/app.scss";
import EventOrderForm from "./components/event_entry/EventOrderForm";
import Lumirank from "./components/rentals/Lumirank";
import TicketTypeAlt from "./components/TicketTypeAlt";
import { useState } from "react";

import "./styles/orderForm.scss";
import "./styles/ticketType.scss";
import { render } from "@testing-library/react";

const AppAlt: React.FC = () => {
	const [type, setType] = useState("");

	const getType = (val: string) => {
		setType(val);
	};

	const renderComponent = () => {
		switch (type) {
			case "eventOrder":
				return <EventOrderForm />;
			default:
				return <TicketTypeAlt getType={getType} />;
		}
	};

	return <div className="App">{renderComponent()}</div>;
};

export default AppAlt;

// ticket type
