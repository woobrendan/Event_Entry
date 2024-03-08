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

    const handleInputElement = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrder((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const components = [
        <NewOrder compNav={componentNavigation} />,
        <TicketType handleInputElement={handleInputElement} compNav={componentNavigation} />,
        <EventSelect handleInputElement={handleInputElement} compNav={componentNavigation} />,
        <SeriesSelect handleInputElement={handleInputElement} compNav={componentNavigation} />,
        <TeamNumber handleInputElement={handleInputElement} compNav={componentNavigation} />,
    ];

    const CurrentComponent = components[currentComp];

    return <section className="order_form_container">{CurrentComponent}</section>;
};

export default OrderForm;
