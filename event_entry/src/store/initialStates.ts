import { EventOrder, BronzeTestTicket } from "./types";

export const initialEventOrder: Partial<EventOrder> = {
	ticketType: "EventOrder",
	event: "",
	series: "",
	class: "",
	number: "",
	team: "",
	sponsors: "",
	vehicle: "",
	driver1: {
		driverName: "",
		driverNAT: "",
		fiaCAT: "",
		hometown: "",
		email: "",
		cell: "",
		isValid: true,
	},
	driver2: {
		driverName: "",
		driverNAT: "",
		fiaCAT: "",
		hometown: "",
		email: "",
		cell: "",
		isValid: false,
	},
};

export const initialBronzeTest: Partial<BronzeTestTicket> = {
	ticketType: "BronzeTest",
	event: "",
	series: "",
	number: "",
	team: "",
	driver1: "",
	driver2: "",
};
