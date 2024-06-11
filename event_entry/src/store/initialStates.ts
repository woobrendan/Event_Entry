import { EventOrder, BronzeTest } from "../models/props";

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
	},
};
