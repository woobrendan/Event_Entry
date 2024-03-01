import { useState } from "react";
import TicketType from "./TicketType";
import NewOrder from "./NewOrder";

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

    const nextComponent = () => {
        setCurrentComp(currentComp + 1);
    };

    const components = [
        <NewOrder next={nextComponent} />,
        <TicketType handleChange={selectTicketType} />,
        //next comp
        //next comp
    ];

    const CurrentComponent = components[currentComp];

    return <section className="order_form_container">{CurrentComponent}</section>;
};

export default OrderForm;
