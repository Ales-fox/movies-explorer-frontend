import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {    
    const {  onCardLike, cardsList, buttonClass, savedMoviesCards} = props;

    const [ index, setIndex ] = useState(0); // Показывает кол-во нажатий на кнопку Ещё
    const [ visibleCardsList, setVisibleCardsList] = useState([]); // Показывает кол-во видимых карточек сейчас
    const [ moreActive, setMoreActive ] = useState(true);
    let page_size; // Показывает кол-во карточек добавляющихся за раз
    const screenWidth = window.screen.width; // Ширина экрана
    if (screenWidth <= 3000 &  screenWidth > 768 ) {
        page_size = 12;
    } else if (screenWidth <= 768 & screenWidth > 320 ) {
        page_size = 8;
    } else {
        page_size = 5;
    }

    useEffect(() => {
        const numberOfItems = page_size * ( index + 1 ); 
    
        const newArray = [];

        for(let i= 0 ;i< cardsList.length ; i++ ){
            if(i < numberOfItems) 
                newArray.push(cardsList[i]);

            if (newArray.length === cardsList.length) {
                setMoreActive(false);
                break;
            }                        
        }      
            
            
        setVisibleCardsList(newArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [index, cardsList]) // Реагирует на смену кол-ва нажатий на кнопку ещё

    return (        
        <>
            <div className="moviesCards">{
                visibleCardsList.map((card) => (
                    <MoviesCard key={card.id}
                    card={card}
                    onCardLike={onCardLike}
                    buttonClass={buttonClass}
                    savedMoviesCards={savedMoviesCards}
                    />
                ))}
            </div>
            {(moreActive)? <button type='button' className='button-more' onClick={ () => setIndex( index + 1)}>Ещё</button> : ''}     
        </>
    )
}

export default MoviesCardList;