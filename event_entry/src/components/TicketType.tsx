import { Button } from "@mui/material";
import { useState } from "react";
import { SetAndNav } from "../models/props";

interface Props {
    handleBoxClick: (name: string, val: string) => void;
    compNav: (val: string) => void;
}

const TicketType: React.FC<Props> = ({ handleBoxClick, compNav }) => {
    const [selected, setSelected] = useState("");

    const ticketTypes = [
        { value: "event", label: "Event Entry" },
        { value: "lumirank", label: "Lumirank Rental" },
        { value: "bronzeTest", label: "Bronze Test Session" },
    ];

    //const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //    setSelected(e.target.value);
    //    handleFormElement(e);
    //};

    const handleClick = (val) => {
        setSelected(val);
    };

    //const mappedTickets = ticketTypes.map((ticket, index) => {
    //    return (
    //        <label key={index}>
    //            <input
    //                type="radio"
    //                value={ticket.value}
    //                name="type"
    //                checked={selected === ticket.value}
    //                onChange={(e) => handleChange(e)}
    //            />
    //            {ticket.label}
    //        </label>
    //    );
    //});

    const boxTickets = ticketTypes.map((ticket, index) => {
        return (
            <div
                className={`ticket click_box ${selected === ticket.value ? "selected" : ""}`}
                onClick={() => handleClick(ticket.value)}
                key={index}
            >
                {ticket.label}
            </div>
        );
    });

    return (
        <section className="ticket select">
            <div className="select__radios">{boxTickets}</div>
            <Button variant="contained" color="error" onClick={() => compNav("next")}>
                Next
            </Button>
        </section>
    );
};

export default TicketType;
