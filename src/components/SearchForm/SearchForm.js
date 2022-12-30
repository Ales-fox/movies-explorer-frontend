import React, { useEffect, useState } from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { ValidationSearch } from '../FormValid/FormValid';
import { inputErrorMessage as message } from "../../constants";
import './SearchForm.css';

function SearchForm(props) {
    const [value, setValue] = useState(''); //Создаем переменную для инпутов

    const [error, setError] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [formValid, setFormValid] = useState(false);
    
    useEffect(() => {
        if (error === true) {
            setFormValid(false);
            setErrorMessage(message.searchEmpty);
        } else {
            setFormValid(true);
            setErrorMessage('');
        }
    }, [error]);

    // Управление инпутами
    function handleChangeValue(e) {
        setValue(e.target.value);
        ValidationSearch(e, setError, setErrorMessage);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(value); //Пока нет такой функции
    };

    return (
        <>
            <form className="searchForm" onSubmit={handleSubmit}>
                <input type='text' className='searchForm__input' name='film' onChange={handleChangeValue} value={value} placeholder='Фильм' required></input>
                <button type="submit" className="button-search button" disabled={!formValid} >Поиск</button>
            </form>
            <FilterCheckbox />
        </>        
    )
}

export default SearchForm;