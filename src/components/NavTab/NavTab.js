import './NavTab.css';

function NavTab(props) {
    return (
        <div className="nav">
            <h1 className='nav__header'>Учебный проект студента факультета Веб-разработки.</h1>
            <div className='nav__links'>
                <a className='nav__link link' href="#aboutProject" >О проекте</a>
                <a className='nav__link link' href="#techs" >Технологии</a>
                <a className='nav__link link' href="#student" >Студент</a>
            </div>
        </div>
    );
}

export default NavTab;
