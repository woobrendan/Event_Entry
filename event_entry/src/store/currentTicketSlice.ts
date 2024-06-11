import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ticket } from "./types";
import { initialEventOrder, initialBronzeTest } from "./initialStates";
import { BaseTicket } from "./types";
import { BronzeTest, EventOrder } from "../models/props";

const initialState: Ticket = {
	ticketNum: 1,
	type: "",
};
const currentTicketSlice = createSlice({
	name: "currentTicket",
	initialState,
	reducers: {
		setTicketType(
			state: Ticket,
			action: PayloadAction<"EventOrder" | "BronzeTest">
		) {
			const { payload: type } = action;

			if (type === "EventOrder") {
				return {
					...state,
					...initialEventOrder,
				} as BaseTicket & Partial<EventOrder>;
			} else if (type === "BronzeTest") {
				return {
					...state,
					...initialBronzeTest,
				} as BaseTicket & Partial<BronzeTest>;
			}
		},
	},
});

export const currentTicketActions = currentTicketSlice.actions;

export default currentTicketSlice;
