import { services } from "../helpers/servicesList";
import tg from "../img/icons/tg.svg";

export const Services = () => {
    document.title = "Услуги";

    return (
        <main className="section">
            <div className="container">
				<h2 className="title-1">Услуги</h2>
                <ul className="services__list">
                    {services.map(service => (
                        <li className="services__item">
                            <img src={service.coverImage} alt={service.title} />
                            <div className="services__item-content">
                                <h3 className="services__item-title">{service.title}</h3>
                                <p className="services__item-text">{service.text}</p>
                                <div className="services__item-wrapper">
                                    <span className="services__item-price">от {service.pricePerService}₽</span>
                                    <span className="services__item-term">от {service.termInDays} дн.</span>
                                </div>
                                <div className="services__item-btns">
                                    <a className="btn" href="https://t.me/cheradam" target="_blank">
                                        <img src={tg} alt="Telegram" width={30} height={30} />
                                        Заказать услугу
                                    </a>
                                    <a className="btn-outline" href="tel:79132421225">
                                        Узнать подробнее
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <h2 className="title-1" style={{ marginTop: "80px" }}>Почасовая оплата</h2>
                <div className="services__hour">
                    <h3 className="services__hour-title">
                        <span>500₽</span>
                        <span>/час</span>
                    </h3>
                    <h3 className="services__hour-title">
                        <span>2 500₽</span>
                        <span>/день</span>
                    </h3>
                    <h3 className="services__hour-title">
                        <span>8 000₽</span>
                        <span>/неделя</span>
                    </h3>
                </div>
            </div>
        </main>
    );
};