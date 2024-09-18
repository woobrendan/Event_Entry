interface Props {
	label: string;
}

const CheckBox: React.FC<Props> = ({ label }) => {
	return (
		<div className="cable_checkbox">
			<input type="checkbox" />
			<label>{label}</label>
		</div>
	);
};

export default CheckBox;
