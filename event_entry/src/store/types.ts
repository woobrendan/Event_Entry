// import { EventOrder, BronzeTest } from "../models/props";

export interface BaseTicket {
	// ticketNum: string;
	ticketType: string;
}

export interface DriverInfoInterface {
	driverName: string;
	driverNAT: string;
	fiaCAT: string;
	hometown: string;
	email: string;
	cell: string;
	isValid: boolean;
}

export interface EventOrder extends BaseTicket {
	event: string;
	series: string;
	class: string;
	number: string;
	team: string;
	sponsors: string;
	vehicle: string;
	driver1: DriverInfoInterface;
	driver2: DriverInfoInterface;
}

export interface BronzeTest extends BaseTicket {
	isSelected?: boolean;
	driver1?: DriverInfoInterface;
	driver2?: DriverInfoInterface;
}

export interface LumirankRental extends BaseTicket {
	series: string;
	event: string;
	number: string;
	lrCable: boolean;
	canCable: boolean;
	didCable: boolean;
	gpsCable: boolean;
	cost: string;
}

export interface DriverObjInterface {
	[key: string]: DriverInfoInterface;
}

export type Ticket = BaseTicket & (Partial<EventOrder> | Partial<BronzeTest> | Partial<LumirankRental>);

export const isEventOrder = (ticket: Ticket): ticket is EventOrder => {
	return (ticket as EventOrder).ticketType === "EventOrder";
};
