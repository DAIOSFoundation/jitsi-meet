import { all } from "redux-saga/effects";
import uploadSaga from "./upload/sagas";
import loginSaga from "./login/sagas";

export default function* rootSaga() {
    yield all([
        uploadSaga(),
        loginSaga()
    ])
}
