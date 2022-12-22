import React from 'react';
import { Outlet } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {    
    const { card } = props;

     /*// Определяем, есть ли у карточки лайк, поставленный нами(текущим пользователем)
     const isLiked = card.likes.some(i => i._id === currentUser._id);
     // Создаём переменную, которую после зададим в `className` для кнопки лайка
     const cardLikeButtonClassName = (`button-like button ${isLiked ? 'button-like_active' : ''}`);*/

    return (
        <ul className="moviesCard">
            <li className='list'><img src={card.url} className='moviesCard__img' alt={card.filmTitle}/></li>
            <li className='list moviesCard__about'>
                <div className='moviesCard__main'>
                    <h3 className="moviesCard__header">{card.filmTitle}</h3>                    
                    <Outlet/>
                </div>
                <p className="moviesCard__text">{card.filmTime}</p>
            </li>
        </ul>        
    )
}

export default MoviesCard;