import { Button } from "@mui/material";

const SeriesSelect: React.FC = () => {
    return (
        <section>
            {/* select series */}
            <div className="comp_nav_buttons">
                <Button variant="outlined" color="error" onClick={() => compNav("back")}>
                    Back
                </Button>
                <Button variant="contained" color="error" onClick={() => compNav("next")}>
                    Next
                </Button>
            </div>
        </section>
    );
};

export default SeriesSelect;
