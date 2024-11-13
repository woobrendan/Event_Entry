import { useAppSelector } from "../../store/hooks";
import TicketListItem from "./TicketListItem";

const CartDashboard: React.FC = () => {
	const tickets = useAppSelector((state) => state.ticketList.ticketList);
	return (
		<section className="dashboard">
			<table>
				<thead>
					<tr>
						<th>Ticket Type</th>
						<th>Event</th>
						<th>Quantity</th>
						<th>Cost</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{tickets.map((ticket, index) => (
						<TicketListItem ticketItem={ticket} key={index} />
						// add on delete
					))}
				</tbody>
			</table>
		</section>
	);
};

export default CartDashboard;
