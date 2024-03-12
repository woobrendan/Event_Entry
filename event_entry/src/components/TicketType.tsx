import { useState } from "react";
import { ClickAndNav } from "../models/props";

const TicketType: React.FC<ClickAndNav> = ({ handleBoxClick, compNav }) => {
    const [selected, setSelected] = useState("");

    const ticketTypes = [
        { value: "event", label: "Event Entry" },
        { value: "lumirank", label: "Lumirank Rental" },
        { value: "bronzeTest", label: "Bronze Test Session" },
    ];

    const handleClick = (val: string) => {
        setSelected(val);
        handleBoxClick("type", val);
        compNav("next");
    };

    const boxTickets = ticketTypes.map((ticket, index) => {
        return (
            <div
                className={`ticket click_box__div ${selected === ticket.value ? "selected" : ""}`}
                onClick={() => handleClick(ticket.value)}
                key={index}
            >
                {ticket.label}
            </div>
        );
    });

    return (
        <section className="ticket_type_container">
            <div className="click_box">{boxTickets}</div>
        </section>
    );
};

export default TicketType;
