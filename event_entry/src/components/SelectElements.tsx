interface Select {
	label: string;
	className: string;
	name: string;
	value: string;
	onInput: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	valArr: string[];
}

const SelectElements: React.FC<Select> = ({ label, className, name, value, onInput, valArr }) => {
	if (name === "driverName") {
		valArr = valArr.sort();
	}

	return (
		<div className={className}>
			<label>{label}:</label>
			<select name={name} value={value} onInput={onInput}>
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

export default SelectElements;
