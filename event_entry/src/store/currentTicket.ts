import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ticket } from "./types";

const initialState: Ticket = {
	ticketNum: 1,
	type: "",
};
const currentTicket = createSlice({
	name: "currentTicket",
	initialState,
	reducers: {},
});

export const currentTicketActions = currentTicket.actions;

export default currentTicket;
