import { Ticket } from "../../store/types";
import { TableRow, TableCell, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
	ticketItem: Ticket;
	ticketIndex: number;
}

const TicketListItem: React.FC<Props> = ({ ticketItem, ticketIndex }) => {
	console.log("ticket", ticketItem);
	let { event, ticketType, cost } = ticketItem;
	// const ticketType = ticketItem.ticketType === "Rental" ? "Lumirank Rental" : ""
	// cost, quantity, onDelete

	if (ticketType === "Rental") {
		ticketType = "Lumirank Rental";
	}

	// on delete take in ticketindex and go to store and delete
	return (
		<TableRow>
			<TableCell>{ticketType}</TableCell>
			<TableCell>{event}</TableCell>
			<TableCell align="right">{cost}</TableCell>
			<TableCell align="right">Details TBD</TableCell>
			<TableCell align="right">
				<Button className="deleteTicket" variant="contained" color="error" startIcon={<DeleteIcon />} />
			</TableCell>
		</TableRow>
	);
};

export default TicketListItem;
