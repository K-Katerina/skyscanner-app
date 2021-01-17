import {SignInPage} from "./pages/sign-in-page/sign-in-page";
import {FlightPage} from "./pages/flight-page/flight-page";
import {Redirect, BrowserRouter, Switch, Route} from "react-router-dom";
import {useSelector} from "react-redux";

const App = () => {

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    return (
        <>
        <SignInPage/>
        <span>123 {isLoggedIn+'k'}</span>
        </>
        // <BrowserRouter>
        //     <Switch>
        //         <Route exact path={'/'} component={FlightPage}/>
        //         <Route exact path={'/'} component={SignInPage}/>
        //         <Redirect to={'/'}/>
        //     </Switch>
        // </BrowserRouter>
    )
}

export default App;
