import { useState } from "react";
import SelectElements from "../SelectElements";
import { BronzeTestTicket } from "../../store/types";
import { seriesList } from "../../seeds/series";
import "../../styles/bronze.scss";

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

	const sroSeriesList = seriesList;

	if (!sroSeriesList.includes("McLaren Trophy")) {
		sroSeriesList.push("McLaren Trophy");
	}

	return (
		<section className="bronze_container">
			<SelectElements
				label="Series"
				className="select_detail input___series"
				name="series"
				value={bronzeTix.team}
				onInput={handleSelect}
				valArr={sroSeriesList}
			/>
		</section>
	);
};

export default BronzeTest;
