import { NavLink } from 'react-router-dom';
import './NotFoundPage.css'

function NotFoundPage(props) {
    
    return (
        <section className='notFound'>
            <p className="notFound__number">404</p>
            <p className="notFound__text">Страница не найдена</p>
            <NavLink className='link notFound__link' to={-2}>Назад</NavLink>            
        </section>
    )
}

export default NotFoundPage;