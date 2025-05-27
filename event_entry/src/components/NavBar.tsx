import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
	return (
		<header id="nav-bar">
			<div className="nav-bar_container">
				<nav className="nav-bar_links">
					<Link to="/eventOrder">Event Entry</Link>
					<Link to="/rentals">Lumirank Rentals</Link>
					<Link to="/BronzeTest">Bronze Test</Link>
					<Link to="/cart">Cart</Link>
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
