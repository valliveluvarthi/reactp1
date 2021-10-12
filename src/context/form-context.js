import React from "react";

const FormContext = React.createContext({
  url: "",
  title: "",
  bulltePoints: [],
  bulletCount : 0,
  button: [],
  buttonCount: 0,
  addItem: (item) => {},
  items: [],
});

export default FormContext;
