import { Button } from "@mui/material";

interface Props {
    setKeyVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
    compNav: (val: string) => void;
}

const TicketType: React.FC<Props> = ({ setKeyVal, compNav }) => {
    return (
        <section className="ticket_type">
            <div className="ticket_type__radios">
                <label>
                    <input
                        type="radio"
                        value="event"
                        name="type"
                        //checked={selectedOption === "option1"}
                        onChange={(e) => setKeyVal(e)}
                    />
                    Event Entry
                </label>
                <label>
                    <input
                        type="radio"
                        value="lumirank"
                        name="type"
                        //checked={selectedOption === "option1"}
                        onChange={(e) => setKeyVal(e)}
                    />
                    Lumirank Rental
                </label>
                <label>
                    <input
                        type="radio"
                        value="bronze"
                        name="type"
                        //checked={selectedOption === "option1"}
                        onChange={(e) => setKeyVal(e)}
                    />
                    Bronze Test Session
                </label>
            </div>

            <Button variant="contained" color="error" onClick={() => compNav("next")}>
                Next
            </Button>
        </section>
    );
};

export default TicketType;
