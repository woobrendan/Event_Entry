import { EventOrder, BronzeTest } from "../models/props";

export interface BaseTicket {
	ticketNum: number;
	// type: "eventOrder" | "bronzeTest" | ""; // add union of rental and test day
	type: string;
}

export type Ticket =
	| (BaseTicket & Partial<EventOrder>)
	| (BaseTicket & Partial<BronzeTest>);
