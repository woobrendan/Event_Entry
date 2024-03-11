import { useState } from "react";
import BackNextButtons from "../BackNextButtons";
import { SetAndNav } from "../../models/props";

const SeriesSelect: React.FC<SetAndNav> = ({ compNav, handleFormElement }) => {
    const [selected, setSelected] = useState("");

    const series = [
        "Fanatec GT World Challenge America",
        "Pirelli GT4 America",
        "GT America",
        "TC America",
        "Toyota GR Cup",
    ];

    //const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //    setSelected(e.target.value);
    //    handleFormElement(e);
    //};

    const handleClick = (val: string) => {
        setSelected(val);
    };

    //const mappedSeries = series.map((val, index) => {
    //    return (
    //        <label key={index}>
    //            <input
    //                type="radio"
    //                value={val}
    //                name="series"
    //                checked={selected === val}
    //                onChange={(e) => handleChange(e)}
    //            />
    //            {val}
    //        </label>
    //    );
    //});

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
        <section className="series select">
            <div className="select__radios">{boxSeries}</div>
            <BackNextButtons compNav={compNav} />
        </section>
    );
};

export default SeriesSelect;
