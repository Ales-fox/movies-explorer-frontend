import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './Profile.css';

function Profile(props) {
    const { logOutLink, linkName, onClick, children } = props;
    const currentUser = React.useContext(CurrentUserContext); // Подписываемся на контекст
    const [value, setValue] = useState({ email: currentUser.email, name: currentUser.name }); //Создаем переменную для инпутов

    // Управление инпутами
    function handleChangeValue(e) {
        setValue(old => ({
            ...old,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, name } = value;
        props.onEditProfileClick(name, email);
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
                    <button className="button__profile" type="submit" >Редактировать</button>
                    <Link className="link-logOut link" to={logOutLink} onClick={onClick}>{linkName}</Link>
                </form>
            </main>
        </>        
    )
}

export default Profile;
