import { useState } from "react";

//** Components */
import TicketType from "./TicketType";
import NewOrder from "./NewOrder";
import SeriesSelect from "./event_entry/SeriesSelect";

import "../styles/orderForm.scss";

const OrderForm: React.FC = () => {
    // order 1: type event
    //order2 : type event
    //order3: lumirank rental
    const [order, setOrder] = useState({
        order1: { type: "" },
    });

    const [currentComp, setCurrentComp] = useState(0);

    const selectTicketType = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrder((prev) => ({
            ...prev,
            order1: { type: e.target.value },
        }));
    };

    const componentNavigation = (val: string): void => {
        val === "next" ? setCurrentComp(currentComp + 1) : setCurrentComp(currentComp - 1);
    };

    const components = [
        <NewOrder compNav={componentNavigation} />,
        <TicketType handleChange={selectTicketType} compNav={componentNavigation} />,
        <SeriesSelect compNav={componentNavigation} />,
        //next comp
    ];

    const CurrentComponent = components[currentComp];

    return <section className="order_form_container">{CurrentComponent}</section>;
};

export default OrderForm;
