import React, { useEffect, useState } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';

//Импорт компонентов
import ProtectedRoute from '../ProtectedRoute';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import HeaderMenuHamburger from '../HeaderMenuHamburger/HeaderMenuHamburger';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true); // Потом изменить на false
  const [userInfo, setUserInfo] = useState({name: 'Александра', email: 'Tuturu@mail.ru'});
  const [moviesCards, setMoviesCards] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  
  const handleHamburgerPopupClick = () => {
    setPopupOpen(true);
  };

  const closePopups = () => {
    setPopupOpen(false);
    console.log(isPopupOpen);
  }
  
  useEffect(() => {
   //Должна быть проверка на состояние loggedIn
  }, [loggedIn]);

  //Выход из системы
  const handleLogOutClick = () => {
    /*authApi.logOut()
    .then((data) => {
      history.push('/signin'); //Переадресация
      console.log('Вышли');
    })
    .catch((err) => console.dir(err)); */ //Апи пока нет
  }

  const handleSearchClick = () => {
    console.log('Поиск');
    //Click по кнопке Поиск
  }

  function handleCardLike(card) {
    /*// Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard: c));
    }).catch(e => console.error(e));*/
  }

  function handleCardDelete(card) {
    console.log('delete');
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Main/>} />

          <Route path='/signup' element={<Register/>}>
          </Route>

          <Route path='/signin' element={<Login/>}>
          </Route>          

          <Route element={<ProtectedRoute loggedIn={loggedIn}/>}>
            <Route path='/profile' element={<Profile onMenuHamburgerClick={handleHamburgerPopupClick} userInfo={userInfo} logOutLink='/signin' linkName='Выйти из аккаунта' onClick={handleLogOutClick} />}/>

            <Route path='/movies' element={
                <Movies onMenuHamburgerClick={handleHamburgerPopupClick} onSearchClick={handleSearchClick} moviesCards={moviesCards} />}>
              <Route path='/movies' element={
                <button className='button-like button-like_active' type="button" onClick={handleCardLike}/>                 
                }/>
            </Route>

            <Route path='/saved-movies' element={<SavedMovies onMenuHamburgerClick={handleHamburgerPopupClick} onSearchClick={handleSearchClick} />}>
              <Route path='/saved-movies' element={
                <button className="button-delete" type="button" onClick={handleCardDelete}/>
                }/>
            </Route>
          </Route>
          
          <Route path="*" element={<NotFoundPage />} />
        </Route>             
      </Routes>
      <HeaderMenuHamburger isOpen={isPopupOpen} onClose={closePopups}/>
    </div>
  ); 
}

export default App;
