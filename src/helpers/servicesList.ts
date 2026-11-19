import layoutCoverImage from "../img/services/layoutCoverImage.png";
import improvementCoverImage from "../img/services/improvementCoverImage.png";

export const services: Service[] = [
    {
        id: 1,
        coverImage: layoutCoverImage,
        title: "Адаптивная верстка сайта по макету",
        text: "Сверстаю сайт до 10 блоков по макету в Figma/PSD с адаптивом под мобильные устройства на HTML/CSS/JS.",
        pricePerService: 1000,
        termInDays: 2,
    },
    {
        id: 2,
        coverImage: improvementCoverImage,
        title: "Доработка сайта",
        text: "Доработаю сайт: исправлю баги и ошибки, добавлю желаемый функционал.",
        pricePerService: 500,
        termInDays: 1,
    },
];

export interface Service {
    id: number,
    coverImage: string,
    title: string,
    text: string,
    pricePerService: number,
    termInDays: number,
};