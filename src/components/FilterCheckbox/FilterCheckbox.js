import './FilterCheckbox.css';

function FilterCheckbox({onChange, checked}) {
    
    return (
        <div className="checkbox">            
            <label className="switch" htmlFor="checkbox">
                <input type='checkbox' id="checkbox" className='checkbox__input' name="checked"  onChange={onChange} checked={checked}></input>
                <div className="slider round"></div>
            </label>
            <p className='checkbox__title'>Короткометражки</p>
        </div>       
    )
}

export default FilterCheckbox;
