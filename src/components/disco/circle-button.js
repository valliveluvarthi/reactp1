import React from "react";
import './circle-button.scss';
const CircleButton = (props) =>{
    return (
        <React.Fragment>
            <button className="start-button" onClick={props.onStart}>Start</button>
        </React.Fragment>
    );
}

export default CircleButton;