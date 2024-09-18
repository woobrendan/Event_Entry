import { seriesList } from "../../seeds/series";
import { events } from "../../seeds/events";
import { useState } from "react";
import SelectElements from "../event_entry/SelectElements";
import "../../styles/rental.scss";

const Lumirank: React.FC = () => {
	const [rental, setRental] = useState<{ [key: string]: any }>({
		series: "",
		event: "",
		number: 0,
		lrCable: false,
		didCable: false,
		gpsCable: false,
		canCable: false,
		cost: 0,
	});

	const cableCosts: { [key: string]: number } = {
		lrCable: 35,
		didCable: 35,
		gpsCable: 190,
		canCable: 170,
	};

	// handle select elements to set the series value, event value and cost
	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (e.target.name === "series") {
			const series = e.target.value;
			setRental((prev) => ({
				...prev,
				series: e.target.value,
				cost: series === "Fanatec GT World Challenge America" ? 395 : 285,
			}));
		}

		setRental((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, type } = e.target;

		if (type === "checkbox") {
			let cost = rental.cost;
			let newBool = !rental[name];

			newBool ? (cost += cableCosts[name]) : (cost -= cableCosts[name]);

			setRental((prev) => ({
				...prev,
				[name]: newBool,
				cost,
			}));
		}
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
					name="event"
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
					<input type="checkbox" name="lrCable" checked={rental.lrCable} onChange={handleInput} />
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
