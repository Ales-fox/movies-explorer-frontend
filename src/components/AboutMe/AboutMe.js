import Portfolio from '../Portfolio/Portfolio';
import photo from '../../images/photo.jpg';

function AboutMe(props) {
    return (
        <section className='aboutMe' id='student'>
            <h3 className='header-block'>Студент</h3>
            <div className='line'></div>
            <img className='aboutMe__photo' src={photo} alt="Фото"/>
            <h2 className="aboutMe__name">Александра</h2>
            <p className="aboutMe__job">Фронтенд-разработчик, 27 лет</p>
            <p className="aboutMe__about">Живу в Москве, закончила РХТУ им. Менделеева по специальности химик-технолог. Имею красавицу кошку. Люблю слушать музыку и петь лиричные песни под гитару, а ещё увлекаюсь просмотром сериалов. Недавно начала кодить. С 2019 года работала в компании UMATEX. Сейчас прохожу курс по веб-разработке, чтобы впоследствии устроиться на работу в этой сфере, потому что работа должна приносить удовольствие.</p>
            <h4 className="aboutMe__git">Github</h4>
            <Portfolio/>
        </section>
    )
}

export default AboutMe;