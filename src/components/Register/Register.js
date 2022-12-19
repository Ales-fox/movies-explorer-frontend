import React from 'react';
import  SignForm from "../SignForm/SignForm";

function Register(props) {    
    return (
        <SignForm
            header='Добро пожаловать'
            buttonTitle='Зарегистрироваться'
            textUnderSubmit='Уже зарегистрированы?'
            link='/signin'
            linkText='Войти'/>
    )
}

export default Register;
