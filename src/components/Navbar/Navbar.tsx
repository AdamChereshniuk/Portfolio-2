import { NavLink } from "react-router-dom";
import { BtnDarkMode } from "../BtnDarkMode/BtnDarkMode";
import "./style.css";

export const Navbar = () => {
    const activeLink = "nav-list__link nav-list__link--active";
	const normalLink = "nav-list__link";

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to="/Portfolio/" className="logo">
						<strong>Freelancer</strong> portfolio
					</NavLink>

					<BtnDarkMode />

					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink className={() => window.location.pathname == "/Portfolio/" ? activeLink : normalLink} to="/Portfolio/">Главная</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink className={() => window.location.pathname.includes("projects") ? activeLink : normalLink} to="/Portfolio/projects">Проекты</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink className={() => window.location.pathname.includes("contacts") ? activeLink : normalLink} to="/Portfolio/contacts">Контакты</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};