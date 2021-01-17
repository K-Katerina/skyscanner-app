import {call, put, takeLatest} from "@redux-saga/core/effects";
import {getQuotesResult} from "../../api/skyscanner-api";
import {getErrorAction, getQuotesResultAction, getQuotesResultCompletedAction} from "../actions/actions";

function* fetchQuotesResult() {
    try {
        const browseQuotesResult = yield call(getQuotesResult);
        yield put(getQuotesResultCompletedAction(browseQuotesResult))
    } catch (error) {
        yield put(getErrorAction())
    }
}

function* fetchQuotesResultSaga() {
    yield takeLatest('GET_RESULTS', fetchQuotesResult);
}

export default fetchQuotesResultSaga;
