// import { EventOrder, BronzeTest } from "../models/props";

export interface BaseTicket {
	// ticketNum: string;
	ticketType: string;
	event: string;
	series: string;
	number: string;
	team: string;
	cost: string;
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
	class: string;
	sponsors: string;
	vehicle: string;
	driver1: DriverInfoInterface;
	driver2: DriverInfoInterface;
}

export interface BronzeTestTicket extends BaseTicket {
	driver1: string;
	driver2?: string;
}

export interface LumirankRental extends BaseTicket {
	lrCable: boolean;
	canCable: boolean;
	didCable: boolean;
	gpsCable: boolean;
}

export interface DriverObjInterface {
	[key: string]: DriverInfoInterface;
}

export type Ticket = BaseTicket & (Partial<EventOrder> | Partial<BronzeTestTicket> | Partial<LumirankRental>);

export const isEventOrder = (ticket: Ticket): ticket is EventOrder => {
	return (ticket as EventOrder).ticketType === "EventOrder";
};
