export interface RentalTicket {
	ticketType: string;
	series: string;
	event: string;
	number: number;
	lrCable: boolean;
	didCable: boolean;
	gpsCable: boolean;
	canCable: boolean;
	cost: number;
	[key: string]: string | number | boolean;
}
