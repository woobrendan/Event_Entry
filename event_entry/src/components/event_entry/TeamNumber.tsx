import { useState } from "react";
import { SetAndNav } from "../../models/props";
import { teams } from "../../seeds/teams";

const TeamNumber: React.FC<SetAndNav> = ({ compNav, setKeyVal }) => {
    const [details, setDetails] = useState({
        number: "",
        team: "",
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section className="team_info input">
            <label>Car Number:</label>
            <input type="number" value={details.number} name="number" onInput={handleInput} />
            <select name="team" value={details.team} onInput={handleSelect}>
                <option value="" disabled>
                    Select Team
                </option>
                {/*{teams.map((team,index))}*/}
            </select>
        </section>
    );
};

export default TeamNumber;
