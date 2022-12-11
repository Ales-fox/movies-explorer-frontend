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
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true); // Потом изменить на false
  const [userInfo, setUserInfo] = useState({name: 'Александра', email: 'Tuturu@mail.ru'});
  
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
            <Route path='/profile' element={<Profile userInfo={userInfo} logOutLink='/signin' linkName='Выйти из аккаунта' onClick={handleLogOutClick} />}/>

            <Route path='/movies' element={<Movies/>}/>

            <Route path='/saved-movies' element={<SavedMovies/>}/>
          </Route>
          
          <Route path="*" element={<NotFoundPage />} />
        </Route>             
      </Routes>
    </div>
  ); 
}

export default App;
