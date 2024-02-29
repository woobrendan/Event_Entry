const TicketType: React.FC = () => {
    return (
        <section className="ticket_type">
            <label>
                <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                />
                Option 1
            </label>
            <label>
                <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                />
                Option 1
            </label>
            <label>
                <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                />
                Option 1
            </label>
        </section>
    );
};

export default TicketType;
