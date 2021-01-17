import React from "react";
import {Redirect} from "react-router-dom";

export const withPrivateRoute = (Component, isLoggedIn, URL = `/`) => (props) => {
    if (isLoggedIn) {
        return <Component {...props}/>;
    } else {
        return <Redirect to={URL}/>;
    }
};
