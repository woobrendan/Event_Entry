import { useState } from "react";
import { SetAndNav } from "../../models/props";
import { teams } from "../../seeds/teams";
import BackNextButtons from "../BackNextButtons";

const TeamNumber: React.FC<SetAndNav> = ({ compNav, handleFormElement }) => {
    const [details, setDetails] = useState({
        number: "",
        team: "",
        vehicle: "",
    });

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
                <select name="vehicle" value={details.team} onInput={handleSelect}>
                    <option value="" disabled>
                        Select Vehicle
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
            <BackNextButtons compNav={compNav} />
        </section>
    );
};

export default TeamNumber;
