import React, { useState, useEffect } from "react";
import ColorPickerName from "./color-name";
import ColorPickers from "./color-pickers";
import CircleButton from "./circle-button";
import Circles from "./circles.js";
import "./color-picker.scss";

const ColorPicker = (props) => {
  let element = [];
  let dupPickers = [];
  let [totalPickers, setTotalPickers] = useState([]);
  let [colorArr, setColorArr] = useState([]);
  let [startValue, setStartValue] = useState(false);
  let colorIdArr = [];
  useEffect(() => {
    onChangeOfCircles(props.noOfCircles);
  }, [props.noOfCircles]);
  for (let i = 0; i < props.noOfCircles; i++) {
    element.push(i);
    let pushObj = {};
    pushObj = {
      id: "favcolor" + i,
      value: "#000000",
    };
    dupPickers.push(pushObj);
  }
  const onChangeOfCircles = (noOfCircles) => {
    for (let i = 0; i < dupPickers.length; i++) {
      document.getElementById(dupPickers[i].id).value = "#000000";
    }
    element = [];
    dupPickers = [];
    setTotalPickers((totalPickers = []));
    colorIdArr = [];
  };
  const colorChangeHandler = (event) => {
    colorIdArr.push(event.target.id);
    if (totalPickers.length === 0) {
      totalPickers = dupPickers;
    }
    let updatedList = totalPickers.map((item) => {
      if (item.id == event.target.id) {
        return { ...item, value: event.target.value };
      }
      return item;
    });
    setTotalPickers((totalPickers = updatedList));
    let cArr = [];
    for (let t = 0; t < totalPickers.length; t++) {
      cArr.push(totalPickers[t].value);
    }
    setColorArr((colorArr = cArr));
  };
  const onStartChangeHandler = () => {
    setStartValue(true);
    let setCircleColorArr = [];
      setCircleColorArr = colorArr;
    setInterval(() => {
      let shiftedValue = setCircleColorArr.shift();
      setCircleColorArr.push(shiftedValue);
      setColorArr( colorArr = setCircleColorArr );
    }, 1000);
  };
  return (
    <div className="color-picker-content">
      {element.length > 0 && <h3>Pick the colors</h3>}
      <div className="color-pickers-input">
        <ColorPickers
          element={element}
          colorChangeHandler={colorChangeHandler}
        />
      </div>
      <div className="color-pickers-input">
        <ColorPickerName totalPickers={totalPickers} />
      </div>
      <div className="start-button-div">
        <CircleButton onStart={onStartChangeHandler} />
      </div>
      {
          startValue && <Circles element={element} colorArr={colorArr} startValue={startValue} />
      }
    </div>
  );
};

export default ColorPicker;
