import React, { useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import FormContextProvider from "./context/formProvider";
import HomePage from "./components/disco/home-page";
import GuardedRoute from "./guarded-route";
import PublicRoute from "./public-route";
import LoginPage from "./login-page";
import "./App.scss";

function App(props) {
  const browserHistory = useHistory();
  const [isAutheticated, setisAutheticated] = useState(false);

  function login() {
    browserHistory.push("/cards");
    setisAutheticated(true);
    console.log("loggedInUser:" + isAutheticated);
  }

  function logout() {
    // this.props.history.push('/');
    setisAutheticated(false);
    console.log("loggedInUser:" + isAutheticated);
  }
  localStorage.setItem("id", 0);

  return (
    <BrowserRouter>
      <FormContextProvider className="App">
        <Switch>
          <PublicRoute
            path="/"
            component={LoginPage}
            auth={isAutheticated}
            login={login}
            logout={logout}
          />
          <GuardedRoute
            path="/cards"
            component={HomePage}
            auth={isAutheticated}
            logout={logout}
          />
        </Switch>
      </FormContextProvider>
    </BrowserRouter>
  );
}

export default App;
