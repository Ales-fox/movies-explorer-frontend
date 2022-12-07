import React, { useState } from 'react';
import  SignForm from "../SignForm/SignForm";

function Login(props) {
    const [value, setValue] = useState({ email: '', password: ''});
    
    function handleChangeValue(e) {
        setValue(old => ({
            ...old,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = value;

        /*props.onLogin(email, password)
            .then(() => {
                setValue(initValues);
            })*/ //Нет такого свойства пока
    };

    return (
            <SignForm
                header='Рады видеть'
                buttonTitle='Войти'
                textUnderSubmit='Еще не зарегистрированы?'
                link='/signup'
                linkText='Регистрация'
                onSubmit={handleSubmit}
                onChange={handleChangeValue}
                value={value}
            />
    )
}

export default Login;
