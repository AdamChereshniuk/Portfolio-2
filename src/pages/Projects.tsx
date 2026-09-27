import { useState } from "react";
import { projects } from "../helpers/projectsList";
import { ProjectComponent } from "../components/Project/Project";

export const Projects = () => {
    const [currentTab, setCurrentTab] = useState("htmlCssJs"); // htmlCssJs | react | vue | wordpress
	const htmlCssJsProjects = projects.filter(project => project.tab === "HTML & CSS & JS");
	const reactProjects = projects.filter(project => project.tab === "ReactJS");
	const wordpressProjects = projects.filter(project => project.tab === "WordPress");
	document.title = "Проекты";

	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Проекты</h2>
				<ul className="tabs">
					<li className={`tab ${currentTab === "htmlCssJs" && "active"}`} onClick={() => setCurrentTab("htmlCssJs")}>HTML & CSS & JS</li>
					<li className={`tab ${currentTab === "react" && "active"}`} onClick={() => setCurrentTab("react")}>ReactJS</li>
					<li className={`tab ${currentTab === "wordpress" && "active"}`} onClick={() => setCurrentTab("wordpress")}>WordPress</li>
				</ul>
				<ul className="projects">
					{currentTab === "htmlCssJs" && htmlCssJsProjects.map((project, index) => <ProjectComponent key={index} project={project} />)}
					{currentTab === "react" && reactProjects.map((project, index) => <ProjectComponent key={index} project={project} />)}
					{currentTab === "wordpress" && wordpressProjects.map((project, index) => <ProjectComponent key={index} project={project} />)}
				</ul>
			</div>
		</main>
	);
};