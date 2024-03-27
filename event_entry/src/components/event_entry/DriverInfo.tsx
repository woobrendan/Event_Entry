import { SetAndNav, DriverInfoInterface, EventOrder } from "../../models/props";
import { useState, useEffect } from "react";
import drivers from "../../seeds/drivers";
import countryCodes from "../../seeds/countryCodes";
import BackNextButtons from "../BackNextButtons";
import SelectElements from "./SelectElements";
import { getSeriesShort } from "../../functions/helpers";

interface Props extends SetAndNav {
    eventOrder: EventOrder;
}

const DriverInfo: React.FC<Props> = ({ compNav, handleFormElement, eventOrder }) => {
    const shortSeries = getSeriesShort(eventOrder.series);
    const { driverName = "", driverNAT = "", fiaCAT = "", hometown = "", email = "", cell = "" } = eventOrder.driver1;
    const [isDualDriver, setIsDualDriver] = useState(shortSeries === "gtwc" || shortSeries === "gt4a");
    const [driverEntry, setDriverEntry] = useState<DriverInfoInterface>({
        driverName,
        driverNAT,
        fiaCAT,
        hometown,
        email,
        cell,
    });

    useEffect(() => {
        setIsDualDriver(shortSeries === "gtwc" || shortSeries === "gt4a");
    }, [eventOrder.series]);

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

    const singleDriverInfo = (
        <div className="driver_info__driver">
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
        </div>
    );

    return (
        <section className="driver_info input">
            {singleDriverInfo}
            {isDualDriver && <>{singleDriverInfo}</>}
            <BackNextButtons compNav={compNav} isValid={false} />
        </section>
    );
};

export default DriverInfo;
