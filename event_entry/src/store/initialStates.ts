import { EventOrder, BronzeTest } from "./types";

export const initialEventOrder: Partial<EventOrder> = {
	type: "EventOrder",
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
	type: "BronzeTest",
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
