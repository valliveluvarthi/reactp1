import React from 'react';
import { Route } from "react-router-dom";
import HomePage from './components/disco/home-page';

const PublicRoute = ({ component: Component, auth, ...rest }) => {
    console.log("auth:" + auth);
    console.log("enable_login:" + localStorage.getItem("enable_login"));
    let localauth;
    if (localStorage.getItem("enable_login") === "true") {
        localauth = true;
        Component = HomePage;
    } else {
        localauth = false;
    }
    return (
        <Route {...rest} render={(props) => (
            localauth === false
                ? <Component {...props} {...rest} auth={auth} />
                : <Component {...props} {...rest} auth={auth} />
        )} />
    )
}

export default PublicRoute;