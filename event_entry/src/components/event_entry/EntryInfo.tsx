import { useState } from "react";
import { SetAndNav, EventOrder } from "../../models/props";
import { teams } from "../../seeds/teams";
import BackNextButtons from "../BackNextButtons";
import vehicles from "../../seeds/vehicles";
import { getSeriesShort } from "../../functions/helpers";

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
            <div className="input__team">
                <label>Team:</label>
                <select name="team" value={details.team} onInput={handleSelect}>
                    <option value="" disabled>
                        Select Team
                    </option>
                    {teams.map((team, index) => {
                        return (
                            <option value={team} key={index}>
                                {team}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className="input__team">
                <label>Vehicle:</label>
                <select name="vehicle" value={details.vehicle} onInput={handleSelect}>
                    <option value="" disabled>
                        Select Vehicle
                    </option>
                    {getVehicleArr(series, eventOrder.class).map((vehicle, index) => {
                        return (
                            <option value={vehicle} key={index}>
                                {vehicle}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className=" sponsors">
                <label>Sponsors (Please separate sponsors with comma):</label>
                <input value={details.sponsors} name="sponsors" onInput={handleInput} />
            </div>
            <BackNextButtons compNav={compNav} />
        </section>
    );
};

export default EntryInfo;
