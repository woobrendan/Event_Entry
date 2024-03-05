import BackNextButtons from "../BackNextButtons";

interface Props {
    compNav: (val: string) => void;
    setKeyVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SeriesSelect: React.FC<Props> = ({ compNav, setKeyVal }) => {
    return (
        <section className="series select">
            <div className="select__radios">
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
            <BackNextButtons compNav={compNav} />
        </section>
    );
};

export default SeriesSelect;
