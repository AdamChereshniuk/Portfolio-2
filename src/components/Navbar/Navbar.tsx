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
					<NavLink to="/Portfolio-2/" className="logo">
						<strong>Freelancer</strong> portfolio
					</NavLink>

					<BtnDarkMode />

					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink className={() => window.location.pathname == "/Portfolio-2/" ? activeLink : normalLink} to="/Portfolio-2/">Главная</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink className={() => window.location.pathname.includes("projects") ? activeLink : normalLink} to="/Portfolio-2/projects">Проекты</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink className={() => window.location.pathname.includes("contacts") ? activeLink : normalLink} to="/Portfolio-2/contacts">Контакты</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink className={() => window.location.pathname.includes("documents") ? activeLink : normalLink} to="/Portfolio-2/documents">Сертификаты</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};