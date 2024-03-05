import { Button } from "@mui/material";

interface Props {
    compNav: (val: string) => void;
}

const BackNextButtons: React.FC<Props> = ({ compNav }) => {
    return (
        <div className="comp_nav_buttons">
            <Button variant="outlined" color="error" onClick={() => compNav("back")}>
                Back
            </Button>
            <Button variant="contained" color="error" onClick={() => compNav("next")}>
                Next
            </Button>
        </div>
    );
};

export default BackNextButtons;
