import { Button } from "@mui/material";

interface Props {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    compNav: (val: string) => void;
}

const TicketType: React.FC<Props> = ({ handleChange, compNav }) => {
    return (
        <section className="ticket_type">
            <div className="ticket_type__radios">
                <label>
                    <input
                        type="radio"
                        value="option1"
                        //checked={selectedOption === "option1"}
                        onChange={(e) => handleChange(e)}
                    />
                    Event Entry
                </label>
                <label>
                    <input
                        type="radio"
                        value="option1"
                        //checked={selectedOption === "option1"}
                        onChange={(e) => handleChange(e)}
                    />
                    Lumirank Rental
                </label>
                <label>
                    <input
                        type="radio"
                        value="option1"
                        //checked={selectedOption === "option1"}
                        onChange={(e) => handleChange(e)}
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
