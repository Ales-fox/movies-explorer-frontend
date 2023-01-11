import React, { useEffect, useState} from 'react';
import { Link,  useLocation  } from 'react-router-dom';

import { Validation } from '../FormValid/FormValid';
import logo from "../../images/logo.svg";
import './SignForm.css';

function SignForm(props) {
    const { header, buttonTitle, textUnderSubmit, link, linkText, onSubmit, errorServerMessage } = props;

    const [value, setValue] = useState({ email: '', password: '', name: '' }); //Создаем переменную для инпутов
    //Стэйты для валидации
    const [error, setError] = useState({ email: false, password: false, name: false });
    const [errorMessage, setErrorMessage] = useState({email: 'Email не может быть пустым', password: 'Пароль не может быть пустым', name: 'Имя не может быть пустым' });
    const [formValid, setFormValid] = useState(false);// Отвечает за валидность формы По умолчанию false
    
    const {pathname} = useLocation();

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

    return (
        <main className='pageSign'>
            <Link className='pageSign__logo' to='/'>
                <img className='logo' src={logo} alt='logo'/>
            </Link>
            <h1 className="pageSign__header">{header}</h1>
            <form className="signForm" onSubmit={(e) => onSubmit(e, value)}>
                { (pathname !== '/signin') ? 
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
                
                <span className={`submit-error ${(pathname==='/signin')? 'submit-error_signin' :  'submit-error_signup'} ${(errorServerMessage !== '')? 'submit-error_active' : ''}`}>{errorServerMessage}</span>
                <button className={`button button-submit ${(pathname==='/signin')? 'button_signin' :  'button_signup'} ${!formValid? 'button-submit_inactive' : ''}`} type="submit" disabled={!formValid}>{buttonTitle}</button>
            </form>
                <p className='pageSign__text'>{textUnderSubmit}<Link className='pageSign__link link' to={link}>{linkText}</Link></p>
        </main>
    )
}

export default SignForm;
