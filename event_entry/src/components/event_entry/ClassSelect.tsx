import { ClickAndNav } from "../../models/props";
import BackNextButtons from "../BackNextButtons";
import { getSeriesShort } from "../../functions/helpers";
import { useState } from "react";

interface Props extends ClickAndNav {
    series: string;
}

const ClassSelect: React.FC<Props> = ({ series, handleBoxClick, compNav }) => {
    const [selected, setSelected] = useState("");
    const classList: { [key: string]: string[] } = {
        gtwc: ["Pro", "Pro-Am", "Am"],
        gt4a: ["Silver", "Pro-Am", "Am"],
        gtam: ["SRO3", "GT4", "GT2"],
        tcam: ["TCX", "TC", "TCA"],
        grCup: ["Am"],
    };

    const handleClick = (val: string) => {
        setSelected(val);
        handleBoxClick("class", val);
    };

    const boxClass = classList[getSeriesShort(series)].map((classif, index) => {
        return (
            <div
                className={`classif click_box__div ${selected === classif ? "selected" : ""}`}
                onClick={() => handleClick(classif)}
                key={index}
            >
                {classif}
            </div>
        );
    });
    return (
        <section className="class_select_container click_component">
            <div className="click_box">{boxClass}</div>
            <BackNextButtons compNav={compNav} />
        </section>
    );
};

export default ClassSelect;
