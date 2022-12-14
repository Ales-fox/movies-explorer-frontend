import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import { savedMoviesCard } from '../../constants.js';

function SavedMovies(props) {
    const { onClick, onCardLike, moviesCards } = props;
    
        
    return (
        /*<div className="moviesCards">{
            moviesCards.map((card) => (<MoviesCard key={card._id}
                card={card}
                onCardLike={onCardLike}/>))}
        </div>
        <div className="moviesCards">
                    <MoviesCard />
                </div>
        */
        <div className='grayWrapper'>
            <Header/>
            <main className='movies'>
                <SearchForm onClick={onClick}/>
                <div className="moviesCards">{
                    savedMoviesCard.map((card) => (<MoviesCard key={card._id}
                        card={card}
                        onCardDelete={props.onCardDelete}/>
                    ))}
                </div>
            </main>
            <Footer />
        </div>    
    )
}

export default SavedMovies;
