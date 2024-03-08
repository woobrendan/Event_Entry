import { useState } from "react";
import BackNextButtons from "../BackNextButtons";
import { SetAndNav } from "../../models/props";

const SeriesSelect: React.FC<SetAndNav> = ({ compNav, handleInputElement }) => {
    const [selected, setSelected] = useState("");

    const series = [
        "Fanatec GT World Challenge America",
        "Pirelli GT4 America",
        "GT America",
        "TC America",
        "Toyota GR Cup",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value);
        handleInputElement(e);
    };

    const mappedSeries = series.map((val, index) => {
        return (
            <label key={index}>
                <input
                    type="radio"
                    value={val}
                    name="series"
                    checked={selected === val}
                    onChange={(e) => handleChange(e)}
                />
                {val}
            </label>
        );
    });
    return (
        <section className="series select">
            <div className="select__radios">{mappedSeries}</div>
            <BackNextButtons compNav={compNav} />
        </section>
    );
};

export default SeriesSelect;
