import film1 from './images/film_1.png';
import film2 from './images/film_2.png';
import film3 from './images/film_3.png';
import film4 from './images/film_4.png';
import film5 from './images/film_5.png';
import film6 from './images/film_6.png';
import film7 from './images/film_7.png';
import film8 from './images/film_8.png';
import film9 from './images/film_9.png';

export const constMoviesCards = [
    {   
        _id: '1',
        filmTitle: '33 слова о дизайне',
        url: film1,
        filmTime: '1ч 47м',
        like: true,
    },
    {
        _id: '2',
        filmTitle: 'Киноальманах "100 лет дизайна',
        url: film2,
        filmTime: '1ч 3м',
        like: true,
    },
    {
        _id: '3',
        filmTitle: 'В погоне за Бэнкси',
        url: film3,
        filmTime: '1ч 42м',
        like: true,
    },
    {
        _id: '4',
        filmTitle: 'Баския: Взрыв реальности',
        url: film4,
        filmTime: '1ч 21м',
        like: true,
    },
    {   
        _id: '5',
        filmTitle: 'Бег это свобода',
        url: film5,
        filmTime: '1ч 44м',
        like: false,
    },
    {   
        _id: '6',
        filmTitle: 'Книготорговцы',
        url: film6,
        filmTime: '1ч 37м',
        like: true,
    },
    {   
        _id: '7',
        filmTitle: 'Когда я думаю о Германии ночью',
        url: film7,
        filmTime: '1ч 56м',
        like: true,
    },
    {   
        _id: '8',
        filmTitle: 'Gimme Danger: История Игги и The Stooge а так же очень много текста',
        url: film8,
        filmTime: '1ч 59м',
        like: false,
    },
    {   
        _id: '9',
        filmTitle: 'Дженис: Маленькая девочка грустит',
        url: film9,
        filmTime: '1ч 42м',
        like: true,
    },
    {   
        _id: '10',
        filmTitle: '33 слова о дизайне 2',
        url: film1,
        filmTime: '1ч 47м',
        like: true,
    },
    {
        _id: '11',
        filmTitle: 'Киноальманах "100 лет дизайна 2',
        url: film2,
        filmTime: '1ч 3м',
        like: true,
    },
    {
        _id: '12',
        filmTitle: 'В погоне за Бэнкси 2',
        url: film3,
        filmTime: '1ч 42м',
        like: true,
    },
    {
        _id: '13',
        filmTitle: 'Баския: Взрыв реальности 2',
        url: film4,
        filmTime: '1ч 21м',
        like: true,
    },
    {   
        _id: '14',
        filmTitle: 'Бег это свобода 2',
        url: film5,
        filmTime: '1ч 44м',
        like: false,
    },
    {   
        _id: '15',
        filmTitle: 'Книготорговцы 2',
        url: film6,
        filmTime: '1ч 37м',
        like: true,
    },
    {   
        _id: '16',
        filmTitle: 'Когда я думаю о Германии ночью 2',
        url: film7,
        filmTime: '1ч 56м',
        like: true,
    },
    {   
        _id: '17',
        filmTitle: 'Gimme Danger: История Игги и The Stooge а так же очень много текста 2',
        url: film8,
        filmTime: '1ч 59м',
        like: false,
    },
    {   
        _id: '18',
        filmTitle: 'Дженис: Маленькая девочка грустит 2',
        url: film9,
        filmTime: '1ч 42м',
        like: true,
    },
];

export const savedMoviesCard = [
    {   
        _id: '1',
        filmTitle: '33 слова о дизайне',
        url: film1,
        filmTime: '1ч 47м',
        like: true,
    },
    {
        _id: '2',
        filmTitle: 'Киноальманах "100 лет дизайна',
        url: film2,
        filmTime: '1ч 3м',
        like: true,
    },
    {   
        _id: '3',
        filmTitle: 'Книготорговцы',
        url: film6,
        filmTime: '1ч 37м',
        like: true,
    },
];

export const reEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
export const reName =  /^[a-zа-яё -]+$/;

export const inputErrorMessage = {
    fieldEmpty: 'Поле не может быть пустым',
    searchEmpty: 'Нужно ввести ключевое слово',
    emailIncorrect: 'Email некорректен',
    passwordIncorrect: 'Пароль должен быть длиннее 8 символов',
    nameLengthIncorrrect: 'Имя должно быть длиннее 3 символов',
    nameIncorrrect: 'Имя должно содержать только латиницу, кириллицу, пробел или дефис'
}

export const baseURL = 'http://localhost:3000'
//' http://localhost:3000 https://api.movies.nomoredomains.club';
export const moviesURL = 'https://api.nomoreparties.co/beatfilm-movies';
export const moviesImgURL = 'https://api.nomoreparties.co';