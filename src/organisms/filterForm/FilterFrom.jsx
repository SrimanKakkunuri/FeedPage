import './filterForm.css';
import { useState } from 'react';
import {FIELD_INFO} from './constants/filterForm.formFields'


export default function FilterForm({displayState,submitHandler}){

    const initialState = FIELD_INFO.reduce((acc, field) => {
        acc[field.id] = '';
        return acc;
      }, {});

    const [formState,setFormState] = useState(initialState);
    const [displayError,setDisplayError] = useState(false);

    function handleChange(e){
        const {id,value} = e.target;
        setFormState({
            ...formState,
            [id]:value
        })
    }
    function handleSubmit(e){
        e.preventDefault();

        if(displayError === true)
        {
            setDisplayError(false);
        }
        const start = new Date(formState.fromDate);
        const end = new Date(formState.toDate);
        start.setHours(0, 0, 0, 0);
        end.setHours(0, 0, 0, 0);

        if(start <= end){
            submitHandler(formState.fromDate, formState.toDate);
        }
        else{
            setDisplayError(true);
        }
    }

    function renderForm(fields){
        return (
            <form className="filter-form">
                {fields.map((field,index) => {
                    return (<div className="form-entry" key={index}>
                        <label>{field.label}</label>
                        <input id={field.id} type={field.inputType} value={formState[field.id]} onChange={handleChange} placeholder={field.placeholder} required={field.required}></input>
                    </div>)
                })}
                {displayError && <p>FromDate must be before ToDate</p>}
                <button type="submit" id="apply-btn" onClick={handleSubmit}>Apply</button>
            </form>
        )
    }

    return (
        <div id="filterModal" className={displayState ? "modal" : "modal nodisplay"}>
            <div class="filter-modal-content">
                {renderForm(FIELD_INFO)}
            </div>
        </div>
    )
}