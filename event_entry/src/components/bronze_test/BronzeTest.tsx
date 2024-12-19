import { useState } from "react";
// Components //
import SelectElements from "../SelectElements";
import DriverSelectElements from "../event_entry/DriverSelectElement";
import { BronzeTestTicket } from "../../store/types";
import "../../styles/bronze.scss";

// Seeds ///
import { seriesList } from "../../seeds/series";
import { events } from "../../seeds/events";
import { teams } from "../../seeds/teams";
import drivers from "../../seeds/drivers";

const BronzeTest: React.FC = () => {
	const [bronzeTix, setBronzeTix] = useState<BronzeTestTicket>({
		ticketType: "Bronze",
		event: "",
		series: "",
		number: "",
		team: "",
		cost: "250",
		driver1: "",
		driver2: "",
	});

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setBronzeTix((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
		// handleFormElement(e); --> set current ticket values, tbd if using
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBronzeTix((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
		// handleFormElement(e);
	};

	const sroSeriesList = seriesList;

	if (!sroSeriesList.includes("McLaren Trophy")) {
		sroSeriesList.push("McLaren Trophy");
	}

	const bronzeEvents = events.filter((event) => event !== "Long Beach Grand Prix" && event !== "Full Season Entry");

	return (
		<section className="bronze_container">
			<SelectElements
				label="Series"
				className="select_detail"
				name="series"
				value={bronzeTix.series}
				onInput={handleSelect}
				valArr={sroSeriesList}
			/>
			<SelectElements
				label="Event"
				className="select_detail"
				name="event"
				value={bronzeTix.event}
				onInput={handleSelect}
				valArr={bronzeEvents}
			/>
			<div className="input__team">
				<label>Car Number:</label>
				<input
					className="input__team__number "
					type="number"
					value={bronzeTix.number}
					name="number"
					onInput={handleInput}
				/>
			</div>
			<SelectElements
				label="Team"
				className="select_detail"
				name="team"
				value={bronzeTix.team}
				onInput={handleSelect}
				valArr={teams}
			/>
			<DriverSelectElements
				label={`Driver 1`}
				className="input__driver"
				name="driver1"
				value={bronzeTix.driver1}
				onInput={handleSelect}
				valArr={drivers}
				driverNum={"1"}
			/>
			{/* add in checkbox to toggle driver 2 info and cost (+250) */}
		</section>
	);
};

export default BronzeTest;
