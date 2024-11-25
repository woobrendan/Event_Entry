import { useAppSelector } from "../../store/hooks";
import TicketListItem from "./TicketListItem";
import "../../styles/cart.scss";
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper, TableBody } from "@mui/material";

const CartDashboard: React.FC = () => {
	const tickets = useAppSelector((state) => state.ticketList.ticketList);
	return (
		<TableContainer component={Paper} className="dashboard">
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Ticket Type</TableCell>
						<TableCell>Event</TableCell>
						<TableCell align="right">Cost</TableCell>
						<TableCell align="right">Details</TableCell>
						<TableCell align="right">Delete</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tickets.map((ticket, index) => (
						<TicketListItem ticketItem={ticket} key={index} ticketIndex={index} />
						// add on delete
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CartDashboard;

// have modal for details
// pass function down to each row, when invoked, pass the ticket details to modal to display information
