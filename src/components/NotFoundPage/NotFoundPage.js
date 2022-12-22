import { Link, useLocation } from 'react-router-dom';
import './NotFoundPage.css'

function NotFoundPage(props) {
    const location = useLocation();
    console.dir(location);

    return (
        <section className='notFound'>
            <p className="notFound__number">404</p>
            <p className="notFound__text">Страница не найдена</p>
            <Link className='link notFound__link' to={{from: location}}>Назад</Link>            
        </section>
    )
}

export default NotFoundPage;