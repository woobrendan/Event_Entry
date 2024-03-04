import { Button } from "@mui/material";

interface Props {
    compNav: (val: string) => void;
}

const NewOrder: React.FC<Props> = ({ compNav }) => {
    return (
        <div className="new_order_container">
            <h1>2025 SRO Motorsports America Season</h1>
            <h3>Welcome to the event entry website for SROMA. To begin order, please click below</h3>
            <Button variant="contained" color="error" onClick={() => compNav("next")}>
                Start
            </Button>
        </div>
    );
};

export default NewOrder;
