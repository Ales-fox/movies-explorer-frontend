import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import icon from '../../images/iconAccount.png'
import './Header.css'

function Header(props) {
    return (
        <header className='header'>
            <Link className='link header__logo' to='/'>
                <img className='logo' src={logo} alt='Лого'/>
            </Link>
            <div className='header__links'>
                <Link className="header__link header__link_bold link" to='/movies'>Фильмы</Link>
                <Link className='header__link link' to='/saved-movies' >Сохраненные фильмы</Link>
            </div> 
            <Link className='link header__link-button' to='/profile'>
                <img className='icon' src={icon} alt='Иконка' />
                Аккаунт
            </Link>
        </header>     
    )
}

export default Header;