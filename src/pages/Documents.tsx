import skillbox from "../img/documents/Skillbox.png";
import geekBrains from "../img/documents/GeekBrains_rus.jpg";

export const Documents = () => {
	document.title = "Сертификаты";

	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Сертификаты</h2>
				<ul className="documents-list">
					<li className="documents-item">
						<img src={skillbox} alt="Skillbox" />
					</li>
					<li className="documents-item">
						<img src={geekBrains} alt="GeekBrains" />
					</li>
				</ul>
			</div>
		</main>
	);
};