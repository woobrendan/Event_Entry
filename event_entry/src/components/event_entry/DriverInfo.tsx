import { SetAndNav, DriverInfoInterface } from "../../models/props";
import { useState } from "react";
import drivers from "../../seeds/drivers";
import BackNextButtons from "../BackNextButtons";

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
            <div className="input__driver">
                <label>Driver:</label>
                <select name="driverName" value={driverEntry.driverName} onInput={handleSelect}>
                    <option value="" disabled>
                        Select Driver
                    </option>
                    {drivers.map((driver, index) => {
                        return (
                            <option value={driver} key={index}>
                                {driver}
                            </option>
                        );
                    })}
                </select>
            </div>
            <BackNextButtons compNav={compNav} />
        </section>
    );
};

export default DriverInfo;
