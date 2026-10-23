import { NavLink } from "react-router-dom";
import type { Project } from "../../helpers/projectsList";
import "./style.css";

export const ProjectComponent = ({project}: {project: Project}) => {
    return (
        <NavLink to={`/Portfolio-2/project/${project.id}`}>
			<li className="project">
				<img src={project.img} alt={project.title} className="project__img" />
				<div className="project__content">
					<div className="project__inscriptions">
						{project.fromFreelance !== null && project.fromFreelance === true && <span className="project__inscription freelance">Проект с фриланса</span>}
						{project.teamProject !== null && project.teamProject === true && <span className="project__inscription team">Командный проект</span>}
						{project.bigProject !== null && project.bigProject === true && <span className="project__inscription big">Большой проект</span>}
					</div>
					<h3 className="project__title">{project.title}</h3>
				</div>
			</li>
		</NavLink>
    );
};