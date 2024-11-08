import { useState } from "react";

//** Seeds */
import { seriesList } from "../../seeds/series";
import { events } from "../../seeds/events";

//** Components */
import SelectElements from "../event_entry/SelectElements";
import CheckBox from "./Checkbox";
import { Button } from "@mui/material";

import "../../styles/rental.scss";
import { useAppDispatch } from "../../store/hooks";
import { ticketListActions } from "../../store/ticketListSlice";
import { LumirankRental } from "../../store/types";

const Lumirank: React.FC = () => {
	const gtwc = "Fanatec GT World Challenge America";
	const gtam = "GT America";
	const dispatch = useAppDispatch();

	const [rental, setRental] = useState<LumirankRental>({
		ticketType: "Rental",
		series: "",
		event: "",
		number: "",
		lrCable: false,
		didCable: false,
		gpsCable: false,
		canCable: false,
		cost: "0",
	});

	const addToOrder = (state: LumirankRental) => {
		dispatch(ticketListActions.addTicket(state));
		//update other end to accept rental ticket state
		// navigate to cart
	};

	// pass in old state that is prev with the new updated key (the state before returning)
	const getNewTotalCost = (oldState: LumirankRental) => {
		const { event, series, lrCable, gpsCable, didCable, canCable } = oldState;

		if (event && series) {
			// Calculate the base rental cost based on the event and series
			const numOfEvents = series === gtam ? 8 : 7;
			const baseCost = series === gtwc ? 395 : 285;
			let totalCost = event === "Full Season Entry" ? baseCost * numOfEvents : baseCost;

			// Add costs for selected cables
			if (lrCable) totalCost += 35;
			if (gpsCable) totalCost += series === gtwc ? 290 : 190;
			if (didCable) totalCost += 35;
			if (canCable && series === gtwc) totalCost += 170; // Only add CAN cable if series is GTWC

			return totalCost.toString();
		} else {
			return "0";
		}
	};

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;

		setRental((prev) => {
			const newState = {
				...prev,
				[name]: value,
			};

			return {
				...newState,
				cost: getNewTotalCost(newState),
			};
		});
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, type, value } = e.target;

		setRental((prev) => {
			// handle check box logic, set true or false, update price
			if (type === "checkbox") {
				const newBool = !prev[name as keyof LumirankRental];
				const newState = {
					...prev,
					[name]: newBool,
				};

				return {
					...newState,
					cost: getNewTotalCost(newState),
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
			<h1>Lumirank Rental</h1>
			<h3>Lumirank Rental Cost: ${rental.cost}</h3>
			<div className="team_info">
				<SelectElements
					label="Event"
					className="input__events"
					name="event"
					value={rental.event}
					onInput={handleSelect}
					valArr={events}
				/>
				{rental.event && (
					<>
						<SelectElements
							label="Series"
							className="input__series"
							name="series"
							value={rental.series}
							onInput={handleSelect}
							valArr={seriesList}
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
					</>
				)}
			</div>
			{rental.series && rental.event && (
				<>
					<h3>Check if you need to purchase power</h3>
					<div className="rental__checkbox_container">
						<CheckBox
							label="Lumirank Cable ($35)"
							name="lrCable"
							onChange={handleInput}
							checked={rental.lrCable}
						/>
						<CheckBox
							label={rental.series === gtwc ? "Telemetry/GPS ($290)" : "Telemetry/GPS ($190)"}
							name="gpsCable"
							onChange={handleInput}
							checked={rental.gpsCable}
						/>
						<CheckBox
							label="DID Cable ($35)"
							name="didCable"
							onChange={handleInput}
							checked={rental.didCable}
						/>
						{rental.series === gtwc && (
							<CheckBox
								label="Telemetry CAN Cable"
								name="canCable"
								onChange={handleInput}
								checked={rental.canCable}
							/>
						)}
					</div>
				</>
			)}
			{rental.series && rental.event && rental.number && (
				<Button variant="contained" color="error" onClick={() => addToOrder(rental)}>
					Add to Order
				</Button>
			)}
		</section>
	);
};

export default Lumirank;
