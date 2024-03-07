import { useState } from "react";

const TeamNumber: React.FC = () => {
    const [details, setDetails] = useState({
        number: "",
        team: "",
    });
    // input field for number
    //dropdown for team name

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section>
            <label>Car Number:</label>
            <input type="text" value={details.number} name="number" onChange={handleChange} />
        </section>
    );
};

export default TeamNumber;
