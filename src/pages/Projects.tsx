import { useState } from "react";
import { projects } from "../helpers/projectsList";
import { ProjectComponent } from "../components/Project/Project";
import info from "../img/projects/info.svg";

export const Projects = () => {
    const [currentTab, setCurrentTab] = useState("htmlCssJs"); // htmlCssJs | react | vue | wordpress | vibecoding | webDesign
	const htmlCssJsProjects = projects.filter(project => project.tab === "HTML & CSS & JS");
	const reactProjects = projects.filter(project => project.tab === "ReactJS");
	const wordpressProjects = projects.filter(project => project.tab === "WordPress");
	const vibecodingProjects = projects.filter(project => project.tab === "Vibecoding");
	const webDesignProjects = projects.filter(project => project.tab === "Web-design");
	document.title = "Проекты";

	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Проекты</h2>
				<div className="hints">
					<span className="hint">
						<img src={info} alt="Инфо" />
						Лучше смотреть с компьютера, так как не все проекты адаптированы под мобильные устройства.
					</span>
					<span className="hint">
						<img src={info} alt="Инфо" />
						В проектах из раздела "ReactJS" возможна задержка в получении данных, так как данные хранятся на сторонних серверах. К сожалению, я не могу с этим ничего поделать. Надеюсь на понимание!
					</span>
				</div>
				<ul className="tabs">
					<li className={`tab ${currentTab === "htmlCssJs" && "active"}`} onClick={() => setCurrentTab("htmlCssJs")}>
						<span>Верстка</span>
					</li>
					<li className={`tab ${currentTab === "react" && "active"}`} onClick={() => setCurrentTab("react")}>
						<span>ReactJS</span>
					</li>
					<li className={`tab ${currentTab === "wordpress" && "active"}`} onClick={() => setCurrentTab("wordpress")}>
						<span>Tilda / WordPress</span>
					</li>
					<li className={`tab ${currentTab === "vibecoding" && "active"}`} onClick={() => setCurrentTab("vibecoding")}>
						<span>Вайбкодинг (ИИ)</span>
					</li>
					<li className={`tab ${currentTab === "webDesign" && "active"}`} onClick={() => setCurrentTab("webDesign")}>
						<span>Веб-дизайн</span>
					</li>
				</ul>
				<ul className="projects">
					{currentTab === "htmlCssJs" && htmlCssJsProjects.map((project, index) => <ProjectComponent key={index} project={project} />)}
					{currentTab === "react" && reactProjects.map((project, index) => <ProjectComponent key={index} project={project} />)}
					{currentTab === "wordpress" && wordpressProjects.map((project, index) => <ProjectComponent key={index} project={project} />)}
					{currentTab === "vibecoding" && vibecodingProjects.map((project, index) => <ProjectComponent key={index} project={project} />)}
					{currentTab === "webDesign" && webDesignProjects.map((project, index) => <ProjectComponent key={index} project={project} />)}
				</ul>
			</div>
		</main>
	);
};