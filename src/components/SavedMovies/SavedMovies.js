import React, { useState, useEffect } from 'react';

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";

import { CurrentUserContext } from '../../context/CurrentUserContext';

function SavedMovies(props) {
    const { onMenuHamburgerClick, onSearch, cardsList, buttonClass, onDelete } = props;
    const [ visibleCardsList, setVisibleCardsList] = useState([]); // Выделяет карточки конкретного пользователя
    const currentUser = React.useContext(CurrentUserContext);

    useEffect(() => {
        const newArray = [];
        console.log(cardsList);
        console.log(currentUser._id);
        for(let i= 0 ;i< cardsList.length ; i++ ){
            if(cardsList[i].owner === currentUser._id) 
                newArray.push(cardsList[i]);                       
        }            
            
        setVisibleCardsList(newArray);

    } , [cardsList])

    return (
        <div className='grayWrapper'>
            <Header onMenuHamburgerClick={onMenuHamburgerClick}/>
            <main className='movies'>
                <SearchForm onClick={onSearch}/>
                <div className="moviesCards">{
                    visibleCardsList.map((card, index) => (
                        <MoviesCard key={index}
                            card={card}
                            onClick={onDelete}
                            buttonClass={buttonClass}
                            savedMoviesCards={cardsList}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>    
    )
}

export default SavedMovies;
