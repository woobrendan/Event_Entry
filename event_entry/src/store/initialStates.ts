import { EventOrder, BronzeTest } from "./types";

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

export const initialBronzeTest: Partial<BronzeTest> = {
	ticketType: "BronzeTest",
	event: "",
	series: "",
	number: "",
	team: "",
	isSelected: false,
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
