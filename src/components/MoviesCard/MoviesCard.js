import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { moviesImgURL } from "../../constants";
import './MoviesCard.css';

function MoviesCard(props) {    
    const { card } = props;
    
    const hour = Math.floor(card.duration/60);
    const min = card.duration%60;
     /*// Определяем, есть ли у карточки лайк, поставленный нами(текущим пользователем)
     const isLiked = card.likes.some(i => i._id === currentUser._id);
     // Создаём переменную, которую после зададим в `className` для кнопки лайка
     const cardLikeButtonClassName = (`button-like button ${isLiked ? 'button-like_active' : ''}`);*/

    return (
        <ul className="moviesCard">
            <li className='list'><img src={`${moviesImgURL}${card.image.url}`} className='moviesCard__img' alt={card.filmTitle}/></li>
            <li className='list moviesCard__about'>
                <div className='moviesCard__main'>
                    <h3 className="moviesCard__header">{card.nameRU}</h3>                    
                    <Outlet/>
                </div>
                <p className="moviesCard__text">{`${hour}ч ${min}мин`}</p>
            </li>
        </ul>        
    )
}

export default MoviesCard;