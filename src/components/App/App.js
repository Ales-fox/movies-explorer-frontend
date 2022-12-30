import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

//Импорт компонентов
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import HeaderMenuHamburger from '../HeaderMenuHamburger/HeaderMenuHamburger';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import * as authApi from '../../utils/authApi';

import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Потом изменить на false
  const [userInfo, setUserInfo] = useState({name: 'Whos', email: 'Whos@mail.ru'});
  const [moviesCards, setMoviesCards] = useState([]);
  const [savedMoviesCards, setSavedMoviesCards] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [errorServerMessage, setErrorServerMessage] = useState(''); //Ошибка с сервера при регистрации/авторизации

  const navigate = useNavigate();
  
  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo()
        .then((itemsUserInfo) => {
          setUserInfo(itemsUserInfo);
          console.dir(itemsUserInfo);
        })
        .catch(err => console.dir(err));
    }
  }, [loggedIn])

  useEffect(() => {
   }, [moviesCards]);

  const handleHamburgerPopupClick = () => {
    setPopupOpen(true);
  };

  const closePopups = () => {
    setPopupOpen(false);
  }
  
  

  // Регистрация
  const handleRegister = (name, email, password) => {
    return authApi.register(name, email, password)
      .then((data) => {
        if (!data) { return Promise.reject('No data') };
        console.log('Вы успешно зарегестрировались');
        handleLogin(email, password);
      })
      .catch((err) => {        
        setErrorServerMessage(err);
      });
  }
  //Авторизация
  const handleLogin = (email, password) => {
    return authApi.authorize(email, password)
      .then((data) => {
        if (!data?.token) { return Promise.reject('No data') };
        console.dir(data);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {        
        setErrorServerMessage(err);
      })
  }
  // Проверка токена пользователя при автоматической авторизации
  const tokenCheck = () => {    
    //Проверяем токен пользователя
    authApi.getContent()
      .then((res) => {
        if (res) {
          const userData = {
            name: res.name,
            email: res.email
          }
          setLoggedIn(true);
          setUserInfo(userData);
          navigate('/movies');
        }
      }).catch(err => console.log(err));
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  //Выход из системы
  const handleLogOutClick = () => {
    authApi.logOut()
    .then((data) => {
      navigate('/signin');
      setLoggedIn(false);
      console.log('Вышли');
    })
    .catch((err) => console.dir(err));
  }

  const handleSearchClick = () => {
    // Пока просто отдает все фильмы
    moviesApi.getAllFilms()
      .then((itemsFilm) => {
        setMoviesCards(itemsFilm);
      }).catch(err => console.log(err));
  }



  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке    
    const isLiked = savedMoviesCards.some(i => i.id === card.id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    mainApi.changeLikeCardStatus(card, !isLiked)
      .then((data) => {        
        if (!isLiked) {
          handleCardSetLike(data);          
        } else {
          handleCardDeleteLike(data, card);
        };
      })
      .catch((err) => console.error(err))
  }

  function handleCardSetLike(data) {
    setSavedMoviesCards(old => ([
      ...old,
      data
    ]));
    const newListCards=moviesCards.map(o => {
      if (o.id===data.id) {
        o._id=data._id;
        return o
      }
      return o;
    });
    setMoviesCards(newListCards);
  }

  function handleCardDeleteLike(data, card) {
    setSavedMoviesCards((state) => state.filter(item => item.id !== card.id));
    const newListCards=moviesCards.map(o => {
      if (o.id===data.id) {
        delete o._id;
        return o
      }
        return o;
    });
    setMoviesCards(newListCards);
  }

  function handleCardDelete() {
    
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Main/>} />

          <Route path='/signup' element={<Register onRegister={handleRegister} errorServerMessage={errorServerMessage} navigate={navigate}/>}>
          </Route>

          <Route path='/signin' element={<Login onLogin={handleLogin} errorServerMessage={errorServerMessage} navigate={navigate}/>}>
          </Route>          

          <Route element={<ProtectedRoute loggedIn={loggedIn}/>}>
            <Route path='/profile' element={<Profile onMenuHamburgerClick={handleHamburgerPopupClick} userInfo={userInfo} logOutLink='/signin' linkName='Выйти из аккаунта' onClick={handleLogOutClick} />}/>

            <Route path='/movies' element={
                <Movies onMenuHamburgerClick={handleHamburgerPopupClick} onSearch={handleSearchClick} cardsList={moviesCards} buttonClass={`button-like`} onCardLike={handleCardLike} savedMoviesCards={savedMoviesCards}/>}>             
            </Route>

            <Route path='/saved-movies' element={<SavedMovies onMenuHamburgerClick={handleHamburgerPopupClick} onSearchClick={handleSearchClick} cardsList={moviesCards}/>}>
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
