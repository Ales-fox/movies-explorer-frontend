import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {    
    const { card } = props;

     /*// Определяем, есть ли у карточки лайк, поставленный нами(текущим пользователем)
     const isLiked = card.likes.some(i => i._id === currentUser._id);
     // Создаём переменную, которую после зададим в `className` для кнопки лайка
     const cardLikeButtonClassName = (`button-like button ${isLiked ? 'button-like_active' : ''}`);*/

    return (
        <div className="moviesCard">
            <img src={card.url} className='moviesCard__img'/>
            <div className="moviesCard__about">
                <div className='moviesCard__main'>
                    <h3 className="moviesCard__header">{card.filmTitle}</h3>                    
                    <Outlet/>
                </div>
                <p className="moviesCard__text">{card.filmTime}</p>
            </div>
        </div>
        /*<>
            <div className="moviesCard">
                <img src={film5} className='moviesCard__img' alt='Бег'/>
                <div className="moviesCard__about">
                    <div className='moviesCard__main'>
                        <h3 className="moviesCard__header">Бег это свобода</h3>
                        <button className='button-like button-like_active' type="button" ></button>
                    </div>                    
                    <p className="moviesCard__text">1ч 44м</p>
                </div>
            </div>
            <div className="moviesCard">
                <img src={film5} className='moviesCard__img' alt='Бег'/>
                <div className="moviesCard__about">
                    <div className='moviesCard__main'>
                        <h3 className="moviesCard__header">Бег это свобода</h3>
                        <button className='button-like ' type="button" ></button>
                    </div> 
                    <p className="moviesCard__text">1ч 44м</p>
                </div>
            </div>
            <div className="moviesCard">
                <img src={film5} className='moviesCard__img' alt='Бег'/>
                <div className="moviesCard__about">
                    <div className='moviesCard__main'>
                        <h3 className="moviesCard__header">Бег это свобода</h3>
                        <button className='button-like' type="button" ></button>
                    </div> 
                    <p className="moviesCard__text">1ч 44м</p>
                </div>
            </div>            
            <div className="moviesCard">
                <img src={film1} className='moviesCard__img' alt='Бег'/>
                <div className="moviesCard__about">
                    <div className='moviesCard__main'>
                        <h3 className="moviesCard__header">33 слова о дизайне</h3>
                        <button className='button-like button-like_active' type="button" ></button>
                    </div> 
                    <p className="moviesCard__text">1ч 47м</p>
                </div>
            </div>
            <div className="moviesCard">
                <img src={film8} className='moviesCard__img' alt='Бег'/>
                <div className="moviesCard__about">
                    <div className='moviesCard__main'>
                        <h3 className="moviesCard__header">Gimme Danger: История Игги и The Stooge а так же очень много текста</h3>
                        <button className='button-like button-like_active' type="button" ></button>
                    </div> 
                    <p className="moviesCard__text">1ч 59м</p>
                </div>
            </div>
        </>*/
        
        
    )
}

export default MoviesCard;