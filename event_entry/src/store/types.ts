import { EventOrder, BronzeTest } from "../models/props";

export interface BaseTicket {
	ticketNum: number;
	type: "EventOrder" | "BronzeTest"; // add union of rental and test day
}

export type Ticket = (BaseTicket & EventOrder) | (BaseTicket & BronzeTest);
