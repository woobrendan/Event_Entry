import { Button } from "@mui/material";

interface Props {
    compNav: (val: string) => void;
}

const SeriesSelect: React.FC<Props> = ({ compNav }) => {
    return (
        <section className="series_select">
            <div className="series_select__radios">
                <label>
                    <input
                        type="radio"
                        value="option1"
                        //checked={selectedOption === "option1"}
                        //onChange={(e) => handleChange(e)}
                    />
                    Fanatec GT World Challenge America
                </label>
                <label>
                    <input
                        type="radio"
                        value="option1"
                        //checked={selectedOption === "option1"}
                        //onChange={(e) => handleChange(e)}
                    />
                    Pirelli GT4 America
                </label>
                <label>
                    <input
                        type="radio"
                        value="option1"
                        //checked={selectedOption === "option1"}
                        //onChange={(e) => handleChange(e)}
                    />
                    GT America
                </label>
                <label>
                    <input
                        type="radio"
                        value="option1"
                        //checked={selectedOption === "option1"}
                        //onChange={(e) => handleChange(e)}
                    />
                    TC America
                </label>
                <label>
                    <input
                        type="radio"
                        value="option1"
                        //checked={selectedOption === "option1"}
                        //onChange={(e) => handleChange(e)}
                    />
                    Toyota GR Cup
                </label>
            </div>
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
