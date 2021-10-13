import React, { useContext } from "react";
import "./App.scss";
import FormContextProvider from "./context/formProvider";
import Form from "./components/form";
import TableView from './components/tableview';
function App() {
  return (
    <FormContextProvider className="App">
      <Form />
      <TableView/>
    </FormContextProvider>
  );
}

export default App;
