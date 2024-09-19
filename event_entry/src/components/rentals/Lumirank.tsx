import { seriesList } from "../../seeds/series";
import { events } from "../../seeds/events";
import { useState } from "react";
import SelectElements from "../event_entry/SelectElements";
import "../../styles/rental.scss";
import CheckBox from "./Checkbox";

const Lumirank: React.FC = () => {
	const gtwc = "Fanatec GT World Challenge America";
	const [rental, setRental] = useState<{ [key: string]: any }>({
		series: "",
		event: "",
		number: 0,
		lrCable: false,
		didCable: false,
		gpsCable: false,
		canCable: false,
		cost: 285,
	});

	const cableCosts: { [key: string]: number } = {
		lrCable: 35,
		didCable: 35,
		gpsCable: 190,
		canCable: 170,
		gtwcLrCable: 290,
	};

	// handle select elements to set the series value, event value and cost
	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value, name } = e.target;

		setRental((prev) => {
			const newState = {
				...prev,
				[name]: value,
			};

			// Check if no series is selected, if series is gtwc update price to be 395 instead of 285 for rental
			// also check if the series isnt gtwc and changed to gtwc to update price same
			if ((prev.series === "" && value === gtwc) || (prev.series !== gtwc && value === gtwc)) {
				newState.cost = prev.cost + 110;
			}

			if (prev.series === "Fanatec GT World Challenge America" && value !== gtwc) {
				newState.cost = prev.cost - 110;
			}

			// if (prev.series !== gtwc)
			// 	if (name === "series") {
			// 		newState.cost = value === gtwc ? (prev.cost += 110) : 285;
			// 	}

			return newState;
		});
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, type, value } = e.target;

		setRental((prev) => {
			// handle check box logic, set true or false, update price
			if (type === "checkbox") {
				let cost = prev.cost;
				const newBool = !prev[name];

				newBool ? (cost += cableCosts[name]) : (cost -= cableCosts[name]);

				return {
					...prev,
					[name]: newBool,
					cost,
				};
			}

			return {
				...prev,
				[name]: value,
			};
		});
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
				<CheckBox label="Lumirank Cable ($35)" name="lrCable" onChange={handleInput} checked={rental.lrCable} />
				<CheckBox
					label="Telemetry/GPS ($190)"
					name="gpsCable"
					onChange={handleInput}
					checked={rental.gpsCable}
				/>
				<CheckBox label="DID Cable ($35)" name="didCable" onChange={handleInput} checked={rental.didCable} />
				{rental.series === gtwc && (
					<CheckBox
						label="Telemetry CAN Cable"
						name="canCable"
						onChange={handleInput}
						checked={rental.canCable}
					/>
				)}
			</div>
		</section>
	);
};

export default Lumirank;
