import { Button } from "@mui/material";

interface Props {
    setKeyVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
    compNav: (val: string) => void;
}

const TicketType: React.FC<Props> = ({ setKeyVal, compNav }) => {
    const ticketTypes = [
        { value: "event", label: "Event Entry" },
        { value: "lumirank", label: "Lumirank Rental" },
        { value: "bronzeTest", label: "Bronze Test Session" },
    ];

    const mappedTickets = ticketTypes.map((ticket, index) => {
        return (
            <label key={index}>
                <input
                    type="radio"
                    value={ticket.value}
                    name="type"
                    //checked={selectedOption === "option1"}
                    onChange={(e) => setKeyVal(e)}
                />
                {ticket.label}
            </label>
        );
    });
    return (
        <section className="ticket select">
            <div className="select__radios">{mappedTickets}</div>
            <Button variant="contained" color="error" onClick={() => compNav("next")}>
                Next
            </Button>
        </section>
    );
};

export default TicketType;
