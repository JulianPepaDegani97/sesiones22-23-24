import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../actions/actions';


export function* watcherSaga() {
    yield takeLatest(API_CALL_REQUEST, workerSaga);
}

export function* workerSaga(action) {
    try {
        const response =  yield call(fetchHttp(action.payload.request))
        const token = response.data.token;
        yield put({
            type: action.payload.okAction,
            payload: {
                token
            }
        })
    }
    catch(error) {
        yield put({
            type: action.payload.failedAction,
            payload: {
                error
            }
        })
    }
}

const fetchHttp = (request) => {{
    return () => {
        return(axios(request))
    }
}}