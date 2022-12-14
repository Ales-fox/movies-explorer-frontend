import './FilterCheckbox.css';

function FilterCheckbox(props) {    
    return (
        <div className="checkbox__container">            
            <label className="switch" htmlFor="checkbox">
                <input type='checkbox' id='checkbox' className='checkbox'></input>
                <div className="slider round"></div>
            </label>
            <p className='checkbox__title'>Короткометражки</p>
        </div>       
    )
}

export default FilterCheckbox;
