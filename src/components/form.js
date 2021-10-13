import useInput from "../context/use-input";
import React, { useState, useContext } from "react";
import FormContext from "../context/form-context";
import Preview from "./preview";
import "./form.scss";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const isNotEmpty = (value) => value.trim() !== "";

const Form = (props) => {
  const [showBulletErr, setBulletErr] = useState(false);
  const {
    value: urlValue,
    isValid: urlIsValid,
    hasError: urlHasError,
    valueChangeHandler: urlChangeHandler,
    inputBlurHandler: urlBlurHandler,
    reset: resetURL,
  } = useInput(isNotEmpty);

  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput(isNotEmpty);

  const formCtx = useContext(FormContext);

  const BulletArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];
  const [arr, setArr] = useState(BulletArr);

  const ButtonArr = [
    {
      type: "Button",
      id: 1,
    },
  ];
  const [btnarr, setBtnArr] = useState(ButtonArr);
  formCtx.button = btnarr;
  //actions related to input
  const addInput = () => {
    if (arr[arr.length - 1].value === "") {
      setBulletErr(true);
    } else {
      setBulletErr(false);
      setArr((s) => {
        return [
          ...s,
          {
            type: "text",
            value: "",
            id: s[s.length - 1].id + 1,
          },
        ];
      });
    }
  };
  const deleteInput = (i) => {
    if (arr.length > 1) {
      const list = [...arr];
      list.splice(i, 1);
      formCtx.bulltePoints = list;
      setArr(list);
    } else {
      return;
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    const index = e.target.id;
    setBulletErr(false);
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      formCtx.bulltePoints = newArr;
      return newArr;
    });
  };

  //actions related to buttons
  const addButtons = () => {
    const btnList = [
      ...btnarr,
      { type: "Button", id: btnarr[btnarr.length - 1].id + 1 },
    ];
    formCtx.button = btnList;
    setBtnArr((s) => {
      return [
        ...s,
        {
          type: "Button",
          id: s[s.length - 1].id + 1,
        },
      ];
    });
  };
  const deleteButtons = (i) => {
    if (btnarr.length > 1) {
      const btnlist = [...btnarr];
      btnlist.splice(i, 1);
      formCtx.button = btnlist;
      setBtnArr(btnlist);
    } else {
      return;
    }
  };

  let formIsValid = false;

  if (urlIsValid && titleIsValid) {
    formIsValid = true;
  }

  async function submitHandler(event){
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const postObject = {
      url : formCtx.url,
      title : formCtx.title,
      bulletPoints : formCtx.bulltePoints,
      button : formCtx.button
    }
    const response = await fetch('https://react-course-3478b-default-rtdb.firebaseio.com/form.json', {
      method: 'POST',
      body: JSON.stringify(postObject),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    if(data && data.name){
      toast.success("Form submitted successfully!", { position: toast.POSITION.BOTTOM_CENTER })
    }
    resetURL();
    resetTitle();
    setArr(BulletArr);
    setBtnArr(ButtonArr);
  };

  const urlClasses = urlHasError ? "form-control invalid" : "form-control";
  const titleClasses = titleHasError ? "form-control invalid" : "form-control";
  const bulletClasses = "list";
  const buttonClasses = "btn-list";

  return (
    <div className="from-preview-look">
      <form onSubmit={submitHandler}>
        <div className="control-group">
          <div className="form-header">
            <h2>Form</h2>
          </div>
          <div className={urlClasses}>
            <label htmlFor="url">URL</label>
            <input
              type="text"
              id="url"
              value={urlValue}
              onChange={urlChangeHandler}
              onBlur={urlBlurHandler}
            />
            {urlHasError && <p className="error-text">Please enter a URL.</p>}
          </div>
          <div className={titleClasses}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={titleValue}
              onChange={titleChangeHandler}
              onBlur={titleBlurHandler}
            />
            {titleHasError && (
              <p className="error-text">Please enter a Title.</p>
            )}
          </div>
          <div>
            {arr &&
              arr.length > 0 &&
              arr.map((item, i) => {
                return (
                  <ul key={i} className={bulletClasses}>
                    <li>
                      <input
                        onChange={handleChange}
                        value={item.value}
                        id={i}
                        type={item.type}
                        size="40"
                      />
                      {arr.length === 1 && (
                        <button
                          disabled={true}
                          className="bulleted-button"
                          onClick={() => deleteInput(i)}
                        >
                          -
                        </button>
                      )}
                      {arr.length > 1 && (
                        <button
                          className="bulleted-button"
                          onClick={() => deleteInput(i)}
                        >
                          -
                        </button>
                      )}
                      {arr.length - 1 === i && (
                        <button
                          disabled={item.value === ""}
                          className="bulleted-button"
                          onClick={addInput}
                        >
                          Add Bullets
                        </button>
                      )}
                    </li>
                  </ul>
                );
              })}
            {showBulletErr && (
              <p className="error-text bullet-error-text">
                Please enter a value.
              </p>
            )}
          </div>
          <div>
            {btnarr &&
              btnarr.length > 0 &&
              btnarr.map((item, i) => {
                return (
                  <ul key={i} className={buttonClasses}>
                    <li>
                      <button>{item.type + " " + `${i + 1}`}</button>
                      {btnarr.length === 1 && (
                        <button
                          disabled={true}
                          className="bulleted-button"
                          onClick={() => deleteButtons(i)}
                        >
                          -
                        </button>
                      )}
                      {btnarr.length > 1 && (
                        <button
                          className="bulleted-button"
                          onClick={() => deleteButtons(i)}
                        >
                          -
                        </button>
                      )}
                      {btnarr.length - 1 === i && (
                        <button
                          disabled={!formIsValid}
                          className="bulleted-button"
                          onClick={addButtons}
                        >
                          Add Buttons
                        </button>
                      )}
                    </li>
                  </ul>
                );
              })}
          </div>
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>
            Submit
          </button>
        </div>
      </form>
      <Preview formValue={formCtx} />
    </div>
  );
};

export default Form;
