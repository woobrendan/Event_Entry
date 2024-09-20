import { SetAndNav } from "../../models/props";
import { EventOrder } from "../../store/types";

interface Props extends SetAndNav {
	eventOrder: EventOrder;
}

const BronzeTest: React.FC<Props> = ({ eventOrder }) => {
	const { driver1, series } = eventOrder;

	return (
		<section className="event_container click_component">
			{/* <div className="click_box click_box__event">
				<h1>Bronze Test Session</h1>
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
			<BackNextButtons compNav={compNav} isValid={selected ? true : false} /> */}
		</section>
	);
};

export default BronzeTest;
