import { SetAndNav } from "../../models/props";
import { EventOrder, DriverObjInterface } from "../../store/types";
import { useState, useEffect } from "react";
import BackNextButtons from "../BackNextButtons";
import { getSeriesShort } from "../../functions/helpers";
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
