import { useState } from "react";
import DriverSelectElement from "./DriverSelectElement";
import { DriverObjInterface, DriverInfoInterface } from "../../store/types";
import drivers from "../../seeds/drivers";
import countryCodes from "../../seeds/countryCodes";

interface Props {
	driverNum: string;
	driverEntry: DriverObjInterface;
	handleSelect: (e: React.ChangeEvent<HTMLSelectElement>, driverNum: string) => void;
	handleInput: (e: React.ChangeEvent<HTMLInputElement>, driverNum: string) => void;
	handleCheck: (e: React.ChangeEvent<HTMLInputElement>, driver: string, driverObj: DriverInfoInterface) => void;
}
interface Checkbox {
	[key: string]: boolean;
}

const SingleDriverInfo: React.FC<Props> = ({ driverNum, driverEntry, handleSelect, handleInput, handleCheck }) => {
	const driver = driverEntry[`driver${driverNum}` as keyof typeof driverEntry];
	const { driverName, driverNAT, fiaCAT, hometown, cell, email } = driver;
	const [isChecked, setIsChecked] = useState<Checkbox>({ check1: false, check2: false });

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleCheck(e, driverNum, driver);
		setIsChecked((prev) => ({
			...prev,
			[`check${driverNum}`]: !prev[`check${driverNum}`],
		}));
	};

	return (
		<div className="driver_info__driver">
			<DriverSelectElement
				label={`Driver ${driverNum}`}
				className="input__driver"
				name="driverName"
				value={driverName}
				onInput={handleSelect}
				valArr={drivers}
				driverNum={driverNum}
			/>
			<DriverSelectElement
				label="Nationality"
				className="input__driver"
				name="driverNAT"
				value={driverNAT}
				onInput={handleSelect}
				valArr={countryCodes}
				driverNum={driverNum}
			/>
			<DriverSelectElement
				label="FIA Rating"
				className="input__driver"
				name="fiaCAT"
				value={fiaCAT}
				onInput={handleSelect}
				valArr={["N/A", "Bronze", "Silver", "Gold", "Platinum"]}
				driverNum={driverNum}
			/>
			<div className="input__team">
				<label>Driver Hometown:</label>
				<input
					value={hometown}
					name="hometown"
					onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, driverNum)}
				/>
			</div>
			<div className="input__team">
				<label>Driver Email:</label>
				<input
					type="email"
					value={email}
					name="email"
					onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, driverNum)}
				/>
			</div>
			<div className="input__team">
				<label>Driver Cell:</label>
				<input
					type="tel"
					value={cell}
					name="cell"
					onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, driverNum)}
				/>
			</div>
			<div>
				<input type="checkbox" onChange={onChange} checked={isChecked[`check${driverNum}`]} />
			</div>
		</div>
	);
};

export default SingleDriverInfo;
