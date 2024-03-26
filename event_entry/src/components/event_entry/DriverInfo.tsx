import { SetAndNav, DriverInfoInterface, EventOrder } from "../../models/props";
import { useState } from "react";
import drivers from "../../seeds/drivers";
import countryCodes from "../../seeds/countryCodes";
import BackNextButtons from "../BackNextButtons";
import SelectElements from "./SelectElements";

interface Props extends SetAndNav {
    eventOrder: EventOrder;
}

const DriverInfo: React.FC<Props> = ({ compNav, handleFormElement, eventOrder }) => {
    const { driverName = "", driverNAT = "", fiaCAT = "", hometown = "", email = "", cell = "" } = eventOrder.driver1;
    const [driverEntry, setDriverEntry] = useState<DriverInfoInterface>({
        driverName,
        driverNAT,
        fiaCAT,
        hometown,
        email,
        cell,
    });

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDriverEntry((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        handleFormElement(e, "driver1");
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDriverEntry((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        handleFormElement(e, "driver1");
    };

    return (
        <section className="driver_info input">
            <SelectElements
                label="Driver"
                className="input__driver"
                name="driverName"
                value={driverEntry.driverName}
                onInput={handleSelect}
                valArr={drivers}
            />
            <SelectElements
                label="Nationality"
                className="input__driver"
                name="driverNAT"
                value={driverEntry.driverNAT}
                onInput={handleSelect}
                valArr={countryCodes}
            />
            <SelectElements
                label="FIA Rating"
                className="input__driver"
                name="fiaCAT"
                value={driverEntry.fiaCAT}
                onInput={handleSelect}
                valArr={["N/A", "Bronze", "Silver", "Gold", "Platinum"]}
            />
            <div className="input__team">
                <label>Driver Hometown:</label>
                <input value={driverEntry.hometown} name="hometown" onInput={handleInput} />
            </div>
            <div className="input__team">
                <label>Driver Email:</label>
                <input type="email" value={driverEntry.email} name="email" onInput={handleInput} />
            </div>
            <div className="input__team">
                <label>Driver Cell:</label>
                <input type="tel" value={driverEntry.cell} name="cell" onInput={handleInput} />
            </div>
            <BackNextButtons compNav={compNav} isValid={false} />
        </section>
    );
};

export default DriverInfo;
