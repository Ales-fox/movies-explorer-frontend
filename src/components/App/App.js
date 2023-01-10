import React, { useCallback, useEffect, useState } from 'react';
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
import { initialUser, initialMoviesCards } from '../../constants';

import './App.css';
import Header from '../Header/Header';


function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Потом изменить на false
  const [currentUser, setCurrentUser] = useState(initialUser);
  const [moviesCards, setMoviesCards] = useState(initialMoviesCards);

  const [savedMoviesCards, setSavedMoviesCards] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Для Прелаудера
  const [errorServerMessage, setErrorServerMessage] = useState(""); // Ошибка с сервера при регистрации/авторизации
  const [searchValue, setSearchValue] = useState('Фильм'); // Сохраненное значение поисковика
  const [isChecked, setIsChecked] = useState(false); // Чекбокс Короткометражка вкл/выкл
  const [errorFilm, setErrorFilm] = useState(''); // Для строки при случае когда фильмы не найдены/ошибка с сервера
  const navigate = useNavigate();

  const fullPage = document.location.href; // Определяет адрес страницы
  const shortPage = fullPage.substr(fullPage.lastIndexOf('/') + 1); // Отделяет адрес после последнего слеша
  // Проверка токена пользователя при автоматической авторизации
  const [isTokenChecked, setIsTokenChecked] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    mainApi.getUserInfo()
      .then((res) => {
        if (res) {          
          setCurrentUser(res);
          setLoggedIn(true);
          navigate(shortPage);
        }
      }).catch((err) => {
        console.log(err);
        setLoggedIn(false);})
      .finally(() => {
        setIsLoading(false);
        setIsTokenChecked(true);
      });
  }, [navigate, shortPage]);

  useEffect(() => {
    if (loggedIn) {
      if (localStorage.getItem('movies')) {
        setMoviesCards(JSON.parse(localStorage.getItem('movies')));
        setSearchValue(localStorage.getItem('search'));
        setIsChecked((localStorage.getItem('isFilmShort') === "true")? true : false);
      }
  
      Promise.all([mainApi.getlikedMovies(), mainApi.getUserInfo()])
          .then(([likedMovies, userInfo]) => {
            setSavedMoviesCards(likedMovies);
            setCurrentUser(userInfo);
          })
          .catch((err) => {
            if (err === 'Ошибка: 401  Unauthorized') {
              navigate('/signin');
              setLoggedIn(false);
            }
          });
    }

  }, [loggedIn]);

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
        //setLoggedIn((prevState) => !prevState);
        navigate('/movies');
      })
      .catch((err) => {        
        setErrorServerMessage(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //Выход из системы
  const handleLogOutClick =() => {
    setIsLoading(true);
    authApi.logOut()
    .then(() => {
      localStorage.clear();
      setLoggedIn(false);
      console.log(loggedIn);
      setCurrentUser(initialUser);
      setMoviesCards(initialMoviesCards);
      navigate('/'); 
      setIsTokenChecked(false);
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

        if (checked) {
          itemsFilm = itemsFilm.filter((film) => film.duration <= 40);
        }

        itemsFilm = itemsFilm.filter(({ nameEN, nameRU }) => 
        filterSearch(nameRU, search) || filterSearch(nameEN, search)
        );

        setMoviesCards(itemsFilm);

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

  const handleSearchSavedCard = ({searchSaved, checkedSaved}, setVisibleCardsList) => {
    setIsLoading(true);  
    setErrorFilm('');

    mainApi.getlikedMovies()
      .then((itemsFilm) => {
        if (checkedSaved) {
          itemsFilm = itemsFilm.filter((film) => film.duration <= 40);
        }

        itemsFilm = itemsFilm.filter(({ nameEN, nameRU }) => 
        filterSearch(nameRU, searchSaved) || filterSearch(nameEN, searchSaved)
        );

        //setSavedMoviesCards(itemsFilm);
        setVisibleCardsList(itemsFilm);

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
    const isLiked = savedMoviesCards.some(i => i.id === card.id && i.owner === currentUser._id);

    setIsLoading(true);
    if (!isLiked) {
      mainApi.putLikes(card)
        .then((dataCard) => {
          setSavedMoviesCards((old) => ([...old, dataCard]));
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    } else {
      const savedCard = savedMoviesCards.find(c => c.id === card.id & c.owner === currentUser._id);
      mainApi.deleteLikes(savedCard)
        .then((dataCard) => {
          setSavedMoviesCards(savedMoviesCards.filter(c => c._id !== dataCard._id));
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    }
  }

  function handleCardDelete(card) {
    setIsLoading(true);
    mainApi.deleteLikes(card)
      .then((dataCard) => {
        setSavedMoviesCards(savedMoviesCards.filter(c => c._id !== dataCard._id));
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }

  function handleEditProfile(name, email, setServerMessage) {
    if (name === currentUser.name & email === currentUser.email) {
      return;
    };
        
    mainApi.correctUserInfo(name, email)
      .then((data) => {
        setCurrentUser({
          name: data.name,
          email: data.email
        });
        setServerMessage((old) => ({
          ...old,
          mes: 'Профиль успешно сохранен'
        }));
      })
      .catch(() => setServerMessage((old) => ({
        ...old,
        mes: 'При обновлении профиля произошла ошибка'
      }))
      );
  }

  const handleHamburgerPopupClick = () => {
    setPopupOpen(true);
  };

  const closePopups = () => {
    setPopupOpen(false);
  }
  
  if (!isTokenChecked) { return ( <Preloader isLoading={isLoading}/> ) }

  return (
    <CurrentUserContext.Provider value={currentUser}> 
    <div className="App">
           
      <Routes>            
        <Route path='/' element={
          <Main>
            <Header onMenuHamburgerClick={handleHamburgerPopupClick} loggedIn={loggedIn}/>
          </Main>}>
        </Route>

        <Route element={<ProtectedRoute loggedIn={loggedIn}/>}>        
            
          <Route path='/profile' element={
            <Profile logOutLink='/signin' linkName='Выйти из аккаунта' onClick={handleLogOutClick} onEditProfileClick={handleEditProfile}>
              <Header onMenuHamburgerClick={handleHamburgerPopupClick} loggedIn={loggedIn}/>
            </Profile>}/>

          <Route path='/movies' element={
            <Movies onSearch={handleSearchClick} searchPlaceholder={searchValue} isChecked={isChecked} cardsList={moviesCards} buttonClass={`button-like`} onCardLike={handleCardLike} savedMoviesCards={savedMoviesCards} errorFilm={errorFilm}>
              <Header onMenuHamburgerClick={handleHamburgerPopupClick} loggedIn={loggedIn}/>
            </Movies>}>             
          </Route>

          <Route path='/saved-movies' element={
            <SavedMovies onSearch={handleSearchSavedCard} cardsList={savedMoviesCards} buttonClass={'button-delete'} onDelete={handleCardDelete} searchPlaceholder={searchValue} isChecked={isChecked}>
              <Header onMenuHamburgerClick={handleHamburgerPopupClick} loggedIn={loggedIn}/>
            </SavedMovies>}>
          </Route>
           
        </Route>

        <Route path='/signup' element={<Register onRegister={handleRegister} errorServerMessage={errorServerMessage} navigate={navigate}/>}/>          

        <Route path='/signin' element={<Login onLogin={handleLogin} errorServerMessage={errorServerMessage} navigate={navigate}/>}/>         
                   
        <Route path="*" element={<NotFoundPage />}/>                
      </Routes>

      <Preloader isLoading={isLoading}/>
      <HeaderMenuHamburger isOpen={isPopupOpen} onClose={closePopups}/>
      
    </div>
    </CurrentUserContext.Provider>
  ); 
}

export default App;
