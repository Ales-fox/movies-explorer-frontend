import React, { useState } from 'react';
import { moviesImgURL } from "../../constants";
import './MoviesCard.css';

function MoviesCard(props) {    
    const { card, buttonClass, savedMoviesCards } = props;
    
    const hour = Math.floor(card.duration/60);
    const min = card.duration%60;
    
    // Определяем, есть ли у карточки лайк
    const isLiked = savedMoviesCards.some(i => i.id === card.id);
    // Создаём переменную, в которой определяется кнопка лайка или удаления
    let classOfButton;
    if (buttonClass === 'button-like') {
        classOfButton = (`button-like ${isLiked ? 'button-like_active' : ''}`);
    } else {
        classOfButton = buttonClass;
    }
     
    const handleCardLike = () => {
        props.onCardLike(card);
    }

    return (
        <ul className="moviesCard">
            <li className='list'><img src={`${moviesImgURL}${card.image.url}`} className='moviesCard__img' alt={card.filmTitle}/></li>
            <li className='list moviesCard__about'>
                <div className='moviesCard__main'>
                    <h3 className="moviesCard__header">{card.nameRU}</h3>
                    <button className={classOfButton} type="button" onClick={handleCardLike}/>              
                </div>
                <p className="moviesCard__text">{`${hour}ч ${min}мин`}</p>
            </li>
        </ul>        
    )
}

export default MoviesCard;