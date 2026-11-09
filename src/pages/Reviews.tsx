import { reviews } from "../helpers/reviewsList";
import link from "../img/reviews/link.svg";
import flru_logo from "../img/flru_logo.webp";
import freelanceru_logo from "../img/freelanceru_logo.webp";
import kwork_logo from "../img/kwork_logo.webp";
import weblancer_logo from "../img/weblancer_logo.webp";
import youdo_logo from "../img/youdo_logo.webp";

export const Reviews = () => {
    return (
        <main className="section">
			<div className="container">
				<h2 className="title-1">Отзывы</h2>
                <ul className="reviews__list">
                    {reviews.map(review => (
                        <li className="reviews__item">
                            <div className="reviews__item-content">
                                <div className="reviews__item-customer">
                                    <img src={review.avatarUrl} alt={review.name} />
                                    <span>{review.name}</span>
                                </div>
                                <p className="reviews__item-text">{review.text}</p>
                            </div>
                            {review.links !== undefined && review.links !== null && (
                                <div className="reviews__item-links">
                                    {review.links.orderLink !== undefined && review.links.orderSource && (
                                        <a className="reviews__item-link" href={review.links.orderLink} target="_blank">
                                            <img src={link} alt="Ссылка" />
                                            Заказ на {review.links.orderSource}
                                        </a>
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <h3 className="reviews__subtitle">Отзывы на фриланс-биржах</h3>
                <ul className="reviews__logos">
                    <li className="reviews__logo">
                        <a className="reviews__logo-link" href="https://www.fl.ru/users/cheradam2011/portfolio/" target="_blank">
                            <img src={flru_logo} alt="FL.ru" />
                        </a>
                    </li>
                    <li className="reviews__logo">
                        <a className="reviews__logo-link" href="https://freelance.ru/adam13ch" target="_blank">
                            <img src={freelanceru_logo} alt="Freelance.ru" />
                        </a>
                    </li>
                    <li className="reviews__logo">
                        <a className="reviews__logo-link" href="https://kwork.ru/user/adamchereshniuk" target="_blank">
                            <img src={kwork_logo} alt="Kwork" />
                        </a>
                    </li>
                    <li className="reviews__logo">
                        <a className="reviews__logo-link" href="https://kwork.ru/user/adamchereshniuk" target="_blank">
                            <img src={weblancer_logo} alt="Weblancer" />
                        </a>
                    </li>
                    <li className="reviews__logo">
                        <a className="reviews__logo-link" href="https://youdo.com/u12763380" target="_blank">
                            <img src={youdo_logo} alt="YouDo" />
                        </a>
                    </li>
                </ul>
			</div>
		</main>
    );
};