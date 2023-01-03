import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import icon from '../../images/iconAccount.svg';
import './Header.css'

function Header(props) {
    const { onMenuHamburgerClick } = props;
    
    return (
        <header className='header '>
            
            <Link className='link header__logo' to='/'>
                <img className='logo' src={logo} alt='Лого'/>
            </Link>          
            <div className='header__links'>
                <NavLink className={({isActive}) => "header__link link " + (isActive? 'header__link_active': '')} to='/movies'>Фильмы</NavLink>
                <NavLink className={({isActive}) => "header__link link " + (isActive? 'header__link_active': '')} to='/saved-movies'>Сохраненные фильмы</NavLink>
            </div> 
            <Link className='link link-button header__link-button' to='/profile'>
                <img className='icon' src={icon} alt='Иконка' />
                Аккаунт
            </Link>
            <button type="button" className='menu-hamburger' onClick={onMenuHamburgerClick}/>
            
        </header>     
    )
}
// "header__link link"
export default Header;