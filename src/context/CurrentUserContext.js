import React, { createContext, useContext, useState } from "react";
import * as mainApi from '../utils/MainApi';

export const currentUserContext = createContext();

export function CurrentUserContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState({name: 'Whos', email: 'Whos@mail.ru'});

    const retrieveCurrentUser =  () => {
        mainApi.getUserInfo()
        .then((itemsUserInfo) => {
          setCurrentUser(itemsUserInfo);
          console.dir(itemsUserInfo);
        })
        .catch(err => console.dir(err));
    };

    const value = {
        currentUser,
        retrieveCurrentUser
    };

    return <currentUserContext.Provider value={value}>
        {children}
    </currentUserContext.Provider>
}

export function useCurrentUser() {
    return useContext(currentUserContext);
}