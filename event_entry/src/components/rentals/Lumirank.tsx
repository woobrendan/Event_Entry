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
	};

	// handle select elements to set the series value, event value and cost
	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value, name } = e.target;

		setRental((prev) => {
			const newState = {
				...prev,
				[name]: value,
			};

			// Check if the series is set to gtwc, then handle logic to update price by 110
			if (prev.series !== value) {
				const swapToGtwc = value === gtwc;
				const swapOffGtwc = prev.series === gtwc;

				if (swapToGtwc) {
					newState.cost = prev.cost + 110;
				} else if (swapOffGtwc) {
					newState.cost = prev.cost - 110;
				}
			}

			return newState;
		});
	};

	const handleSeriesSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setRental((prev) => {
			return {
				...prev,
				series: value,
				lrCable: false,
				didCable: false,
				gpsCable: false,
				canCable: false,
				cost: value === gtwc ? 395 : 285,
			};
		});
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, type, value } = e.target;

		setRental((prev) => {
			// handle check box logic, set true or false, update price
			if (type === "checkbox") {
				let cost = prev.cost;
				const newBool = !prev[name];
				const cablePrice = name === "gpsCable" && rental.series === gtwc ? 290 : cableCosts[name];

				newBool ? (cost += cablePrice) : (cost -= cablePrice);

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
					onInput={handleSeriesSelect}
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
					label={rental.series === gtwc ? "Telemetry/GPS ($290)" : "Telemetry/GPS ($190)"}
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
