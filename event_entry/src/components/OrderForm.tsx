import { useState } from "react";
import { EventOrder } from "../models/props";
import { initialEventOrder } from "../functions/helpers";

//** Components */
import TicketType from "./TicketType";
import NewOrder from "./NewOrder";
import SeriesSelect from "./event_entry/SeriesSelect";
import EventSelect from "./event_entry/EventSelect";
import EntryInfo from "./event_entry/EntryInfo";
import ClassSelect from "./event_entry/ClassSelect";
import DriverInfo from "./event_entry/DriverInfo";

import "../styles/orderForm.scss";

const OrderForm: React.FC = () => {
    // each order will indicate type, at end add to redux cart
    // when ticket type set, set state keys (event class etc)
    const [order, setOrder] = useState<EventOrder>(initialEventOrder);

    const [currentComp, setCurrentComp] = useState(0);

    const compNav = (val: string): void => {
        val === "next" ? setCurrentComp(currentComp + 1) : setCurrentComp(currentComp - 1);
    };

    const handleFormElement = <T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        e: React.ChangeEvent<T>,
    ) => {
        setOrder((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleBoxClick = (name: string, val: string) => {
        setOrder((prev) => ({
            ...prev,
            [name]: val,
        }));
    };

    const components = [
        <NewOrder compNav={compNav} />,
        <TicketType handleBoxClick={handleBoxClick} compNav={compNav} type={order.type} />,
        <EventSelect handleBoxClick={handleBoxClick} compNav={compNav} event={order.event} />,
        <SeriesSelect handleBoxClick={handleBoxClick} compNav={compNav} series={order.series} />,
        <ClassSelect handleBoxClick={handleBoxClick} compNav={compNav} series={order.series} classif={order.class} />,
        <EntryInfo handleFormElement={handleFormElement} compNav={compNav} eventOrder={order} />,
        <DriverInfo handleFormElement={handleFormElement} compNav={compNav} />,
    ];

    const CurrentComponent = components[currentComp];

    return <section className="order_form_container">{CurrentComponent}</section>;
};

export default OrderForm;
