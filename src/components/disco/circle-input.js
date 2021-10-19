import React, { useState } from "react";
import './circle-input.scss';
const CircleInput = (props) => {
    var [circleInputValue, setCircleInputValue] = useState(0);
    var [inputHasError, setInputHasError] = useState(false);
    var [maxInputError, setMaxInputError] = useState(false);
    const circleInputChangeHandler = (event) => {
        console.log(event.target.value);
        if(event.target.value > 0){
            if(event.target.value < 7){
                setMaxInputError(false);
                setCircleInputValue(event.target.value);
            }else{
                setMaxInputError(true);
            }
            setInputHasError(false);
        }else{
            setInputHasError(true);
        }
    }
    return (
        <React.Fragment>
            <div className="circle-form-control">
            <label htmlFor="circle-number">Enter no.of circles : </label>
            <input
                type="number"
                id="circle-number"
                value={circleInputValue}
                onChange={circleInputChangeHandler}
              />
            </div>
            {inputHasError && <p className="circle-error-text">Please enter a positive input value.</p>}
            {maxInputError && <p className="circle-error-text">Please enter a value less than 7.</p>}
        </React.Fragment>
    );
}
export default CircleInput;