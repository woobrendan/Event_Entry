const SelectElements: React.FC = () => {
    return (
        <div className="input__driver">
            <label>Driver:</label>
            <select name="driverName" value={driverEntry.driverName} onInput={handleSelect}>
                <option value="" disabled>
                    Select Driver
                </option>
                {drivers.sort().map((driver, index) => {
                    return (
                        <option value={driver} key={index}>
                            {driver}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default SelectElements;
