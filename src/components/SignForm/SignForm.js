import React, { useEffect, useState } from 'react';
import { Link,  } from 'react-router-dom';

import { Validation } from '../FormValid/FormValid';
import logo from "../../images/logo.svg";
import './SignForm.css';

function SignForm(props) {
    const { header, buttonTitle, textUnderSubmit, link, linkText, path } = props;

    const [value, setValue] = useState({ email: '', password: '', name: '' }); //Создаем переменную для инпутов
    //Стэйты для валидации
    const [error, setError] = useState({ email: false, password: false, name: false });
    const [errorMessage, setErrorMessage] = useState({email: 'Email не может быть пустым', password: 'Пароль не может быть пустым', name: 'Имя не может быть пустым' });
    const [formValid, setFormValid] = useState(false);// Отвечает за валидность формы По умолчанию false

    // При изменении error отключает или включает кнопку сабмита
    useEffect(() => {
        if (error.name === true || error.email === true || error.password === true) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [error]);

    // Управление инпутами
    function handleChangeValue(e) {
        setValue(old => ({
            ...old,
            [e.target.name]: e.target.value
        }));

        Validation(e, setErrorMessage, setError); // Проверяет на валидность в процессе написания
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, name } = value;
        /*props.onRegister(email, password, name);*/ //Пока нет такой функции
    };

   
    
    return (
        <main className='pageSign'>
            <img className='pageSign__logo' src={logo} alt='logo'/>
            <h1 className="pageSign__header">{header}</h1>
            <form className="signForm" onSubmit={handleSubmit}>
                { (props.link === '/signin') ? 
                    <>
                        <label htmlFor="name" className='label'>Имя</label>
                        <input type="text" id='name' className='signForm__input input' name='name' onChange={handleChangeValue} value={value.name} required/>
                        <span className={`input-error input-error_name ${(error.name && errorMessage.name)? 'input-error_active' : ''}`}>{errorMessage.name}</span>              
                    </> : ''
                }            
                <label htmlFor="email" className='label'>E-mail</label>
                <input type="email" id='email' className='signForm__input input' name='email'  onChange={handleChangeValue} value={value.email} required></input>
                <span className={`input-error input-error_email ${(error.email && errorMessage.email) ? 'input-error_active' : ''}`}>{errorMessage.email}</span>
                
                <label htmlFor="password" className='label'>Пароль</label>
                <input type="password" id='password' className={`signForm__input input  ${error.password ? `signForm__input_error` : ''}`} name='password' onChange={handleChangeValue} value={value.password} required></input>
                <span className={`input-error input-error_password ${(error.password && errorMessage.password)? 'input-error_active' : ''}`}>{errorMessage.password}</span>
                
                <button className={`button button-submit ${(path==='/signin')? 'button__signin' :  'button__signup'}`} type="submit" disabled={!formValid}>{buttonTitle}</button>
            </form>
                <p className='pageSign__text'>{textUnderSubmit}<Link className='pageSign__link link' to={link}>{linkText}</Link></p>
        </main>
    )
}

export default SignForm;
