import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Promo.css'

function Promo(props) {
    return (
        <header className='promo'>
            <img className='promo__logo' src={logo} alt='Лого'></img>
            <div className='promo__links'>
                <Link className="promo__link link" to='/signup' >Регистрация</Link>
                <Link className='promo__link-button button link' to='/signin' >Войти</Link>
            </div>            
        </header>
    )
}

export default Promo;