import {login as loginApi, logout as logoutApi} from "../../api/mock-authentication-api";
import {call, put, takeLatest} from "@redux-saga/core/effects";
import {loginError, loginSuccess, logoutSuccess} from "../actions/actions";

function* login(action) {
    const {username, password} = action.payload;
    try {
        yield call(loginApi, username, password);
        localStorage.setItem('isLoggedIn', 'true');
        yield put(loginSuccess());
    } catch (error) {
        yield put(loginError());
    }
}

export function* loginSaga() {
    yield takeLatest('LOGIN', login);
}

function* logout(action) {
    yield call(logoutApi);
    localStorage.removeItem('isLoggedIn');
    yield put(logoutSuccess());
}

export function* logoutSaga() {
    yield takeLatest('LOGOUT', logout);
}
