import arrow from '../../images/portfolio__arrow.png';
import photo from '../../images/aboutMe__photo.png';
function AboutMe(props) {
    return (
        <section className='aboutMe' id='student'>
            <h3 className='header-block'>Студент</h3>
            <div className='line'></div>
            <img className='aboutMe__photo' src={photo} alt="Фото"/>
            <h2 className="aboutMe__name">Виталий</h2>
            <p className="aboutMe__job">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutMe__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься</p>
            <h4 className="aboutMe__git">Github</h4>
            <div className="portfolio">
                <h4 className="portfolio__title">Портфолио</h4>
                <p className="portfolio__cell">Статичный сайт</p>
                <a className='portfolio__link link' href='#'><img className="arrow" src={arrow} alt='arrow'></img></a>                
                <p className="portfolio__cell">Адаптивный сайт</p>
                <a className='portfolio__link link' href='#'><img className="arrow" src={arrow} alt='arrow'></img></a>               
                <p className="portfolio__cell">Одностраничное приложение</p>
                <a className='portfolio__link link' href='#'><img className="arrow" src={arrow} alt='arrow'></img></a>               
            </div>
        </section>
    )
}

export default AboutMe;