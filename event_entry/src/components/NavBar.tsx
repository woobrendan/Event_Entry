import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
	return (
		<header id="nav-bar">
			<div className="nav-bar_container">
				<div className="nav-bar_links">
					<nav>
						<Link to="/cart">Cart</Link>
						<Link to="/eventOrder">Event Entry</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
