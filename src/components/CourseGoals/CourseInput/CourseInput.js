import React, {useState} from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from "styled-components";

const FormControl = styled.div`
    margin: 0.5rem 0;
   
    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        color: ${props => props.invalid ? '#bb0202' : 'black'}
    }
    
    & input {
        display: block;
        width: 100%;
        border: 1px solid ${props => props.invalid ? '#bb0202' : '#ccc'};
        background: ${props => props.invalid ? '#fe4b4b' : 'transparent'};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
    }
    
    & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
    }
`

function CourseInput(props) {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    function goalInputChangeHandler(event) {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl invalid={!isValid}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}/>
            </FormControl>
            <Button type="submit">Add Goal</Button>
        </form>
    );
}

export default CourseInput;
