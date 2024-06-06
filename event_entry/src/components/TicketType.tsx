import { useState } from "react";
import { ClickAndNav } from "../models/props";

interface Props {
	compNav: (val: string) => void;
	setTicketType: (val: string) => void;
	type: string;
}

const TicketType: React.FC<Props> = ({ type = "", setTicketType, compNav }) => {
	const [selected, setSelected] = useState(type);

	const ticketTypes = [
		{ value: "eventOrder", label: "Event Entry" },
		{ value: "rental", label: "Lumirank Rental" },
		{ value: "bronzeTest", label: "Bronze Test Session" },
	];

	const handleClick = (val: string) => {
		setSelected(val);
		setTicketType(val);
		compNav("next");
	};

	const boxTickets = ticketTypes.map((ticket, index) => {
		return (
			<div
				className={`ticket click_box__div ${
					selected === ticket.value ? "selected" : ""
				}`}
				onClick={() => handleClick(ticket.value)}
				key={index}
			>
				{ticket.label}
			</div>
		);
	});

	return (
		<section className="ticket_type_container click_component">
			<div className="click_box">{boxTickets}</div>
		</section>
	);
};

export default TicketType;
