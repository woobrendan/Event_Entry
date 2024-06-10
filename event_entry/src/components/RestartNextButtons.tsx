import { Button } from "@mui/material";

interface Props {
	compNav: (val: string) => void;
	isValid: boolean;
}

const RestartNextButtons: React.FC<Props> = ({ compNav, isValid }) => {
	return (
		<div className="comp_nav_buttons">
			<Button
				variant="outlined"
				color="error"
				onClick={() => compNav("restart")}
			>
				Restart
			</Button>
			<Button
				disabled={!isValid}
				variant="contained"
				color="error"
				onClick={() => compNav("next")}
			>
				Next
			</Button>
		</div>
	);
};

export default RestartNextButtons;
