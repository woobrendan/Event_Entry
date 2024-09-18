import { useAppDispatch } from "../store/hooks";
import { currentTicketActions } from "../store/currentTicketSlice";
import { useNavigate } from "react-router-dom";

const TicketType: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

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
		navigate(val.url);
	};

	return (
		<section className="ticket_type_container click_component">
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

export default TicketType;
