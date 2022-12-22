import { Link, useNavigate } from 'react-router-dom';
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
                <li className='menu__link'><Link className='link' to='/'>Главная</Link></li>
                <li className='menu__link'><Link className='link link_active' to='/movies'>Фильмы</Link></li>
                <li className='menu__link'><Link className='link' to='/saved-movies'>Сохраненные фильмы</Link></li>
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