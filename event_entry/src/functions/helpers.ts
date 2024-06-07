const getSeriesShort = (series: string): string => {
	const seriesList: { [key: string]: string } = {
		"Fanatec GT World Challenge America": "gtwc",
		"Pirelli GT4 America": "gt4a",
		"GT America": "gtam",
		"TC America": "tcam",
		"Toyota GR Cup": "grCup",
	};

	return seriesList[series];
};

const initialEventOrder = {
	type: "",
	event: "",
	series: "",
	class: "",
	number: "",
	team: "",
	vehicle: "",
	sponsors: "",
	driver1: {
		driverName: "",
		driverNAT: "",
		fiaCAT: "",
		hometown: "",
		email: "",
		cell: "",
	},
};

const singleDriverObj = {
	driverName: "",
	driverNAT: "",
	fiaCAT: "",
	hometown: "",
	email: "",
	cell: "",
};

export { getSeriesShort, initialEventOrder, singleDriverObj };
