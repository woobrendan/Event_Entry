import { useState } from "react";
import BackNextButtons from "../BackNextButtons";

interface Props {
    compNav: (val: string) => void;
    setKeyVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SeriesSelect: React.FC<Props> = ({ compNav, setKeyVal }) => {
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
        setKeyVal(e);
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
