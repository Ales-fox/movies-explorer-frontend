import React, { useEffect, useState } from 'react';
import { useLocation  } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {inputErrorMessage} from '../../constants';
import './SearchForm.css';

function SearchForm(props) {
    const {searchPlaceholder, isChecked, setVisibleCardsList} = props;
    
    const [formSettings, setFormSettings] = useState({search: '', searchSaved: '', checked: false, checkedSaved: false});// Переменная для инпута search и checkbox
    const [placeholder, setPlaceholder] = useState(searchPlaceholder);
    const [checked, setChecked] = useState(isChecked);
    
    const {pathname} = useLocation();

    useEffect(() => {
        setPlaceholder(searchPlaceholder);
        setChecked(localStorage.getItem('isFilmShort') === 'true');
        setFormSettings((old) => ({
            ...old,
            search: localStorage.getItem('search')? localStorage.getItem('search') : ''
        }))
    }, [searchPlaceholder])

    // Управление инпутами
    function handleChangeValue(e) {
        if (pathname === '/movies') {
            setFormSettings(old => ({
                ...old,
                search: e.target.value
            }));
        } else {
            setFormSettings(old => ({
                ...old,
                searchSaved: e.target.value
            }));
        }
    };

    function handleChangeCheckbox(e) {
        setChecked(!checked);
        if (pathname === '/movies') {
            setFormSettings(old => ({
                ...old,
                checked: e.target.checked
            }));
        } else {
            setFormSettings(old => ({
                ...old,
                checkedSaved: e.target.checked
            }));
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formSettings.search === '') {
            setPlaceholder(inputErrorMessage.searchEmpty);
            return;
        }
        props.onSearch(formSettings, setVisibleCardsList);
        setPlaceholder(formSettings?.search || placeholder);
        setChecked(formSettings?.checked);
        // setFormSettings({ search: "", checked: false });
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
                    value={pathname==='/movies'? formSettings.search : formSettings.searchSaved}
                    required/>
                <button type="submit" className={`button-search button `} >Поиск</button>
            </form>
            <FilterCheckbox onChange={handleChangeCheckbox} checked={checked}/>
        </>        
    )
}

export default SearchForm;