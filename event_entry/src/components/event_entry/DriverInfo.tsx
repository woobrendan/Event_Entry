import { SetAndNav, DriverObjInterface } from "../../models/props";
import { EventOrder } from "../../store/types";
import { useState, useEffect } from "react";
import drivers from "../../seeds/drivers";
import countryCodes from "../../seeds/countryCodes";
import BackNextButtons from "../BackNextButtons";
import DriverSelectElement from "./DriverSelectElement";
import { getSeriesShort, singleDriverObj } from "../../functions/helpers";
import SingleDriverInfo from "./SingleDriverInfo";

interface Props extends SetAndNav {
	eventOrder: EventOrder;
}

const DriverInfo: React.FC<Props> = ({ compNav, handleFormElement, eventOrder }) => {
	const shortSeries = getSeriesShort(eventOrder.series);
	const bronzeEligible = shortSeries === "gtwc" || shortSeries === "gt4a" || shortSeries === "gtam";

	// Sets whether to render one or two driver components
	const [isDualDriver, setIsDualDriver] = useState(shortSeries === "gtwc" || shortSeries === "gt4a");

	useEffect(() => {
		setIsDualDriver(shortSeries === "gtwc" || shortSeries === "gt4a");
	}, [eventOrder.series]);

	const [driverEntry, setDriverEntry] = useState<DriverObjInterface>({
		driver1: { ...eventOrder.driver1 },
		...(eventOrder.driver2 ? { driver2: { ...eventOrder.driver2 } } : {}),
	});

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>, driverNum: string) => {
		const driverStr = `driver${driverNum}`;
		setDriverEntry((prev) => ({
			...prev,
			[driverStr]: {
				...prev[driverStr],
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
				...prev[driverStr],
				[e.target.name]: e.target.value,
			},
		}));
		handleFormElement(e, driverStr);
	};

	// const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, driver: string) => {
	//     setBronzeTest((prev) => ({
	//         ...prev,
	//         [driver]:
	//     }))
	// }

	const singleDriverInfo = (driverNum: string) => {
		const driver = driverEntry[`driver${driverNum}` as keyof typeof driverEntry];
		if (driver) {
			const { driverName, driverNAT, fiaCAT, hometown, cell, email } = driver;
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
					{/* <div>
						<input
							type="checkbox"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheck(e, driverNum)}
							checked={isChecked[`check${driverNum}` as keyof isChecked]}
						/>
					</div> */}
				</div>
			);
		}
	};

	return (
		<section className="driver_info input">
			<div className="driver_info_container">
				{/* {singleDriverInfo("1")} */}
				<SingleDriverInfo
					driverNum="1"
					driverEntry={driverEntry}
					handleSelect={handleSelect}
					handleInput={handleInput}
				/>
				{isDualDriver && (
					<SingleDriverInfo
						driverNum="2"
						driverEntry={driverEntry}
						handleSelect={handleSelect}
						handleInput={handleInput}
					/>
				)}
			</div>
			<BackNextButtons compNav={compNav} isValid={true} />
		</section>
	);
};

export default DriverInfo;
