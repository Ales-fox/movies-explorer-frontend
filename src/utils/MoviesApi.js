import { moviesURL } from "../constants";

export const getAllFilms = () => {
    return fetch(moviesURL, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
        /*credentials: 'include',*/
    })
        .then(res => getResponseData(res))
}

function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}  ${res.statusText}`);
    }
    return res.json();
}