import React, { useContext } from "react";
import "./App.scss";
import FormContextProvider from "./context/formProvider";
import Form from "./components/form";
import Preview from "./components/preview";
function App() {
  return (
    <FormContextProvider className="App">
      <Form />
    </FormContextProvider>
  );
}

export default App;
