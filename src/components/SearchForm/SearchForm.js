import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
    const [value, setValue] = useState(''); //Создаем переменную для инпутов
    const [position, setPosition] = useState('true');

    // Управление инпутами
    function handleChangeValue(e) {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        /*props.onSearch(value);*/ //Пока нет такой функции
    };

    return (
        <>
            <form className="searchForm" onSubmit={handleSubmit}>
                <input type='text' className='searchForm__input' onChange={handleChangeValue} value={value} placeholder='Фильм' required></input>
                <button type="submit" className="button-search button" >Поиск</button>
            </form>
            <FilterCheckbox position={position} />
        </>        
    )
}

export default SearchForm;