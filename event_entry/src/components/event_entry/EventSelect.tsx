import BackNextButtons from "../BackNextButtons";

interface Props {
    compNav: (val: string) => void;
    setKeyVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EventSelect: React.FC<Props> = ({ compNav, setKeyVal }) => {
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

    const mappedInputs = events.map((event, index) => {
        return (
            <label>
                <input
                    type="radio"
                    value={event}
                    name="event"
                    key={index}
                    //checked={selectedOption === "option1"}
                    onChange={(e) => setKeyVal(e)}
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
