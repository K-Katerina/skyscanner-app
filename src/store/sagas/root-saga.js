import {all} from "@redux-saga/core/effects";
import {fetchQuotesResultSaga} from "./data-saga";
import {loginSaga, logoutSaga} from "./user-saga";

export default function* rootSaga() {
    yield all([
        fetchQuotesResultSaga(),
        loginSaga(),
        logoutSaga()
    ])
}
