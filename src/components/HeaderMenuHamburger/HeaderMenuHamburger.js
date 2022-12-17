import { Link } from 'react-router-dom';
import icon from '../../images/iconAccount.png';
import './HeaderMenuHamburger.css'

function HeaderMenuHamburger(props) {
    const { isOpen, onClose } = props;

    return (
        <>
        <div className={`layer  ${isOpen ? `layer_darkened` : ''}`}/>
        <nav className={`menu ${isOpen ? `menu_open` : ''}`}>
            <button className='button-close' type='button' onClick={onClose}></button>
            <ul className='menu__links list'>
                <li className='menu__link'><Link className='link' to='/'>Главная</Link></li>                    <li className='menu__link'><Link className='link menu__link_active' to='/movies'>Фильмы</Link></li>
                <li className='menu__link'><Link className='link' to='/saved-movies'>Сохраненные фильмы</Link></li>
            </ul>
            <Link className='link link-button menu__link-button' to='/profile'>
                <img className='icon' src={icon} alt='Иконка' />
                Аккаунт
            </Link>
        </nav>
        </>   
    )
}

export default HeaderMenuHamburger;