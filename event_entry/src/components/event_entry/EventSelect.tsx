import { useState } from "react";
import BackNextButtons from "../BackNextButtons";
import { ClickAndNav } from "../../models/props";
import { events } from "../../seeds/events";

interface Props extends ClickAndNav {
	event: string;
}

const EventSelect: React.FC<Props> = ({ compNav, handleBoxClick, event }) => {
	const [selected, setSelected] = useState(event ? event : "");

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
