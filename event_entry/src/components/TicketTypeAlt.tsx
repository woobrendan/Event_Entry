import { useAppDispatch } from "../store/hooks";
import { currentTicketActions } from "../store/currentTicketSlice";
import { useNavigate } from "react-router-dom";

interface Props {
	getType: (val: string) => void;
}

const TicketTypeAlt: React.FC<Props> = ({ getType }) => {
	const dispatch = useAppDispatch();

	const ticketTypes = [
		{ value: "eventOrder", label: "Event Entry", url: "/eventOrder" },
		{ value: "rental", label: "Lumirank Rental", url: "/rentals" },
		{
			value: "bronzeTest",
			label: "Bronze Test Session",
			url: "/bronzeTest",
		},
		{ value: "testDay", label: "Test Day Entry", url: "/testDay" },
	];

	const handleClick = (val: { [key: string]: string }) => {
		dispatch(currentTicketActions.setTicketType(val.value));
		getType(val.value);
	};

	return (
		<section className="ticket_type_container click_component">
			<div className="new_order_container">
				<h1>2025 SRO Motorsports America Season</h1>
				<h3>
					Welcome to the event entry website for SROMA. To begin order, please select the type of ticket you
					would like to purchase
				</h3>
				<p>Hello</p>
			</div>
			<div className="click_box">
				{ticketTypes.map((ticket, index) => {
					return (
						<div className={`ticket click_box__div`} onClick={() => handleClick(ticket)} key={index}>
							{ticket.label}
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default TicketTypeAlt;
