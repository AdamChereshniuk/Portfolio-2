import tg from "./../../img/icons/tg.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import "./style.css";

export const Footer = () => {
    return (
        <footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="https://t.me/cheradam" target="_blank" rel="noreferrer">
								<img src={tg} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://github.com/AdamChereshniuk" target="_blank" rel="noreferrer">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2026 adamchereshniuk.github.io</p>
					</div>
				</div>
			</div>
		</footer>
    );
};