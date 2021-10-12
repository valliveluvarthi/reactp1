import React, { useState } from "react";
import FormContext from "./form-context";
const defaultFormState = {
  formvalue: {
    url: "",
    title: "",
    bulltePoints: [],
    buttonCount: 0,
  },
};

const FormContextProvider = (props) => {
  const [urlValue, setURLValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [bulletArr, setBulletArr] = useState([]);
  const [bulletCount, setBulletCount] = useState(0);
  const [buttonArr, setButtonArr] = useState([]);
  const [buttonCount, setButtonCount] = useState(0);
  const [itemArr, setItemArr] = useState([]);

  const addItem = (item) => {
    console.log("item on submit", item);
  };

  return (
    <FormContext.Provider
      value={{
        url: urlValue,
        title: titleValue,
        bulltePoints: bulletArr,
        bulletCount: bulletCount,
        buttonArr : buttonArr,
        buttonCount: buttonCount,
        addItem : addItem,
        items: itemArr,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;
