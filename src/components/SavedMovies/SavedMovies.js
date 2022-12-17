import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import { savedMoviesCard } from '../../constants.js';

function SavedMovies(props) {
    const { onMenuHamburgerClick, onSearchClick } = props;
            
    return (
        <div className='grayWrapper'>
            <Header onMenuHamburgerClick={onMenuHamburgerClick}/>
            <main className='movies'>
                <SearchForm onClick={onSearchClick}/>
                <div className="moviesCards">{
                    savedMoviesCard.map((card) => (<MoviesCard key={card._id}
                        card={card}
                    />
                    ))}
                </div>
            </main>
            <Footer />
        </div>    
    )
}

export default SavedMovies;
