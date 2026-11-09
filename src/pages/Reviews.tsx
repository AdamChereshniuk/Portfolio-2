import { reviews } from "../helpers/reviewsList";
import link from "../img/reviews/link.svg";

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
			</div>
		</main>
    );
};