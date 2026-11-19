import website from "../../img/website.svg";

export const BtnLiveSite = ({link}: {link: string}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={website} alt="Live Site" width={24} height={24} />
            Посмотреть
        </a>
    );
};