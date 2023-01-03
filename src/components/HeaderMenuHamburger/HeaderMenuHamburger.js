import { NavLink, useNavigate } from 'react-router-dom';
import icon from '../../images/iconAccount.svg';
import './HeaderMenuHamburger.css'

function HeaderMenuHamburger(props) {
    const { isOpen, onClose } = props;

    const navigate = useNavigate();

    function onClick() {
        onClose();
        navigate('/profile');
    }

    return (
        <>
        <div className={`layer  ${isOpen ? `layer_darkened` : ''}`}/>
        <nav className={`menu ${isOpen ? `menu_open` : ''}`}>
            <button className='button-close' type='button' onClick={onClose}></button>
            <ul className='menu__links list'>
                <li className='menu__link'><NavLink className={({isActive}) => "link " + (isActive? 'link_active': '')} to='/' onClick={onClick}>Главная</NavLink></li>
                <li className='menu__link'><NavLink className={({isActive}) => "link " + (isActive? 'link_active': '')} to='/movies' onClick={onClick}>Фильмы</NavLink></li>
                <li className='menu__link'><NavLink className={({isActive}) => "link " + (isActive? 'link_active': '')} to='/saved-movies' onClick={onClick}>Сохраненные фильмы</NavLink></li>
            </ul>
            <button type='button' onClick={onClick} className='link link-button menu__link-button'>
                <img className='icon' src={icon} alt='Иконка' />
                Аккаунт
            </button>
        </nav>
        </>   
    )
}

export default HeaderMenuHamburger;