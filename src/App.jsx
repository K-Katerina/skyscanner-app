import {SignInPage} from "./pages/sign-in-page/sign-in-page";
import {FlightPage} from "./pages/flight-page/flight-page";
import {Redirect, BrowserRouter, Switch, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {withPrivateRoute} from "./hocs/with-private-route/with-private-route";
import React from "react";

export const AppRoute = {
    LOGIN: `/login`,
    ROOT: `/`,
};

const App = () => {

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={AppRoute.ROOT} component={withPrivateRoute(FlightPage, isLoggedIn, AppRoute.LOGIN)}/>
                <Route exact path={AppRoute.LOGIN} component={withPrivateRoute(SignInPage, !isLoggedIn, AppRoute.ROOT)}/>
                <Redirect to={AppRoute.ROOT}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
