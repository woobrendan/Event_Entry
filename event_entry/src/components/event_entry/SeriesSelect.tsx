import BackNextButtons from "../BackNextButtons";

interface Props {
    compNav: (val: string) => void;
    setKeyVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SeriesSelect: React.FC<Props> = ({ compNav, setKeyVal }) => {
    const series = [
        "Fanatec GT World Challenge America",
        "Pirelli GT4 America",
        "GT America",
        "TC America",
        "Toyota GR Cup",
    ];

    const mappedSeries = series.map((val, index) => {
        return (
            <label key={index}>
                <input
                    type="radio"
                    value={val}
                    name="series"
                    //checked={selectedOption === "option1"}
                    onChange={(e) => setKeyVal(e)}
                />
                {val}
            </label>
        );
    });
    return (
        <section className="series select">
            <div className="select__radios">{mappedSeries}</div>
            <BackNextButtons compNav={compNav} />
        </section>
    );
};

export default SeriesSelect;
