import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import './Movies.css';

function Movies(props) {    
    const { onClick, moviesCards, onCardLike } = props;

    return (
        <div className="grayWrapper">  
            <Header />
            <main className='movies'>
                <SearchForm onClick={onClick}/>
                <MoviesCardList moviesCards={moviesCards} onCardLike={onCardLike}/>                
            </main>
            <Footer />
        </div>        
    )
}

export default Movies;
