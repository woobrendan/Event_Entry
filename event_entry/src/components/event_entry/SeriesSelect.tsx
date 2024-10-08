import { useState } from "react";
import BackNextButtons from "../BackNextButtons";
import { ClickAndNav } from "../../models/props";
import { seriesList } from "../../seeds/series";

interface Props extends ClickAndNav {
	series: string;
}

const SeriesSelect: React.FC<Props> = ({ compNav, handleBoxClick, series }) => {
	const [selected, setSelected] = useState(series ? series : "");

	const handleClick = (val: string) => {
		setSelected(val);
		handleBoxClick("series", val);
	};

	return (
		<section className="series_container click_component">
			<div className="click_box">
				<h1>Select Series</h1>
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
