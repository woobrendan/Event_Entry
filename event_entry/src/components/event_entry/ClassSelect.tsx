import { ClickAndNav } from "../../models/props";
import BackNextButtons from "../BackNextButtons";

interface Props extends ClickAndNav {
    series: string;
}

const ClassSelect: React.FC<Props> = ({ series, handleBoxClick, compNav }) => {
    return (
        <section className="class_select_container click_component">
            {/*<div className="click_box">{boxTickets}</div>*/}
            <BackNextButtons compNav={compNav} />
        </section>
    );
};

export default ClassSelect;
