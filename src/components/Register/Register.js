import React, { useState } from 'react';
import  SignForm from "../SignForm/SignForm";

function Register(props) { 
    const [value, setValue] = useState({ email: '', password: '', name: '' }); //Создаем переменную для инпутов
    
    // Управление инпутами
    function handleChangeValue(e) {
        setValue(old => ({
            ...old,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, name } = value;
        /*props.onRegister(email, password, name);*/ //Пока нет такой функции
    };
    
    return (
        <>
            <SignForm
                header='Добро пожаловать'
                buttonTitle='Зарегистрироваться'
                textUnderSubmit='Уже зарегистрированы?'
                link='/signin'
                linkText='Войти'
                onSubmit={handleSubmit}
                onChange={handleChangeValue}
                value={value}>
                    <label htmlFor="name" className='label'>Имя</label>
                    <input type="text" id='name' className='input_signForm input' name='name' onChange={handleChangeValue} value={value.name} required/>
                    <span className={`input-error input-error_name`}></span>
            </SignForm>
        </>
    )
}

export default Register;
