interface Select {
	label: string;
	className: string;
	name: string;
	value: string;
	onInput: (e: React.ChangeEvent<HTMLSelectElement>, num: string) => void;
	valArr: string[];
	driverNum: string;
}

const DriverSelectElements: React.FC<Select> = ({ label, className, name, value, onInput, valArr, driverNum }) => {
	valArr = valArr.sort();

	return (
		<div className={className}>
			<label>{label}:</label>
			<select
				name={name}
				value={value}
				onInput={(e: React.ChangeEvent<HTMLSelectElement>) => onInput(e, driverNum)}
			>
				<option value="" disabled>
					Select {label}
				</option>
				{valArr.map((val, index) => {
					return (
						<option value={val} key={index}>
							{val}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default DriverSelectElements;
