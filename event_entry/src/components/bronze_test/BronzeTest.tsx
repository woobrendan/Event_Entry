import { useState } from "react";
import SelectElements from "../SelectElements";
import { BronzeTestTicket } from "../../store/types";
import "../../styles/bronze.scss";

// Seeds ///
import { seriesList } from "../../seeds/series";
import { events } from "../../seeds/events";
import { teams } from "../../seeds/teams";

const BronzeTest: React.FC = () => {
	const [bronzeTix, setBronzeTix] = useState<BronzeTestTicket>({
		ticketType: "Bronze",
		event: "",
		series: "",
		number: "",
		team: "",
		cost: "",
		driver1: "",
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

	const bronzeEvents = events.filter((event) => event !== "Long Beach Grand Prix");

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
				name="series"
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
				className="input__team"
				name="team"
				value={bronzeTix.team}
				onInput={handleSelect}
				valArr={teams}
			/>
		</section>
	);
};

export default BronzeTest;
