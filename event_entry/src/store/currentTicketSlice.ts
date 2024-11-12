import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ticket } from "./types";
import { initialEventOrder, initialBronzeTest } from "./initialStates";
import { BaseTicket, isEventOrder, EventOrder, DriverInfoInterface } from "./types";
import { isDualDriverSeries } from "../functions/helpers";

interface ClickValues {
	[key: string]: string;
}

const initialState: Ticket = {
	// ticketNum: "1",
	ticketType: "",
	event: "",
	series: "",
	number: "",
	team: "",
};

const currentTicketSlice = createSlice({
	name: "currentTicket",
	initialState,
	reducers: {
		setTicketType(state: Ticket, action: PayloadAction<string>) {
			const { payload: type } = action;

			if (type === "eventOrder") {
				return {
					...state,
					...initialEventOrder,
				} as Ticket;
			} else if (type === "bronzeTest") {
				return {
					...state,
					...initialBronzeTest,
				} as Ticket;
			}
		},
		setEventKeyValue(state, action: PayloadAction<{ [key: string]: string }>) {
			const { name, value }: ClickValues = action.payload;

			if (isEventOrder(state)) {
				if (name === "series") {
					state.series = value;
					state.driver2 = {
						...state.driver2,
						isValid: isDualDriverSeries(value),
					};
				} else {
					(state as any)[name] = value;
				}
			}
		},
		handleEventForm(state, action: PayloadAction<{ driver: string | undefined; name: string; value: string }>) {
			const { driver, name, value } = action.payload;

			if (isEventOrder(state)) {
				const copyState: EventOrder = {
					...state,
					...(state.driver1 ? state.driver1 : {}),
					...(state.driver2 ? state.driver2 : {}),
				};

				if (driver === "driver1" || driver === "driver2") {
					// Update driver info in currentTicket
					copyState[driver] = {
						...(copyState[driver] as DriverInfoInterface),
						[name]: value,
					};
					return copyState;
				} else {
					// Update other properties in currentTicket
					return {
						...copyState,
						[name]: value,
					};
				}
			}
		},
	},
});

export const currentTicketActions = currentTicketSlice.actions;

export default currentTicketSlice;

// return {
// 	...copyState,
// 	series: value,
// 	driver2: {
// 		...state.driver2,
// 		isValid: isDualDriverSeries(value) ? true : false,
// 	},
// };
