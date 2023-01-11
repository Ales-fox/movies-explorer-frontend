import React, { useState } from 'react';
import  SignForm from "../SignForm/SignForm";

function Login(props) {
    const {errorServerMessage}= props;

    const handleSubmit = (e, value) => {
        e.preventDefault();
        const { email, password } = value;
        props.onLogin(email, password);
    };

    return (
            <SignForm
                header='Рады видеть'
                buttonTitle='Войти'
                textUnderSubmit='Еще не зарегистрированы?'
                link='/signup'
                linkText='Регистрация'
                onSubmit={handleSubmit}
                errorServerMessage={errorServerMessage}
            />
    )
}

export default Login;
