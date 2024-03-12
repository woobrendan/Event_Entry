import { useState } from "react";
import BackNextButtons from "../BackNextButtons";
import { ClickAndNav } from "../../models/props";

const SeriesSelect: React.FC<ClickAndNav> = ({ compNav, handleBoxClick }) => {
    const [selected, setSelected] = useState("");

    const series = [
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

    const boxSeries = series.map((val, index) => {
        return (
            <div
                className={`series click_box__div ${selected === val ? "selected" : ""}`}
                onClick={() => handleClick(val)}
                key={index}
            >
                {val}
            </div>
        );
    });
    return (
        <section className="series_container">
            <div className="click_box">{boxSeries}</div>
            <BackNextButtons compNav={compNav} />
        </section>
    );
};

export default SeriesSelect;
