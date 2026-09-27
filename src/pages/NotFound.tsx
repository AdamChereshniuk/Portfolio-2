import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <main className="notfound">
            <div className="container">
                <div className="notfound__inner">
                    <h1 className="title-1">Страница не найдена</h1>

                    <span>Проверьте, нет ли в имени опечатки или вернитесь на главную страницу</span>

                    <Link className="link" to="/Portfolio/">На главную</Link>
                </div>
            </div>
        </main>
    );
};