// import { EventOrder, BronzeTest } from "../models/props";

export interface BaseTicket {
	ticketNum: number;
	// type: "eventOrder" | "bronzeTest" | ""; // add union of rental and test day
	type: string;
}

interface DriverInfoInterface {
	driverName: string;
	driverNAT: string;
	fiaCAT: string;
	hometown: string;
	email: string;
	cell: string;
}

export interface EventOrder extends BaseTicket {
	type: string;
	event: string;
	series: string;
	class: string;
	number: string;
	team: string;
	sponsors: string;
	vehicle: string;
	driver1: DriverInfoInterface;
	driver2?: DriverInfoInterface;
}

interface BronzeTest extends BaseTicket {
	type: string;
	isSelected?: boolean;
	driver1?: DriverInfoInterface;
	driver2?: DriverInfoInterface;
}

// export type Ticket =
// 	| (BaseTicket & Partial<EventOrder>)
// 	| (BaseTicket & Partial<BronzeTest>);

export type Ticket = BaseTicket & (Partial<EventOrder> | Partial<BronzeTest>);

export const isEventOrder = (ticket: Ticket): ticket is EventOrder => {
	return (ticket as EventOrder).event !== undefined;
};
