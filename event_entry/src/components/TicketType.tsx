import { Button } from "@mui/material";
import { useState } from "react";
import { SetAndNav } from "../models/props";

const TicketType: React.FC<SetAndNav> = ({ setKeyVal, compNav }) => {
    const [selected, setSelected] = useState("");

    const ticketTypes = [
        { value: "event", label: "Event Entry" },
        { value: "lumirank", label: "Lumirank Rental" },
        { value: "bronzeTest", label: "Bronze Test Session" },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value);
        setKeyVal(e);
    };

    const mappedTickets = ticketTypes.map((ticket, index) => {
        return (
            <label key={index}>
                <input
                    type="radio"
                    value={ticket.value}
                    name="type"
                    checked={selected === ticket.value}
                    onChange={(e) => handleChange(e)}
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
