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
export const initialUser = {name: '', email: '', _id: ''};
export const initialMoviesCards = [];
export const baseURL = 'http://localhost:3000'
//' http://localhost:3000 https://api.movies.nomoredomains.club' ;
export const moviesURL = 'https://api.nomoreparties.co/beatfilm-movies';
export const moviesImgURL = 'https://api.nomoreparties.co';