import { baseURL } from "../constants";

export const getUserInfo = () => {
    return fetch(`${baseURL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',
    }).then(res => getResponseData(res))
}

export const putLikes = (card) => {
    return fetch(`${baseURL}/movies`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(card),
    }).then(res => this._getResponseData(res));
}

export const deleteLikes = (id) => {
    return fetch(`${baseURL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',        
    }).then(res => this._getResponseData(res));
}

function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}  ${res.statusText}`);
    }
    return res.json();
}