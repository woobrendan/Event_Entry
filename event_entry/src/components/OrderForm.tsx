import { useState } from "react";

//** Components */
import TicketType from "./TicketType";
import NewOrder from "./NewOrder";
import SeriesSelect from "./event_entry/SeriesSelect";
import EventSelect from "./event_entry/EventSelect";

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

    const setKeyVal = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrder((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const components = [
        <NewOrder compNav={componentNavigation} />,
        <TicketType setKeyVal={setKeyVal} compNav={componentNavigation} />,
        <EventSelect setKeyVal={setKeyVal} compNav={componentNavigation} />,
        <SeriesSelect setKeyVal={setKeyVal} compNav={componentNavigation} />,
        //next comp
    ];

    const CurrentComponent = components[currentComp];

    return <section className="order_form_container">{CurrentComponent}</section>;
};

export default OrderForm;
