import { useState } from "react";
import BackNextButtons from "../BackNextButtons";
import { SetAndNav } from "../../models/props";

interface Props extends SetAndNav {
    event: string;
}

const EventSelect: React.FC<Props> = ({ compNav, handleFormElement, event }) => {
    const [selected, setSelected] = useState(event ? event : "");

    const events = [
        "Full Season Entry",
        "Sonoma Raceway",
        "Long Beach Grand Prix",
        "Sebring International Raceway",
        "Circuit of the Americas",
        "VIRginia International Raceway",
        "Road America",
        "Barber Motorsports Park",
        "Indianpolis Motor Speedway",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value);
        handleFormElement(e);
    };

    const mappedInputs = events.map((event, index) => {
        return (
            <label key={index}>
                <input
                    type="radio"
                    value={event}
                    name="event"
                    checked={selected === event}
                    onChange={(e) => handleChange(e)}
                />
                {event}
            </label>
        );
    });
    return (
        <section className="event select">
            <div className="select__radios">{mappedInputs}</div>
            <BackNextButtons compNav={compNav} />
        </section>
    );
};

export default EventSelect;
