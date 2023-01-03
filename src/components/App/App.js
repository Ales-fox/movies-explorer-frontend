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
import Preloader from '../Preloader/Preloader';

import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import * as authApi from '../../utils/authApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';

import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Потом изменить на false
  const [currentUser, setCurrentUser] = useState({name: '', email: '', _id: ''});
  const [moviesCards, setMoviesCards] = useState([]);

  const [savedMoviesCards, setSavedMoviesCards] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Для Прелаудера
  const [errorServerMessage, setErrorServerMessage] = useState(""); // Ошибка с сервера при регистрации/авторизации
  const [searchValue, setSearchValue] = useState('Фильм'); // Сохраненное значение поисковика
  const [isChecked, setIsChecked] = useState(false); // Чекбокс Короткометражка вкл/выкл
  const [errorFilm, setErrorFilm] = useState(''); // Для строки при случае когда фильмы не найдены/ошибка с сервера
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      setMoviesCards(JSON.parse(localStorage.getItem('movies')));
      setSearchValue(localStorage.getItem('search'));
      setIsChecked(localStorage.getItem('checked'));
    }

    mainApi.getlikedMovies()
      .then((data) => setSavedMoviesCards(data))
      .catch((err) => console.log(err));
  }, [loggedIn]);

  useEffect(() => {
   }, [moviesCards]);

  // Регистрация
  const handleRegister = (name, email, password) => {
    setIsLoading(true);
    return authApi.register(name, email, password)
      .then((data) => {
        if (!data) { return Promise.reject('No data') };
        console.log('Вы успешно зарегестрировались');
        handleLogin(email, password);
      })
      .catch((err) => {        
        setErrorServerMessage(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  //Авторизация
  const handleLogin = (email, password) => {
    setIsLoading(true);
    return authApi.authorize(email, password)
      .then((data) => {
        if (!data?.token) { return Promise.reject('No data') };
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {        
        setErrorServerMessage(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // Проверка токена пользователя при автоматической авторизации
  const tokenCheck = () => {
    const fullPage = document.location.href;
    const shortPage = fullPage.substr(fullPage.lastIndexOf('/') + 1);

    mainApi.getUserInfo()
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          console.log(res);
          setLoggedIn(true);
          navigate('/movies');
          //navigate(shortPage); // Перенаправляет всегда на страницу указанную в protectedRoute, хмм
        }
      }).catch((err) => {
        (err === '401')? handleLogOutClick() : console.log(err);
      });
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  //Выход из системы
  const handleLogOutClick = () => {
    setIsLoading(true);
    authApi.logOut()
    .then(() => {
      localStorage.clear();
      setLoggedIn(false);
      navigate('/signin');      
      console.log('Вышли');
    })
    .catch((err) => console.dir(err))
    .finally(() => {
      setIsLoading(false);
    });
  }

  const filterSearch = (str, match) => str.toLowerCase().includes(match.toLowerCase());

  const handleSearchClick = ({search, checked}) => {
    setIsLoading(true);  
    setErrorFilm('');

    moviesApi.getAllFilms()
      .then((itemsFilm) => {
        console.log(itemsFilm);
        if (checked) {
          itemsFilm = itemsFilm.filter((film) => film.duration <= 40);
        }

        itemsFilm = itemsFilm.filter(({ nameEN, nameRU }) => 
        filterSearch(nameRU, search) || filterSearch(nameEN, search)
        );

        setMoviesCards(itemsFilm);
        console.log(itemsFilm);

        localStorage.setItem('isFilmShort', checked);
        localStorage.setItem('search', search);
        localStorage.setItem('movies', JSON.stringify(itemsFilm));

        if (itemsFilm.length === 0) {
          setErrorFilm('Ничего не найдено');
        }

      }).catch(err => {
        setErrorFilm('Во время запроса произошла ошибка');
      })
      .finally(() => setIsLoading(false));
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке    
    // const isLiked = savedMoviesCards.some(i => i.owner === currentUser._id);
    const isLiked = savedMoviesCards.some(i => i.id === card.id && i.owner === currentUser._id);
    console.log(card);
    console.log(currentUser);
    console.log(currentUser._id);

    setIsLoading(true);
    if (!isLiked) {
      mainApi.putLikes(card)
        .then((data) => console.log(data))
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    } else {
      mainApi.deleteLikes(card)
        .then((data) => console.log(data))
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    }
  }

  function handleCardDelete(card) {
    setIsLoading(true);
    mainApi.deleteLikes(card)
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }

  function handleEditProfile(name, email) {
    mainApi.correctUserInfo(name, email)
      .then((data) => {
        setCurrentUser({
          name: data.name,
          email: data.email
        })
      })
      .catch((err) => console.log(err));
  }

  const handleHamburgerPopupClick = () => {
    setPopupOpen(true);
  };

  const closePopups = () => {
    setPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}> 
    <div className="App">
           
      <Routes>            
        <Route path='/'>
          <Route index element={<Main/>} />

          <Route path='/signup' element={<Register onRegister={handleRegister} errorServerMessage={errorServerMessage} navigate={navigate}/>}>
          </Route>

          <Route path='/signin' element={<Login onLogin={handleLogin} errorServerMessage={errorServerMessage} navigate={navigate}/>}>
          </Route>          

          <Route element={<ProtectedRoute loggedIn={loggedIn}/>}>
        
            
            <Route path='/profile' element={<Profile onMenuHamburgerClick={handleHamburgerPopupClick} loggedIn={loggedIn} logOutLink='/signin' linkName='Выйти из аккаунта' onClick={handleLogOutClick} onEditProfileClick={handleEditProfile} />}/>

            <Route path='/movies' element={
                <Movies onMenuHamburgerClick={handleHamburgerPopupClick} onSearch={handleSearchClick} searchPlaceholder={searchValue} isChecked={isChecked} cardsList={moviesCards} buttonClass={`button-like`} onCardLike={handleCardLike} savedMoviesCards={savedMoviesCards} errorFilm={errorFilm}/>}>             
            </Route>

            <Route path='/saved-movies' element={
              <SavedMovies onMenuHamburgerClick={handleHamburgerPopupClick} onSearch={handleSearchClick} cardsList={savedMoviesCards} buttonClass={'button-delete'} onDelete={handleCardDelete}/>}>
            </Route>
           
          </Route>          
          <Route path="*" element={<NotFoundPage />} />
        </Route>                 
      </Routes>
      <Preloader isLoading={isLoading}/>
      <HeaderMenuHamburger isOpen={isPopupOpen} onClose={closePopups}/>
      
    </div>
    </CurrentUserContext.Provider>
  ); 
}

export default App;
