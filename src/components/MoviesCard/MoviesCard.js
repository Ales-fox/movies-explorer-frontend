import React, { useEffect } from 'react';
import { moviesImgURL } from "../../constants";
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './MoviesCard.css';

function MoviesCard(props) {    
    const { card, buttonClass,  savedMoviesCards, onClick } = props;
    
    const currentUser = React.useContext(CurrentUserContext); // Подписываемся на контекст
    const hour = Math.floor(card.duration/60);
    const min = card.duration%60;
    
    // Определяем, есть ли у карточки наш лайк
    const isLiked = savedMoviesCards.some(i => i.id === card.id && i.owner === currentUser._id);
    useEffect(() => {
        
    }, [isLiked])
    
    // Создаём переменную, в которой определяется кнопка лайка или удаления
    let classOfButton;
    if (buttonClass === 'button-like') {
        classOfButton = (`button-like ${isLiked ? 'button-like_active' : ''}`);
    } else {
        classOfButton = buttonClass;
    }
    
    return (
        <ul className="moviesCard">
            <li className='list'>
                <a className='link'  href={card.trailerLink} target='_blank' rel='noreferrer'>
                    <img src={`${(card.image.url)? `${moviesImgURL}${card.image.url}` : `${card.image}` }`} className='moviesCard__img' alt={card.filmTitle}/>
                </a>
            </li>
            <li className='list moviesCard__about'>
                <div className='moviesCard__main'>
                    <h3 className="moviesCard__header">{card.nameRU}</h3>
                    <button className={classOfButton} type="button" onClick={() => onClick(card)}/>              
                </div>
                <p className="moviesCard__text">{`${hour}ч ${min}мин`}</p>
            </li>
        </ul>        
    )
}

export default MoviesCard;