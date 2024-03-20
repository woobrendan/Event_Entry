import { SetAndNav, DriverInfo } from "../../models/props";
import { useState } from "react";

const DriverInfo: React.FC<SetAndNav> = ({ compNav, handleFormElement }) => {
    const [driver, setDriver] = useState({
        driverName: "",
        driverNAT: "",
        fiaCAT: "",
        hometown: "",
        email: "",
        cell: "",
    });

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDriver((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        handleFormElement(e);
    };
    return <></>;
};

export default DriverInfo;
