const EventSelect: React.FC = () => {
    return (
        <section className="series_select">
            <div className="series_select__radios">
                <label>
                    <input
                        type="radio"
                        value="Fanatec GT World Challenge America"
                        name="series"
                        //checked={selectedOption === "option1"}
                        onChange={(e) => setKeyVal(e)}
                    />
                    Fanatec GT World Challenge America
                </label>
                <label>
                    <input
                        type="radio"
                        value="Pirelli GT4 America"
                        name="series"
                        //checked={selectedOption === "option1"}
                        onChange={(e) => setKeyVal(e)}
                    />
                    Pirelli GT4 America
                </label>
                <label>
                    <input
                        type="radio"
                        value="option1"
                        name="series"
                        //checked={selectedOption === "option1"}
                        onChange={(e) => setKeyVal(e)}
                    />
                    GT America
                </label>
                <label>
                    <input
                        type="radio"
                        value=" TC America"
                        name="series"
                        //checked={selectedOption === "option1"}
                        onChange={(e) => setKeyVal(e)}
                    />
                    TC America
                </label>
                <label>
                    <input
                        type="radio"
                        value="Toyota GR Cup"
                        name="series"
                        //checked={selectedOption === "option1"}
                        onChange={(e) => setKeyVal(e)}
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

export default EventSelect;
