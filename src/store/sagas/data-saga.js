import {call, put, takeLatest} from "@redux-saga/core/effects";
import {getQuotesResult} from "../../api/skyscanner-api";
import {getErrorAction, getQuotesResultCompletedAction} from "../actions/actions";

function* fetchQuotesResult(action) {
    try {
        const browseQuotesResult = yield call(getQuotesResult, action.payload);
        yield put(getQuotesResultCompletedAction(browseQuotesResult))
    } catch (error) {
        yield put(getErrorAction())
    }
}

export function* fetchQuotesResultSaga() {
    yield takeLatest('UPDATE_RESULTS', fetchQuotesResult);
}
