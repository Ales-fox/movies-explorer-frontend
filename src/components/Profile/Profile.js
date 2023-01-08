import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './Profile.css';

function Profile(props) {
    const { logOutLink, linkName, onClick, children } = props;
    const currentUser = React.useContext(CurrentUserContext); // Подписываемся на контекст
    const [value, setValue] = useState({ email: currentUser.email, name: currentUser.name }); //Создаем переменную для инпутов
    const [serverMessage, setServerMessage] = useState({mes: '', dis: false});

    // Управление инпутами
    function handleChangeValue(e) {
        setValue(old => ({
            ...old,
            [e.target.name]: e.target.value
        }));        
        if (e.target.name === "name" & e.target.value ===currentUser.name) {
            setServerMessage((old) => ({
              ...old,
              dis: true
            }));
        } else if (e.target.name === "email" & e.target.value === currentUser.email) {
            setServerMessage((old) => ({
                ...old,
                dis: true
              }));
        } else {
            setServerMessage({
                mes: '',
                dis: false
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, name } = value;
        props.onEditProfileClick(name, email, setServerMessage);
    };

    return (
        <>
            {children}
            <main className='profile'>
                <h1 className="profile__header">{`Привет, ${currentUser.name}!`}</h1>
                <form className="profileForm"  onSubmit={handleSubmit}>
                    <div className='profileForm__cell'>
                        <label htmlFor="name" className='label__profileForm'>Имя</label>
                        <input type="text" id='name' className='input_profileForm input' name='name' onChange={handleChangeValue} placeholder={currentUser.name} value={value.name} required></input>
                        <span className="input-error input-error_name"></span>
                    </div>
                    <div className='profileForm__cell'>
                        <label htmlFor="email" className='label__profileForm'>E-mail</label>
                        <input type="email" id='email' className='input_profileForm input' name='email'  onChange={handleChangeValue} placeholder={currentUser.email} value={value.email} required></input>
                        <span className="input-error input-error_email"></span>       
                    </div>
                    <p className='serverMessage'>{serverMessage.mes}</p>                           
                    <button className={`button__profile ${serverMessage.dis? 'button__profile_inactive' : ''}`} type="submit" >Редактировать</button>
                    <Link className="link-logOut link" to={logOutLink} onClick={onClick}>{linkName}</Link>
                </form>
            </main>
        </>        
    )
}

export default Profile;
