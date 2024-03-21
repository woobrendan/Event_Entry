import { SetAndNav, DriverInfoInterface } from "../../models/props";
import { useState } from "react";
import drivers from "../../seeds/drivers";
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
            <BackNextButtons compNav={compNav} />
        </section>
    );
};

export default DriverInfo;
