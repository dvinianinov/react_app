import { put, takeLatest, all } from 'redux-saga/effects';
import { DATA_LOADED, GET_DATA } from "../constants/action-types";

function* fetchNews() {
    const json = yield fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json(), );
    yield put({ type: DATA_LOADED, json: json });
}
function* actionWatcher() {
    yield takeLatest(GET_DATA, fetchNews)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}