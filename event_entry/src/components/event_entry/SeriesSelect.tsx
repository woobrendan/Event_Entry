import { useState } from "react";
import BackNextButtons from "../BackNextButtons";
import { ClickAndNav } from "../../models/props";

interface Props extends ClickAndNav {
	series: string;
}

const SeriesSelect: React.FC<Props> = ({ compNav, handleBoxClick, series }) => {
	const [selected, setSelected] = useState(series ? series : "");

	const seriesList = [
		"Fanatec GT World Challenge America",
		"Pirelli GT4 America",
		"GT America",
		"TC America",
		"Toyota GR Cup",
	];

	const handleClick = (val: string) => {
		setSelected(val);
		handleBoxClick("series", val);
	};

	return (
		<section className="series_container click_component">
			<div className="click_box">
				{seriesList.map((val, index) => {
					return (
						<div
							className={`series click_box__div ${selected === val ? "selected" : ""}`}
							onClick={() => handleClick(val)}
							key={index}
						>
							{val}
						</div>
					);
				})}
			</div>
			<BackNextButtons compNav={compNav} isValid={selected ? true : false} />
		</section>
	);
};

export default SeriesSelect;
