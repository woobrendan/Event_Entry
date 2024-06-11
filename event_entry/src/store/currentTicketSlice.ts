import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ticket } from "./types";

const initialState: Ticket = {
	ticketNum: 1,
	type: "",
};
const currentTicketSlice = createSlice({
	name: "currentTicket",
	initialState,
	reducers: {},
});

export const currentTicketActions = currentTicketSlice.actions;

export default currentTicketSlice;
