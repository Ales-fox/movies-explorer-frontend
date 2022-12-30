import { baseURL, moviesImgURL } from "../constants";

export const getUserInfo = () => {
    return fetch(`${baseURL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',
    }).then(res => getResponseData(res))
}

export const changeLikeCardStatus = (card, isLiked) =>{
    return (isLiked) ? putLikes(card) : deleteLikes(card);
}

const putLikes = (card) => {
    const {
        country,
        director,
        duration,
        year,
        description,
        trailerLink,
        id,
        nameRU,
        nameEN,
    } = card;

    return fetch(`${baseURL}/movies`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({
            country,
            director,
            duration,
            year,
            description,
            image: `${moviesImgURL}${card.image.url}`,
            trailerLink,
            thumbnail:`${moviesImgURL}${card.image.formats.thumbnail.url}`,
            id,
            nameRU,
            nameEN,
        } ),
    }).then(res => getResponseData(res));
}

const deleteLikes = (card) => {
    return fetch(`${baseURL}/movies/${card._id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',        
    }).then(res => getResponseData(res));
}

function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}  ${res.statusText}`);
    }
    return res.json();
}