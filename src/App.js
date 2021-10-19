import React from "react";
import "./App.scss";
import FormContextProvider from "./context/formProvider";
import Form from "./components/form";
import {
  NavLink,
  Switch,
  BrowserRouter,
  Route,
  HashRouter,
} from "react-router-dom";
import CircleInput from "./components/disco/circle-input";
import history from "./components/disco/history";

function App(props) {
  localStorage.setItem("id", 0);

  return (
    <BrowserRouter>
      <FormContextProvider className="App">
        <div className="app-content">
          <NavLink className="nav-link" to="/cards">
            Cards
          </NavLink>
          <NavLink className="nav-link" to="/disco">
            Circles
          </NavLink>
        </div>
        <Route path="/cards" component={Form} />
        <Route path="/disco" component={CircleInput} />
      </FormContextProvider>
    </BrowserRouter>
  );
}

export default App;
