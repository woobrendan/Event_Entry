import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ticket } from "./types";

interface TicketList {
	ticketList: Ticket[];
}

const initialState: TicketList = { ticketList: [] };

const ticketListSlice = createSlice({
	name: "ticketList",
	initialState,
	reducers: {},
});

export const ticketListActions = ticketListSlice.actions;

export default ticketListSlice;
