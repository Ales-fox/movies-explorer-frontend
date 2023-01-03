import React, { useEffect, useState } from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
    const {searchPlaceholder, isChecked} = props;
    
    const [formSettings, setFormSettings] = useState({search: '', checked: false});// Переменная для инпута search и checkbox
    const [placeholder, setPlaceholder] = useState(searchPlaceholder);
    const [checked, setChecked] = useState(isChecked);

    useEffect(() => {
        setPlaceholder(searchPlaceholder);
        setChecked(localStorage.getItem('isFilmShort') === 'true');
    }, [searchPlaceholder])

    // Управление инпутами
    function handleChangeValue(e) {
        // ValidationSearch(e, setError, setErrorMessage);
        setFormSettings(old => ({
            ...old,
            search: e.target.value
        }));
        console.log(formSettings);
    };

    function handleChangeCheckbox(e) {
        setChecked(!checked);
        setFormSettings(old => ({
            ...old,
            checked: e.target.checked
        }));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formSettings.search === '') {
            setPlaceholder('Нужно ввести ключевое слово');
            console.log(placeholder);
            return;
        }

        props.onSearch(formSettings);
        setPlaceholder(formSettings?.search || placeholder);
        setChecked(formSettings?.checked);
        setFormSettings({ search: "", checked: false });
        clearForm(e);
    };

    const clearForm = (e) => {
        Array.from(e.target).forEach((input) => input.type === 'checkbox' ? input.checked && console.log('input checked: ', input.checked): input.value = "");
    };

    return (
        <>
            <form className="searchForm" name="search" id="search" onSubmit={handleSubmit} autoComplete="off" noValidate>
                <input 
                    type='search' 
                    className='searchForm__input' 
                    name="search" 
                    onChange={handleChangeValue} 
                    value={formSettings.search} 
                    placeholder={placeholder} 
                    required/>
                <button type="submit" className={`button-search button `} >Поиск</button>
            </form>
            <FilterCheckbox onChange={handleChangeCheckbox} checked={checked}/>
        </>        
    )
}

export default SearchForm;