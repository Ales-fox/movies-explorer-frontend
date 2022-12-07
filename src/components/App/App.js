import React, { useEffect, useState } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';

//Импорт компонентов
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
  
  useEffect(() => {
   //Должна быть проверка на состояние loggedIn
  }, [loggedIn]);

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
            <Route path='/profile' element={<Profile/>}/>

            <Route path='/movies' element={<Movies/>}/>

            <Route path='/saved-movies' element={<SavedMovies/>}/>
          </Route>
          
          <Route path="*" element={<NotFoundPage />} />
        </Route>             
      </Routes>
    </div>
  ); 
 /*
  </Route>

  <Route path='/signup'>
  </Route>

  <Route path='/' element={<Main/>} />

  <Route loggedIn={loggedIn} element={
    <ProtectedRoute>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/saved-movies' element={<SavedMovies/>}/>
    </ProtectedRoute>
  } />

  <Route path="*" element={<NotFoundPage />} /> /> */
}

export default App;
