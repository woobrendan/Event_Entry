import { useAppSelector, useAppDispatch } from "../../store/hooks";
import TicketListItem from "./TicketListItem";
import { ticketListActions } from "../../store/ticketListSlice";
import "../../styles/cart.scss";
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper, TableBody } from "@mui/material";

const CartDashboard: React.FC = () => {
	const dispatch = useAppDispatch();
	const tickets = useAppSelector((state) => state.ticketList.ticketList);

	const onDelete = (keyNum: number) => {
		dispatch(ticketListActions.removeTicket(keyNum));
	};

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
						<TicketListItem ticketItem={ticket} key={index} ticketIndex={index} onDelete={onDelete} />
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
