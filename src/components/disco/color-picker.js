import React, { useState } from "react";
import ColorPickerName from "./color-name";
import "./color-picker.scss";

const ColorPicker = (props) => {
  let element = [];
  let dupPickers = [];
  let [totalPickers, setTotalPickers] = useState([]);
  let colorIdArr = [];
  for (let i = 0; i < props.noOfCircles; i++) {
    element.push(i);
    let pushObj = {};
    pushObj = {
      id: "favcolor" + i,
      value: "#000000",
    };
    dupPickers.push(pushObj);
  }
 
  const colorChangeHandler = (event) => {
    colorIdArr.push(event.target.id);
    if (totalPickers.length === 0) {
        totalPickers = dupPickers;
    }
    let updatedList = totalPickers.map(item => 
        {
          if (item.id ==  event.target.id){
            return {...item, value: event.target.value};
          }
          return item;
        });
    setTotalPickers(totalPickers = updatedList);
  };
  return (
    <React.Fragment>
      <div className="color-picker-content">
        {element.length > 0 && <h3>Pick the colors</h3>}
        <div className="color-pickers-input">
          {element.map((i) => {
            return (
              <div key={i}>
                <input
                  type="color"
                  id={"favcolor" + i}
                  name={"favcolor" + i}
                  onChange={colorChangeHandler}
                />
              </div>
            );
          })}
        </div>
        <div className="color-pickers-input">
          <ColorPickerName totalPickers={totalPickers} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ColorPicker;
