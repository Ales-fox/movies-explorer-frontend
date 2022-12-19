import React, { useEffect, useState } from 'react';
import { Link,  } from 'react-router-dom';

import { Validation } from '../FormValid/FormValid';
import logo from "../../images/logo.svg";
import './SignForm.css';

function SignForm(props) {
    const { header, buttonTitle, textUnderSubmit, link, linkText } = props;

    const [value, setValue] = useState({ email: '', password: '', name: '' }); //Создаем переменную для инпутов
    const [error, setError] = useState({ email: false, password: false, name: false });
    const [errorMessage, setErrorMessage] = useState({email: 'Email не может быть пустым', password: 'Пароль не может быть пустым', name: 'Имя не может быть пустым' });
    const [formValid, setFormValid] = useState(false);// Отвечает за валидность формыю По уолчанию false

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
        <>  
        <main className='pageSignForm'>
            <img className='signForm__logo' src={logo} alt='logo'/>
            <h1 className="signForm__header">{header}</h1>
            <form className="signForm" onSubmit={handleSubmit}>
                { (props.link === '/signin') ? 
                    <>
                        <label htmlFor="name" className='label'>Имя</label>
                        <input type="text" id='name' className='input__signForm input' name='name' onChange={handleChangeValue} value={value.name} required/>
                        {(error.name && errorMessage.name) && <span className={`input-error input-error_name`}>{errorMessage.name}</span>}              
                    </> : ''
                }            
                <label htmlFor="email" className='label'>E-mail</label>
                <input type="email" id='email' className='input__signForm input' name='email'  onChange={handleChangeValue} value={value.email} required></input>
                {(error.email && errorMessage.email) && <span className='input-error input-error_email'>{errorMessage.email}</span>}
                
                <label htmlFor="password" className='label'>Пароль</label>
                <input type="password" id='password' className={`input__signForm input  ${error.password ? `input__signForm_error` : ''}`} name='password' onChange={handleChangeValue} value={value.password} required></input>
                {(error.password && errorMessage.password) && <span className="input-error input-error_password">{errorMessage.password}</span>}
                
                <button className="button button-submit" type="submit" disabled={!formValid}>{buttonTitle}</button>
            </form>
                <p className='signForm__text'>{textUnderSubmit}<Link className='signForm__link link' to={link}>{linkText}</Link></p>
        </main>            
        </>
    )
}

export default SignForm;
