import { useState } from "react";
import { SetAndNav, EventOrder } from "../../models/props";
import { teams } from "../../seeds/teams";
import BackNextButtons from "../BackNextButtons";
import vehicles from "../../seeds/vehicles";
import { getSeriesShort } from "../../functions/helpers";
import SelectElements from "./SelectElements";

interface Props extends SetAndNav {
    eventOrder: EventOrder;
}

const EntryInfo: React.FC<Props> = ({ compNav, handleFormElement, eventOrder }) => {
    const { team = "", number = "", vehicle = "", sponsors = "" } = eventOrder;

    const [details, setDetails] = useState({
        number,
        team,
        vehicle,
        sponsors,
    });

    const series = getSeriesShort(eventOrder.series);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        handleFormElement(e);
    };

    const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        handleFormElement(e);
    };

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        handleFormElement(e);
    };

    const getVehicleArr = (series: string, classif: string): string[] => {
        const seriesData = vehicles[series];
        if (Array.isArray(seriesData)) {
            return seriesData;
        } else {
            const classVehicles = seriesData[classif];
            return classVehicles;
        }
    };

    return (
        <section className="team_info input">
            <div className="input__team">
                <label>Car Number:</label>
                <input type="number" value={details.number} name="number" onInput={handleInput} />
            </div>
            <SelectElements
                label="Team"
                className="input__team"
                name="team"
                value={details.team}
                onInput={handleSelect}
                valArr={teams}
            />
            <SelectElements
                label="Vehicle"
                className="input__team"
                name="vehicle"
                value={details.vehicle}
                onInput={handleSelect}
                valArr={getVehicleArr(series, eventOrder.class)}
            />
            <div className=" sponsors">
                <label>Sponsors (Please separate sponsors with comma):</label>
                <textarea
                    rows={4}
                    cols={50}
                    value={details.sponsors}
                    name="sponsors"
                    onChange={handleTextArea}
                ></textarea>
            </div>
            <BackNextButtons compNav={compNav} />
        </section>
    );
};

export default EntryInfo;
