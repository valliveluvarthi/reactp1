import React from 'react';
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component, auth, ...rest }) => {
    console.log("auth:" + auth)
    console.log("enable_login:" + localStorage.getItem("enable_login"))
    let localauth;
    if (localStorage.getItem("enable_login") === "true") {
        localauth = true;
    } else {
        localauth = false;
    }
    return (
        <Route {...rest} render={(props) => (
            localauth === true
                ? <Component {...props} />
                : <Redirect to='/' push={true} />
        )} />
    )
}

export default GuardedRoute;