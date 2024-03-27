import { SetAndNav, DriverObjInterface, EventOrder } from "../../models/props";
import { useState, useEffect } from "react";
import drivers from "../../seeds/drivers";
import countryCodes from "../../seeds/countryCodes";
import BackNextButtons from "../BackNextButtons";
import DriverSelectElement from "./DriverSelectElement";
import { getSeriesShort, singleDriverObj } from "../../functions/helpers";

interface Props extends SetAndNav {
    eventOrder: EventOrder;
}

const DriverInfo: React.FC<Props> = ({ compNav, handleFormElement, eventOrder }) => {
    const shortSeries = getSeriesShort(eventOrder.series);
    //const { driverName = "", driverNAT = "", fiaCAT = "", hometown = "", email = "", cell = "" } = eventOrder.driver1;

    const [isDualDriver, setIsDualDriver] = useState(shortSeries === "gtwc" || shortSeries === "gt4a");

    const [driverEntry, setDriverEntry] = useState<DriverObjInterface>({
        driver1: { ...singleDriverObj },
        ...(isDualDriver ? { driver2: { ...singleDriverObj } } : {}),
    });

    useEffect(() => {
        setIsDualDriver(shortSeries === "gtwc" || shortSeries === "gt4a");
    }, [eventOrder.series]);

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>, driverNum: string) => {
        const driverStr = `driver${driverNum}`;
        setDriverEntry((prev) => ({
            ...prev,
            [driverStr]: {
                [e.target.name]: e.target.value,
            },
        }));
        handleFormElement(e, driverStr);
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, driverNum: string) => {
        const driverStr = `driver${driverNum}`;
        setDriverEntry((prev) => ({
            ...prev,
            [driverStr]: {
                [e.target.name]: e.target.value,
            },
        }));
        handleFormElement(e, driverStr);
    };

    const singleDriverInfo = (driverNum: string) => {
        return (
            <div className="driver_info__driver">
                <DriverSelectElement
                    label={`Driver ${driverNum}`}
                    className="input__driver"
                    name="driverName"
                    value={driverEntry.driverName}
                    onInput={handleSelect}
                    valArr={drivers}
                    driverNum={driverNum}
                />
                <DriverSelectElement
                    label="Nationality"
                    className="input__driver"
                    name="driverNAT"
                    value={driverEntry.driverNAT}
                    onInput={handleSelect}
                    valArr={countryCodes}
                    driverNum={driverNum}
                />
                <DriverSelectElement
                    label="FIA Rating"
                    className="input__driver"
                    name="fiaCAT"
                    value={driverEntry.fiaCAT}
                    onInput={handleSelect}
                    valArr={["N/A", "Bronze", "Silver", "Gold", "Platinum"]}
                    driverNum={driverNum}
                />
                <div className="input__team">
                    <label>Driver Hometown:</label>
                    <input
                        value={driverEntry.hometown}
                        name="hometown"
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, driverNum)}
                    />
                </div>
                <div className="input__team">
                    <label>Driver Email:</label>
                    <input
                        type="email"
                        value={driverEntry.email}
                        name="email"
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, driverNum)}
                    />
                </div>
                <div className="input__team">
                    <label>Driver Cell:</label>
                    <input
                        type="tel"
                        value={driverEntry.cell}
                        name="cell"
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, driverNum)}
                    />
                </div>
            </div>
        );
    };

    return (
        <section className="driver_info input">
            {singleDriverInfo("1")}
            {isDualDriver && <>{singleDriverInfo("2")}</>}
            <BackNextButtons compNav={compNav} isValid={false} />
        </section>
    );
};

export default DriverInfo;
