import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import './Movies.css';

function Movies(props) {    
    const { onMenuHamburgerClick, loggedIn, onSearch, searchPlaceholder, isChecked, cardsList, onCardLike, buttonClass, savedMoviesCards, errorFilm} = props;

    return (
        <div className="grayWrapper">  
            <Header onMenuHamburgerClick={onMenuHamburgerClick} loggedIn={loggedIn}/>
            <main className='movies'>
                <SearchForm onSearch={onSearch} searchPlaceholder={searchPlaceholder} isChecked={isChecked}/>
                <MoviesCardList cardsList={cardsList} onClick={onCardLike} buttonClass={buttonClass} savedMoviesCards={savedMoviesCards}  errorFilm={errorFilm}/>                
            </main>
            <Footer />
        </div>        
    )
}

export default Movies;
