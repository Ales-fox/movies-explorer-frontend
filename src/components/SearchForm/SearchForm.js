import React, { useEffect, useState } from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { ValidationSearch } from '../FormValid/FormValid';
import './SearchForm.css';

function SearchForm(props) {
    const [value, setValue] = useState(''); //Создаем переменную для инпутов

    const [error, setError] = useState(true);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (error === true) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [error]);

    // Управление инпутами
    function handleChangeValue(e) {
        setValue(e.target.value);

        ValidationSearch(e, setError);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        /*props.onSearch(value);*/ //Пока нет такой функции
    };

    return (
        <>
            <form className="searchForm" onSubmit={handleSubmit}>
                <input type='text' className='searchForm__input' name='film' onChange={handleChangeValue} value={value} placeholder='Фильм' required></input>
                <button type="submit" className="button-search button" disabled={!formValid} onClick={props.onClick} >Поиск</button>
            </form>
            <FilterCheckbox />
        </>        
    )
}

export default SearchForm;