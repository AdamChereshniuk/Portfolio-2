import gitHubIcon from "../BtnGitHub/gitHub-black.svg";

export const BtnLiveSite = ({link}: {link: string}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHubIcon} alt="Live Site" />
            Посмотреть сайт
        </a>
    );
};