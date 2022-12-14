import React from 'react';
import { Link } from 'react-router-dom';

import logo from "../../images/logo.svg";
import './SignForm.css';

function SignForm(props) {
    const { header, onSubmit, onChange, value, buttonTitle, textUnderSubmit, link, linkText, children } = props;

    return (
        <>  
        <main className='pageSignForm'>
            <img className='signForm_logo' src={logo} alt='logo'/>
            <h1 className="signForm_header">{header}</h1>
            <form className="signForm" onSubmit={onSubmit}>
                <>{children}</>
                <label htmlFor="email" className='label'>E-mail</label>
                <input type="email" id='email' className='input_signForm input' name='email'  onChange={onChange} value={value.email} required></input>
                <span className="input-error input-error_email"></span>
                <label htmlFor="password" className='label'>Пароль</label>
                <input type="password" id='password' className='input_signForm input' name='password' onChange={onChange} value={value.password} required></input>
                <span className="input-error input-error_password"></span>
                <button className="button button-submit" type="submit" >{buttonTitle}</button>
            </form>
                <p className='signForm__text'>{textUnderSubmit}<Link className='signForm__link link' to={link}>{linkText}</Link></p>
        </main>            
        </>
    )
}

export default SignForm;
