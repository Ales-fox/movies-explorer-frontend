import './FilterCheckbox.css';

function FilterCheckbox(props) {    
    return (
        <div className="checkbox">            
            <label className="switch" htmlFor="checkbox">
                <input type='checkbox' id='checkbox' className='checkbox__input'></input>
                <div className="slider round"></div>
            </label>
            <p className='checkbox__title'>Короткометражки</p>
        </div>       
    )
}

export default FilterCheckbox;
