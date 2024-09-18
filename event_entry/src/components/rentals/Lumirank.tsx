import { seriesList } from "../../seeds/series";
import { events } from "../../seeds/events";
import { useState } from "react";
import SelectElements from "../event_entry/SelectElements";
import "../../styles/rental.scss";

const Lumirank: React.FC = () => {
	const [rental, setRental] = useState({
		series: "",
		event: "",
		number: 0,
		cost: 0,
	});

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const series = e.target.value;
		console.log("series");

		setRental((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
			cost: series === "Fanatec GT World Challenge America" ? 395 : 285,
		}));
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRental((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};
	return (
		<section className="rental_container">
			<div className="team_info">
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
			</div>
			<h3>Check if you need to purchase power</h3>
			<div className="rental__checkbox_container">
				<div className="cable_checkbox">
					<input type="checkbox" />
					<label>Lumirank Cable ($35)</label>
				</div>
				<div className="cable_checkbox">
					<input type="checkbox" />
					<label>Telemetry/GPS ($190)</label>
				</div>
				<div className="cable_checkbox">
					<input type="checkbox" />
					<label>DID Cable ($35)</label>
				</div>
				<div className="cable_checkbox">
					<input type="checkbox" />
					<label>
						Telemetry CAN Cable <br></br>[GTWC Only] ($175)
					</label>
				</div>
			</div>
		</section>
	);
};

export default Lumirank;
