import noAvatarUrl from "../img/reviews/noAvatarUrl.svg";

export const reviews: Review[] = [
    {
        id: "review-1",
        name: "Александр",
        avatarUrl: noAvatarUrl,
        text: "Нужно было сделать верстку с Figma. Результатом очень доволен: Адам сделал все быстро и качественно, теперь радую посетителей новым красивым дизайном. Однозначно рекомендую, молодец!",
        links: {
            orderLink: "https://kwork.ru/track?id=52589946",
            orderSource: "Kwork",
        },
    },
    {
        id: "review-2",
        name: "Александр",
        avatarUrl: noAvatarUrl,
        text: "Замечательный исполнитель! Сделал все быстро, четко и как нужно. Рекомендую!",
        links: {
            orderLink: "https://kwork.ru/track?id=57023344",
            orderSource: "Kwork",
        },
    },
    {
        id: "review-3",
        name: "Советник",
        avatarUrl: "https://cdn-edge.kwork.ru/files/avatar/medium/26/9575570-3.jpg?ver=1679645744",
        text: "Хорошая качественная работа, свёрстанная страница чётко легла в проект, спасибо за быстрое решение вопросов и отзывчивость!",
        links: {
            orderLink: "https://kwork.ru/track?id=59031032",
            orderSource: "Kwork",
        },
    },
    {
        id: "review-4",
        name: "Советник",
        avatarUrl: "https://cdn-edge.kwork.ru/files/avatar/medium/26/9575570-3.jpg?ver=1679645744",
        text: "Спасибо!",
        links: {
            orderLink: "https://kwork.ru/track?id=58589218",
            orderSource: "Kwork",
        },
    },
];

export interface Review {
    id: string,
    name: string,
    avatarUrl: string,
    text: string,
    links?: {
        orderLink?: string,
        orderSource?: string,
    },
};