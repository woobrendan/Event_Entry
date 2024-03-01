import { useState } from "react";
import TicketType from "./TicketType";
import NewOrder from "./NewOrder";

//use array of components to track what is next
//crete old state to go back one

const OrderForm: React.FC = () => {
    // order 1: type event
    //order2 : type event
    //order3: lumirank rental
    const [order, setOrder] = useState({
        order1: { type: "" },
    });

    const selectTicketType = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrder((prev) => ({
            ...prev,
            order1: { type: e.target.value },
        }));
    };

    return (
        <section className="order_form_container">
            {/* select Order type (event, lumirank, bronze) */}
            <NewOrder />
            {/*<TicketType handleChange={selectTicketType} />*/}
        </section>
    );
};

export default OrderForm;
