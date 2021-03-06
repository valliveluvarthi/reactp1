import React, { useState, useContext, useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormContext from "../context/form-context";
import Preview from "./preview";
import useInput from "../context/use-input";
import TableView from "./tableview";
import "./form.scss";


toast.configure();
const isNotEmpty = (value) => value.trim() !== "";

const Form = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showBulletErr, setBulletErr] = useState(false);
  let [keys, setKeys] = useState([]);
  let [rowDetails, setRowDetails] = useState({});

  //fetching initial data
  const fetchFormHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch("http://localhost:3001/form");
      // if (!response.ok) {
      //   throw new Error("Something went wrong!");
      // }
      // const loadedFormData = [];
      // const data = await response.json();
      // for (const key in data) {
      //   loadedFormData.push({
      //     id: data[key].id,
      //     url: data[key].url,
      //     title: data[key].title,
      //     bulletPoints: data[key].bulletPoints,
      //     button: data[key].button,
      //   });
      // }
      const loadedFormData = [];
      let postDataArr = [];
      let localFormArr = localStorage.getItem("formDataArr");
      if (localFormArr !== null && localFormArr !== "") {
        postDataArr = JSON.parse(localFormArr);
      }
      for (const key in postDataArr) {
        loadedFormData.push({
          id: postDataArr[key].id,
          url: postDataArr[key].url,
          title: postDataArr[key].title,
          bulletPoints: postDataArr[key].bulletPoints,
          button: postDataArr[key].button,
        });
      }
      setKeys(loadedFormData);
      localStorage.setItem("id", loadedFormData[loadedFormData.length - 1].id);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchFormHandler();
  }, [fetchFormHandler]);

  useEffect(() => {
    onClickOfTableRow(rowDetails);
  }, [rowDetails]);

  let {
    value: urlValue,
    isValid: urlIsValid,
    hasError: urlHasError,
    valueChangeHandler: urlChangeHandler,
    inputBlurHandler: urlBlurHandler,
    reset: resetURL,
  } = useInput(isNotEmpty);

  let {
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
  let [arr, setArr] = useState(BulletArr);

  const ButtonArr = [
    {
      type: "Button",
      id: 1,
    },
  ];
  let [btnarr, setBtnArr] = useState(ButtonArr);
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

  async function submitHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    if (Object.keys(rowDetails).length > 0) {
      const postObject = {
        id: rowDetails.id,
        url: formCtx.url,
        title: formCtx.title,
        bulletPoints: formCtx.bulltePoints,
        button: formCtx.button,
      };
      let postDataArr = [];
      let localFormArr = localStorage.getItem("formDataArr");
      if (localFormArr !== null && localFormArr !== "") {
        postDataArr = JSON.parse(localFormArr);
      }
      let index = postDataArr.findIndex(p => p.id === postObject.id);
      postDataArr.splice(index,1)

      postDataArr.push(postObject);
      localStorage.setItem("formDataArr", JSON.stringify(postDataArr));

      // let url = `http://localhost:3001/form/${rowDetails.id}`;
      // const response = await fetch(url, {
      //   method: "PUT",
      //   body: JSON.stringify(postObject),
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json; charset=UTF-8",
      //   },
      // }).catch((err) => {
      //   throw new Error(err);
      // });
      toast.success("Form updated successfully!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setRowDetails({});
      try {
        // const response = await fetch("http://localhost:3001/form");
        // if (!response.ok) {
        //   throw new Error("Something went wrong!");
        // }
        // const fetcheddata = await response.json();
        // for (const key in fetcheddata) {
        //   loadedFormData.push({
        //     id: key,
        //     url: fetcheddata[key].url,
        //     title: fetcheddata[key].title,
        //     bulletPoints: fetcheddata[key].bulletPoints,
        //     button: fetcheddata[key].button,
        //   });
        // }
        const loadedFormData = [];
        let localFormArr = localStorage.getItem("formDataArr");
        if (localFormArr !== null && localFormArr !== "") {
          postDataArr = JSON.parse(localFormArr);
        }
        for (const key in postDataArr) {
          loadedFormData.push({
            id: postDataArr[key].id,
            url: postDataArr[key].url,
            title: postDataArr[key].title,
            bulletPoints: postDataArr[key].bulletPoints,
            button: postDataArr[key].button,
          });
        }
        setKeys(loadedFormData);
      } catch (err) {
        console.log(err);
      }
      formCtx.url = "";
      formCtx.title = "";
      formCtx.bulltePoints = [];
      formCtx.button = [];
    } else {
      let id = localStorage.getItem("id");
      id = parseInt(id) + 1;
      localStorage.setItem("id", id);
      const postObject = {
        id: id,
        url: formCtx.url,
        title: formCtx.title,
        bulletPoints: formCtx.bulltePoints,
        button: formCtx.button,
      };
      let postDataArr = [];
      let localFormArr = localStorage.getItem("formDataArr");
      if (localFormArr !== null && localFormArr !== "") {
        postDataArr = JSON.parse(localFormArr);
      }
      postDataArr.push(postObject);
      localStorage.setItem("formDataArr", JSON.stringify(postDataArr));
      // const response = await fetch("http://localhost:3001/form", {
      //   method: "POST",
      //   body: JSON.stringify(postObject),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      toast.success("Form submitted successfully!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      try {
        // const response = await fetch("http://localhost:3001/form");
        // if (!response.ok) {
        //   throw new Error("Something went wrong!");
        // }

        // const fetcheddata = await response.json();
        // for (const key in fetcheddata) {
        //   loadedFormData.push({
        //     id: fetcheddata[key].id,
        //     url: fetcheddata[key].url,
        //     title: fetcheddata[key].title,
        //     bulletPoints: fetcheddata[key].bulletPoints,
        //     button: fetcheddata[key].button,
        //   });
        // }
        const loadedFormData = [];
        let localFormArr = localStorage.getItem("formDataArr");
        if (localFormArr !== null  && localFormArr !== "") {
          postDataArr = JSON.parse(localFormArr);
        }

        for (const key in postDataArr) {
          loadedFormData.push({
            id: postDataArr[key].id,
            url: postDataArr[key].url,
            title: postDataArr[key].title,
            bulletPoints: postDataArr[key].bulletPoints,
            button: postDataArr[key].button,
          });
        }
        setKeys(loadedFormData);
      } catch (err) {
        console.log(err);
      }
      formCtx.url = "";
      formCtx.title = "";
      formCtx.bulltePoints = [];
      formCtx.button = [];
    }
    resetURL();
    resetTitle();
    setArr(BulletArr);
    setBtnArr(ButtonArr);
  }

  const urlClasses = urlHasError ? "form-control invalid" : "form-control";
  const titleClasses = titleHasError ? "form-control invalid" : "form-control";
  const bulletClasses = "list";
  const buttonClasses = "btn-list";

  const onClickOfTableRow = (rowDetails) => {
    if (Object.keys(rowDetails).length > 0) {
      setRowDetails(rowDetails);
      urlChangeHandler(rowDetails.url);
      formCtx.url = rowDetails.url;
      titleChangeHandler(rowDetails.title);
      formCtx.title = rowDetails.title;
      formCtx.bulltePoints = rowDetails.bulletPoints;
      setArr(formCtx.bulltePoints);
      setBtnArr(rowDetails.button);
      formCtx.button = rowDetails.button;
    }
  };

  return (
    <React.Fragment>
      <div className="from-preview-look">
        <form onSubmit={submitHandler} className="form">
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
                maxLength="15"
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
                          maxLength="20"
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
            <button disabled={!formIsValid}>Submit</button>
          </div>
        </form>
        <Preview formValue={formCtx} />
      </div>
      {keys.length > 0 && (
        <TableView onClickOfTableRow={onClickOfTableRow} keys={keys} />
      )}
    </React.Fragment>
  );
};

export default Form;
