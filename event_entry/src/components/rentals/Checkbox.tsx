interface Props {
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	checked: boolean;
	name: string;
}

const CheckBox: React.FC<Props> = ({ label, onChange, checked, name }) => {
	return (
		<div className="cable_checkbox">
			<input type="checkbox" name={name} onChange={onChange} checked={checked} />
			<label>{label}</label>
		</div>
	);
};

export default CheckBox;
