import { all } from "redux-saga/effects";
import uploadSaga from "./upload/sagas";
import authSaga from "./auth/sagas";

export default function* rootSaga() {
    yield all([
        uploadSaga(),
        authSaga()
    ])
}
