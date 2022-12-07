import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg' 

function Promo(props) {
    return (
        <div className='promo'>
            <img className='promo__logo' src={logo} alt='Лого'></img>
            <div className='promo__links'>
                <Link className="promo__link link" to='/signup'>Регистрация</Link>
                <Link className='promo__link-button button link' to='/signin' >Войти</Link>
            </div>            
        </div>
    )
}

export default Promo;