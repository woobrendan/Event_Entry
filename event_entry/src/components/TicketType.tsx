import { useState } from "react";
import { ClickAndNav } from "../models/props";
import { useAppDispatch } from "../store/hooks";
import { currentTicketActions } from "../store/currentTicketSlice";

interface Props {
	compNav: (val: string) => void;
	setTicketType: (val: string) => void;
	type: string;
}

const TicketType: React.FC<Props> = ({ type = "", setTicketType, compNav }) => {
	const [selected, setSelected] = useState(type);

	const dispatch = useAppDispatch();

	const ticketTypes = [
		{ value: "eventOrder", label: "Event Entry" },
		{ value: "rental", label: "Lumirank Rental" },
		{ value: "bronzeTest", label: "Bronze Test Session" },
	];

	const handleClick = (val: string) => {
		setSelected(val);
		// setTicketType(val);
		dispatch(currentTicketActions.setTicketType(val));
		compNav("next");
	};

	return (
		<section className="ticket_type_container click_component">
			<div className="click_box">
				{ticketTypes.map((ticket, index) => {
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
				})}
			</div>
		</section>
	);
};

export default TicketType;
