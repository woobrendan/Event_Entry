import { EventOrder, SetAndNav } from "../../models/props";

interface Props extends SetAndNav {
	eventOrder: EventOrder;
}

const BronzeTest: React.FC<Props> = () => {
	return <section></section>;
};

export default BronzeTest;
