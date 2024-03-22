import { SetAndNav, DriverInfoInterface } from "../../models/props";
import { useState } from "react";
import drivers from "../../seeds/drivers";
import countryCodes from "../../seeds/countryCodes";
import BackNextButtons from "../BackNextButtons";
import SelectElements from "./SelectElements";

const DriverInfo: React.FC<SetAndNav> = ({ compNav, handleFormElement }) => {
    const [driverEntry, setDriverEntry] = useState({
        driverName: "",
        driverNAT: "",
        fiaCAT: "",
        hometown: "",
        email: "",
        cell: "",
    });

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDriverEntry((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        handleFormElement(e);
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
            <BackNextButtons compNav={compNav} />
        </section>
    );
};

export default DriverInfo;
