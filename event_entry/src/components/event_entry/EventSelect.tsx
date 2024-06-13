import { useState } from "react";
import BackNextButtons from "../BackNextButtons";
import { ClickAndNav } from "../../models/props";

interface Props extends ClickAndNav {
	event: string;
}

const EventSelect: React.FC<Props> = ({ compNav, handleBoxClick, event }) => {
	const [selected, setSelected] = useState(event ? event : "");

	const events = [
		"Full Season Entry",
		"Sonoma Raceway",
		"Long Beach Grand Prix",
		"Sebring International Raceway",
		"Circuit of the Americas",
		"VIRginia International Raceway",
		"Road America",
		"Barber Motorsports Park",
		"Indianpolis Motor Speedway",
	];

	const handleClick = (val: string) => {
		setSelected(val);
		handleBoxClick("event", val);
	};

	return (
		<section className="event_container click_component">
			<div className="click_box click_box__event">
				<h1> Please Select Event</h1>
				{events.map((event, index) => {
					return (
						<div
							className={`event click_box__div ${selected === event ? "selected" : ""}`}
							onClick={() => handleClick(event)}
							key={index}
						>
							{event}
						</div>
					);
				})}
			</div>
			<BackNextButtons compNav={compNav} isValid={selected ? true : false} />
		</section>
	);
};

export default EventSelect;
