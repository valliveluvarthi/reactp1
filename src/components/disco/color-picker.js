import React, { useState, useEffect } from "react";
import ColorPickerName from "./color-name";
import ColorPickers from "./color-pickers";
import CircleButton from "./circle-button";
import Circles from "./circles.js";
import Circle1 from "./circle1.js";
import Circle2 from "./circle1.js";
import Circle3 from "./circle1.js";
import Circle4 from "./circle1.js";
import Circle5 from "./circle1.js";
import Circle6 from "./circle1.js";
import "./color-picker.scss";

const ColorPicker = (props) => {
  let element = [];
  let dupPickers = [];
  let [totalPickers, setTotalPickers] = useState([]);
  let [colorArr, setColorArr] = useState([]);
  let [startValue, setStartValue] = useState(false);
  let [showStart, setshowStart] = useState(false);
  //states for different circle inputs
  let [inputCount1, setinputCount1] = useState("");
  let [inputCount2, setinputCount2] = useState("");
  let [inputCount3, setinputCount3] = useState("");
  let [inputCount4, setinputCount4] = useState("");
  let [inputCount5, setinputCount5] = useState("");
  let [inputCount6, setinputCount6] = useState("");
  useEffect(() => {
    onChangeOfCircles(props.noOfCircles);
  }, [props.noOfCircles]);

  //input1Count
  useEffect(() => {
    const input1timer = setInterval(() => {
      var array = localStorage.getItem("input1ColorArr");
      array = JSON.parse(array);
      if (array != null && array.length > 0 && startValue) {
        let shiftedArrValue = [];
        let index = array.indexOf(inputCount1);
        shiftedArrValue = array.splice(0, index);
        array = [...array, ...shiftedArrValue];
        localStorage.setItem("input1ColorArr", JSON.stringify(array));
        let changeValue = [...inputCount1];
        if(array.length === 1){
          changeValue = array[0];
        }else{
          changeValue = array[1];
        }
        setinputCount1((inputCount1 = changeValue));
      }
    }, 1000);
    // clearing interval
    return () => clearInterval(input1timer);
  }, [inputCount1]);

  //input2Count
  useEffect(() => {
    const input2timer = setInterval(() => {
      var array = localStorage.getItem("input2ColorArr");
      array = JSON.parse(array);
      if (array != null && array.length > 0 && startValue) {
        let shiftedArrValue = [];
        let index = array.indexOf(inputCount2);
        shiftedArrValue = array.splice(0, index);
        array = [...array, ...shiftedArrValue];
        localStorage.setItem("input2ColorArr", JSON.stringify(array));
        let changeValue = [...inputCount2];
        changeValue = array[1];
        setinputCount2((inputCount2 = changeValue));
      }
    }, 2000);
    // clearing interval
    return () => clearInterval(input2timer);
  }, [inputCount2]);

  //input3Count
  useEffect(() => {
    const input3timer = setInterval(() => {
      var array = localStorage.getItem("input3ColorArr");
      array = JSON.parse(array);
      if (array != null && array.length > 0 && startValue) {
        let shiftedArrValue = [];
        let index = array.indexOf(inputCount3);
        shiftedArrValue = array.splice(0, index);
        array = [...array, ...shiftedArrValue];
        localStorage.setItem("input3ColorArr", JSON.stringify(array));
        let changeValue = [...inputCount3];
        changeValue = array[1];
        setinputCount3((inputCount3 = changeValue));
      }
    }, 3000);
    // clearing interval
    return () => clearInterval(input3timer);
  }, [inputCount3]);

  //input4Count
  useEffect(() => {
    const input4timer = setInterval(() => {
      var array = localStorage.getItem("input4ColorArr");
      array = JSON.parse(array);
      if (array != null && array.length > 0 && startValue) {
        let shiftedArrValue = [];
        let index = array.indexOf(inputCount4);
        shiftedArrValue = array.splice(0, index);
        array = [...array, ...shiftedArrValue];
        localStorage.setItem("input4ColorArr", JSON.stringify(array));
        let changeValue = [...inputCount4];
        changeValue = array[1];
        setinputCount4((inputCount4 = changeValue));
      }
    }, 4000);
    // clearing interval
    return () => clearInterval(input4timer);
  }, [inputCount4]);

  //input5Count
  useEffect(() => {
    const input5timer = setInterval(() => {
      var array = localStorage.getItem("input5ColorArr");
      array = JSON.parse(array);
      if (array != null && array.length > 0 && startValue) {
        let shiftedArrValue = [];
        let index = array.indexOf(inputCount5);
        shiftedArrValue = array.splice(0, index);
        array = [...array, ...shiftedArrValue];
        localStorage.setItem("input5ColorArr", JSON.stringify(array));
        let changeValue = [...inputCount5];
        changeValue = array[1];
        setinputCount5((inputCount5 = changeValue));
      }
    }, 5000);
    // clearing interval
    return () => clearInterval(input5timer);
  }, [inputCount5]);

  //input6Count
  useEffect(() => {
    const input6timer = setInterval(() => {
      var array = localStorage.getItem("input6ColorArr");
      array = JSON.parse(array);
      if (array != null && array.length > 0 && startValue) {
        let shiftedArrValue = [];
        let index = array.indexOf(inputCount6);
        shiftedArrValue = array.splice(0, index);
        array = [...array, ...shiftedArrValue];
        localStorage.setItem("input6ColorArr", JSON.stringify(array));
        let changeValue = [...inputCount6];
        changeValue = array[1];
        setinputCount6((inputCount6 = changeValue));
      }
    }, 6000);
    // clearing interval
    return () => clearInterval(input6timer);
  }, [inputCount6]);

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
    element = [];
    dupPickers = [];
    setColorArr((colorArr = []));
    let emptyArr = [];
    localStorage.setItem("colorArr", JSON.stringify(colorArr));
    localStorage.setItem("input1ColorArr", JSON.stringify(emptyArr));
    localStorage.setItem("input2ColorArr", JSON.stringify(emptyArr));
    localStorage.setItem("input3ColorArr", JSON.stringify(emptyArr));
    localStorage.setItem("input4ColorArr", JSON.stringify(emptyArr));
    localStorage.setItem("input5ColorArr", JSON.stringify(emptyArr));
    localStorage.setItem("input6ColorArr", JSON.stringify(emptyArr));
    setStartValue(false);
    setTotalPickers((totalPickers = []));
    setshowStart(false);
    for (let i = 0; i < noOfCircles; i++) {
      element.push(i);
      let pushObj = {};
      pushObj = {
        id: "favcolor" + i,
        value: "#000000",
      };
      dupPickers.push(pushObj);
    }
    for (let i = 0; i < dupPickers.length; i++) {
      document.getElementById(dupPickers[i].id).value = "#000000";
    }
    setinputCount1("");
    setinputCount2("");
    setinputCount3("");
    setinputCount4("");
    setinputCount5("");
    setinputCount6("");
  };
  const colorChangeHandler = (event) => {
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
    let carray = [...colorArr];
    carray = cArr;
    setColorArr((colorArr = carray));
    setshowStart(true);
    if (showStart && startValue) {
      onStartChangeHandler();
    }
  };
  const onStartChangeHandler = () => {
    setStartValue(true);
    let cArr = [];
    for (let t = 0; t < totalPickers.length; t++) {
      cArr.push(totalPickers[t].value);
    }
    let carray = [...colorArr];
    carray = cArr;
    localStorage.setItem("colorArr", JSON.stringify(carray));
    setColorArr((colorArr = carray));
    let circleIdArr = [];
    for (let i = 0; i < props.noOfCircles; i++) {
      let id = "circles" + (i + 1);
      circleIdArr.push(id);
    }
    if (circleIdArr[0] === "circles1") {
      var array = localStorage.getItem("colorArr");
      array = JSON.parse(array);
      let changeValue = [...inputCount1];
      changeValue = array[0];
      localStorage.setItem("input1ColorArr", JSON.stringify(array));
      setinputCount1((inputCount1 = changeValue));
    }
    if (circleIdArr[1] === "circles2") {
      var array = localStorage.getItem("colorArr");
      array = JSON.parse(array);
      let changeValue = [...inputCount2];
      changeValue = array[1];
      localStorage.setItem("input2ColorArr", JSON.stringify(array));
      setinputCount2((inputCount2 = changeValue));
    }
    if (circleIdArr[2] === "circles3") {
      var array = localStorage.getItem("colorArr");
      array = JSON.parse(array);
      let changeValue = [...inputCount3];
      changeValue = array[2];
      localStorage.setItem("input3ColorArr", JSON.stringify(array));
      setinputCount3((inputCount3 = changeValue));
    }
    if (circleIdArr[3] === "circles4") {
      var array = localStorage.getItem("colorArr");
      array = JSON.parse(array);
      let changeValue = [...inputCount4];
      changeValue = array[3];
      localStorage.setItem("input4ColorArr", JSON.stringify(array));
      setinputCount4((inputCount4 = changeValue));
    }
    if (circleIdArr[4] === "circles5") {
      var array = localStorage.getItem("colorArr");
      array = JSON.parse(array);
      let changeValue = [...inputCount5];
      changeValue = array[4];
      localStorage.setItem("input5ColorArr", JSON.stringify(array));
      setinputCount5((inputCount5 = changeValue));
    }
    if (circleIdArr[5] === "circles6") {
      var array = localStorage.getItem("colorArr");
      array = JSON.parse(array);
      let changeValue = [...inputCount6];
      changeValue = array[5];
      localStorage.setItem("input6ColorArr", JSON.stringify(array));
      setinputCount6((inputCount6 = changeValue));
    }
    // setInterval(() => {
    //   var array = localStorage.getItem("colorArr");
    //   array = JSON.parse(array);
    //   let shiftedArrValue = [];
    //   shiftedArrValue = array.splice(array.length - 1, 1);
    //   array.unshift(shiftedArrValue[0]);
    //   localStorage.setItem("colorArr", JSON.stringify(array));
    //   let changeArr = [...colorArr];
    //   changeArr = array;
    //   setColorArr((colorArr = changeArr));
    // }, 1000);
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
      {showStart && (
        <div className="start-button-div">
          <CircleButton onStart={onStartChangeHandler} />
        </div>
      )}

      {/* {startValue && (
        <Circles
          element={element}
          colorArr={colorArr}
          startValue={startValue}
        />
      )} */}
      <div className="circles-content">
        {startValue && inputCount1 != "" && (
          <Circle1 colorValue={inputCount1} startValue={startValue} />
        )}
        {startValue && inputCount2 != "" && (
          <Circle2 colorValue={inputCount2} startValue={startValue} />
        )}
        {startValue && inputCount3 != "" && (
          <Circle3 colorValue={inputCount3} startValue={startValue} />
        )}
        {startValue && inputCount4 != "" && (
          <Circle4 colorValue={inputCount4} startValue={startValue} />
        )}
        {startValue && inputCount5 != "" && (
          <Circle5 colorValue={inputCount5} startValue={startValue} />
        )}
        {startValue && inputCount6 != "" && (
          <Circle6 colorValue={inputCount6} startValue={startValue} />
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
