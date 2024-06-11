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
		removeTicket(state, action: PayloadAction<any>) {
			const prevState = [...state.ticketList];
			//fitler out by ticket number
		},
	},
});

export const ticketListActions = ticketListSlice.actions;

export default ticketListSlice;
