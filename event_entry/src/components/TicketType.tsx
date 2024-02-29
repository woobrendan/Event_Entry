interface Props {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TicketType: React.FC<Props> = ({ handleChange }) => {
    return (
        <section className="ticket_type">
            <label>
                <input
                    type="radio"
                    value="option1"
                    //checked={selectedOption === "option1"}
                    onChange={(e) => handleChange(e)}
                />
                Event Entry
            </label>
            <label>
                <input
                    type="radio"
                    value="option1"
                    //checked={selectedOption === "option1"}
                    onChange={(e) => handleChange(e)}
                />
                Lumirank Rental
            </label>
            <label>
                <input
                    type="radio"
                    value="option1"
                    //checked={selectedOption === "option1"}
                    onChange={(e) => handleChange(e)}
                />
                Bronze Test Session
            </label>
        </section>
    );
};

export default TicketType;
