import layoutCoverImage from "../img/services/layoutCoverImage.png";
import improvementCoverImage from "../img/services/improvementCoverImage.png";
import createCoverImage from "../img/services/createCoverImage.png";
import redesignCoverImage from "../img/services/redesignCoverImage.png";

export const services: Service[] = [
    {
        id: 1,
        coverImage: layoutCoverImage,
        title: "Адаптивная верстка сайта по макету",
        text: "Сверстаю сайт до 10 блоков по макету в Figma/PSD с адаптивом под мобильные устройства на HTML/CSS/JS.",
        pricePerService: "1 000",
        termInDays: 2,
    },
    {
        id: 2,
        coverImage: improvementCoverImage,
        title: "Доработка сайта",
        text: "Доработаю сайт: исправлю баги и ошибки, добавлю желаемый функционал.",
        pricePerService: "500",
        termInDays: 1,
    },
    {
        id: 3,
        coverImage: createCoverImage,
        title: "Создание сайта под ключ",
        text: "Создам сайт до 5 страниц под ключ от макета до вёрстки и функционала с адаптивом под мобильные устройства.",
        pricePerService: "2 500",
        termInDays: 4,
    },
    {
        id: 4,
        coverImage: redesignCoverImage,
        title: "Редизайн сайта",
        text: "Сделаю обновление сайта: создам новый продающий дизайн и выполню качественную вёрстку.",
        pricePerService: "1 500",
        termInDays: 4,
    },
];

export interface Service {
    id: number,
    coverImage: string,
    title: string,
    text: string,
    pricePerService: string,
    termInDays: number,
};