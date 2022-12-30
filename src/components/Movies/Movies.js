import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import './Movies.css';

function Movies(props) {    
    const { onMenuHamburgerClick, onSearch, cardsList, onCardLike, buttonClass, savedMoviesCards} = props;
    return (
        <div className="grayWrapper">  
            <Header onMenuHamburgerClick={onMenuHamburgerClick}/>
            <main className='movies'>
                <SearchForm onSearch={onSearch}/>
                <MoviesCardList cardsList={cardsList} onCardLike={onCardLike} buttonClass={buttonClass} savedMoviesCards={savedMoviesCards}/>                
            </main>
            <Footer />
        </div>        
    )
}

export default Movies;
