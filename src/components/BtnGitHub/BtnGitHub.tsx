import gitHubIcon from "./gitHub-black.svg";
import "./style.css";

export const BtnGitHub = ({link}: {link: string}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={gitHubIcon} alt="Github" />
			GitHub
		</a>
    );
};