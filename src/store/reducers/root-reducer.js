import {combineReducers} from "redux";
import {quotesResultReducer} from "./data-reducer";
import {userReducer} from "./user-reducer";

export default combineReducers({
    data: quotesResultReducer,
    user: userReducer
});
