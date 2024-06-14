import DriverSelectElement from "./DriverSelectElement";

interface Props {
	driverNum: string;
}

const SingleDriverInfo: React.FC<Props> = ({ driverNum }) => {
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
			<div>
				<input
					type="checkbox"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheck(e, driverNum)}
					checked={isChecked[`check${driverNum}` as keyof isChecked]}
				/>
			</div>
		</div>
	);
};

export default SingleDriverInfo;
