import { EventOrder, SetAndNav } from "../../models/props";

interface Props extends SetAndNav {
	eventOrder: EventOrder;
}

const BronzeTest: React.FC<Props> = ({ eventOrder }) => {
	const { driver1, series } = eventOrder;
	console.log("series", series);
	return <section></section>;
};

export default BronzeTest;
