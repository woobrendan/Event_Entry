import { Button } from "@mui/material";

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

    const mappedInputs = events.map((event) => {
        return (
            <label>
                <input
                    type="radio"
                    value={event}
                    name="event"
                    //checked={selectedOption === "option1"}
                    onChange={(e) => setKeyVal(e)}
                />
                {event}
            </label>
        );
    });
    return (
        <section className="event_select">
            <div className="event_select__radios">{mappedInputs}</div>
            <div className="comp_nav_buttons">
                <Button variant="outlined" color="error" onClick={() => compNav("back")}>
                    Back
                </Button>
                <Button variant="contained" color="error" onClick={() => compNav("next")}>
                    Next
                </Button>
            </div>
        </section>
    );
};

export default EventSelect;
