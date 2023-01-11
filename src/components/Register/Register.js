import React from 'react';
import  SignForm from "../SignForm/SignForm";

function Register(props) {
    const {errorServerMessage}= props;
    
    const handleSubmit = (e, value) => {
        e.preventDefault();
        const { name, email, password } = value;
        props.onRegister(name, email, password);
    };

    return (
        <SignForm
            header='Добро пожаловать'
            buttonTitle='Зарегистрироваться'
            textUnderSubmit='Уже зарегистрированы?'
            link='/signin'
            linkText='Войти'
            errorServerMessage={errorServerMessage}
            onSubmit={handleSubmit}/>
    )
}

export default Register;
