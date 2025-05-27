import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ticket } from "./types";

interface TicketList {
	ticketList: Ticket[];
}

const initialState: TicketList = { ticketList: [] };

const ticketListSlice = createSlice({
	name: "ticketList",
	initialState,
	reducers: {
		addTicket(state, action: PayloadAction<Ticket>) {
			state.ticketList = [...state.ticketList, action.payload];
		},
		removeTicket(state, action: PayloadAction<number>) {
			const indexToRemove = action.payload;

			// check that the index val is within the range of the array
			if (indexToRemove >= 0 && indexToRemove < state.ticketList.length) {
				state.ticketList.splice(indexToRemove, 1);
			}
		},
	},
});

export const ticketListActions = ticketListSlice.actions;

export default ticketListSlice;
