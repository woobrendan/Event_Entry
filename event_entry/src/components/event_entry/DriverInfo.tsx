import { SetAndNav } from "../../models/props";
import { EventOrder, DriverObjInterface, DriverInfoInterface } from "../../store/types";
import { useState, useEffect } from "react";
import BackNextButtons from "../BackNextButtons";
import { isBronzeEligible, isDualDriverSeries } from "../../functions/helpers";
import SingleDriverInfo from "./SingleDriverInfo";

interface Props extends SetAndNav {
	eventOrder: EventOrder;
	handleCheck: (e: React.ChangeEvent<HTMLInputElement>, driver: string, driverObj: DriverInfoInterface) => void;
}

const DriverInfo: React.FC<Props> = ({ compNav, handleFormElement, eventOrder, handleCheck }) => {
	const bronzeEligible = isBronzeEligible(eventOrder.series);
	// Sets whether to render one or two driver components
	const [isDualDriver, setIsDualDriver] = useState(isDualDriverSeries(eventOrder.series));

	useEffect(() => {
		setIsDualDriver(isDualDriverSeries(eventOrder.series));
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

	return (
		<section className="driver_info input">
			<div className="driver_info_container">
				<SingleDriverInfo
					driverNum="1"
					driverEntry={driverEntry}
					handleSelect={handleSelect}
					handleInput={handleInput}
					handleCheck={handleCheck}
				/>
				{isDualDriver && (
					<SingleDriverInfo
						driverNum="2"
						driverEntry={driverEntry}
						handleSelect={handleSelect}
						handleInput={handleInput}
						handleCheck={handleCheck}
					/>
				)}
			</div>
			<BackNextButtons compNav={compNav} isValid={true} />
		</section>
	);
};

export default DriverInfo;
