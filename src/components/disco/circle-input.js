import React, { useState } from "react";
import ColorPicker from "./color-picker";
import './circle-input.scss';
const CircleInput = () => {
    let [circleInputValue, setCircleInputValue] = useState(1);
    let [inputHasError, setInputHasError] = useState(false);
    let [maxInputError, setMaxInputError] = useState(false);
    const circleInputChangeHandler = (event) => {
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

            {/* color picker component  */}
            <ColorPicker noOfCircles = {circleInputValue}/>
        </React.Fragment>
    );
}
export default CircleInput;