import MoviesCard from '../MoviesCard/MoviesCard';
import { moviesCards } from '../../constants';
import './MoviesCardList.css';

function MoviesCardList(props) {    
    const {  onCardLike } = props;
    
    return (        
        /*<div className="moviesCards">{
            moviesCards.map((card) => (<MoviesCard key={card._id}
                card={card}
                onCardLike={onCardLike}/>))}
        </div>*/
        <>
            <div className="moviesCards">{
                moviesCards.map((card) => (<MoviesCard key={card._id}
                    card={card}
                    onCardLike={onCardLike}/>
                ))}
        </div>
            <button type='button' className='button-more'>Ещё</button>     
        </>
    )
}

export default MoviesCardList;