import { useState } from "react";

//** Components */
import TicketType from "./TicketType";
import NewOrder from "./NewOrder";
import SeriesSelect from "./event_entry/SeriesSelect";
import EventSelect from "./event_entry/EventSelect";
import TeamNumber from "./event_entry/TeamNumber";

import "../styles/orderForm.scss";

const OrderForm: React.FC = () => {
    // each order will indicate type, at end add to redux cart
    const [order, setOrder] = useState({
        //order1: { type: "" },
    });

    const [currentComp, setCurrentComp] = useState(0);

    const componentNavigation = (val: string): void => {
        val === "next" ? setCurrentComp(currentComp + 1) : setCurrentComp(currentComp - 1);
    };

    const handleFormElement = <T extends HTMLInputElement | HTMLSelectElement>(e: React.ChangeEvent<T>) => {
        setOrder((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const components = [
        <NewOrder compNav={componentNavigation} />,
        <TicketType handleFormElement={handleFormElement} compNav={componentNavigation} />,
        <EventSelect handleFormElement={handleFormElement} compNav={componentNavigation} />,
        <SeriesSelect handleFormElement={handleFormElement} compNav={componentNavigation} />,
        <TeamNumber handleFormElement={handleFormElement} compNav={componentNavigation} />,
    ];

    const CurrentComponent = components[currentComp];

    return <section className="order_form_container">{CurrentComponent}</section>;
};

export default OrderForm;
