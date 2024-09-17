import { seriesList } from "../../seeds/series";
import { events } from "../../seeds/events";
import { useState } from "react";
import SelectElements from "../event_entry/SelectElements";

const Lumirank: React.FC = () => {
	const [rental, setRental] = useState({
		series: "",
		event: "",
		number: 0,
	});

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setRental((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRental((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};
	return (
		<section>
			<SelectElements
				label="Series"
				className="input__series"
				name="series"
				value={rental.series}
				onInput={handleSelect}
				valArr={seriesList}
			/>
			<SelectElements
				label="Event"
				className="input__events"
				name="events"
				value={rental.event}
				onInput={handleSelect}
				valArr={events}
			/>
			<div className="input__number">
				<label>Car Number:</label>
				<input
					className="input__number__rental"
					type="number"
					value={rental.number}
					name="number"
					onInput={handleInput}
				/>
			</div>
		</section>
	);
};

export default Lumirank;
