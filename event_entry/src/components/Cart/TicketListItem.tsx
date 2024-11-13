import { BaseTicket } from "../../store/types";

interface Props {
	ticketItem: BaseTicket;
}

const TicketListItem: React.FC<Props> = ({ ticketItem }) => {
	console.log("ticket", ticketItem);
	const { event, ticketType } = ticketItem;
	// const ticketType = ticketItem.ticketType === "Rental" ? "Lumirank Rental" : ""
	// cost, quantity, onDelete
	return (
		<tr>
			<td>{ticketType}</td>
			<td>{event}</td>
			{/* <td>{cost}</td> */}
			{/* <td>q{uantity}</td> */}
		</tr>
	);
};

export default TicketListItem;
