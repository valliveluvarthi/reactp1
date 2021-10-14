import React from "react";
import "./App.scss";
import FormContextProvider from "./context/formProvider";
import Form from "./components/form";
function App() {
  localStorage.setItem("id",0);
  return (
    <FormContextProvider className="App">
      <Form />
    </FormContextProvider>
  );
}

export default App;
