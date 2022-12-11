import arrow from '../../images/portfolio__arrow.png';

function Portfolio(props) {
    return (
        <section className="portfolio">
                <h4 className="portfolio__title">Портфолио</h4>
                <p className="portfolio__cell">Статичный сайт</p>
                <a className='portfolio__link link' href='https://github.com/Ales-fox/how-to-learn'><img className="arrow" src={arrow} alt='arrow'></img></a>                
                <p className="portfolio__cell">Адаптивный сайт</p>
                <a className='portfolio__link link' href='https://ales-fox.github.io/russian-travel/index.html'><img className="arrow" src={arrow} alt='arrow'></img></a>               
                <p className="portfolio__cell">Одностраничное приложение</p>
                <a className='portfolio__link link' href='https://ales-fox.github.io/mesto/'><img className="arrow" src={arrow} alt='arrow'></img></a>               
        </section>
    )
}

export default Portfolio;