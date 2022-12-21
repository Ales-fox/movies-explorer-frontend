import arrow from '../../images/portfolio__arrow.png';
import './Portfolio.css';

function Portfolio(props) {
    return (
        <section className="portfolio">
                <h4 className="portfolio__title">Портфолио</h4>
                <ul >
                    <li className='list'>
                        <a className='portfolio__link link' href='https://github.com/Ales-fox/how-to-learn' target='_blank' rel="noreferrer">
                            <p className="portfolio__cell">Статичный сайт</p>
                            <img className="arrow" src={arrow} alt='arrow'></img>
                        </a>
                    </li>
                    <li className='list'>
                        <a className='portfolio__link link' href='https://ales-fox.github.io/russian-travel/index.html' target='_blank' rel="noreferrer">
                            <p className="portfolio__cell">Адаптивный сайт</p>
                            <img className="arrow" src={arrow} alt='arrow'/>
                        </a>
                    </li>
                    <li className='list'>
                        <a className='portfolio__link link' href='https://ales-fox.github.io/mesto/' target='_blank' rel="noreferrer">               
                            <p className="portfolio__cell">Одностраничное приложение</p>
                            <img className="arrow" src={arrow} alt='arrow'/>
                        </a>
                    </li>
                </ul>
                               
                
                               
        </section>
    )
}

export default Portfolio;