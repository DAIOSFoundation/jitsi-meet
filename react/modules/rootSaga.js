import { all } from "redux-saga/effects";
import uploadSaga from "./upload/sagas";
import authSaga from "./auth/sagas";
import oauthSaga from "./oauth/sagas";
import signUpSaga from "./signUp/sagas";

export default function* rootSaga() {
    yield all([
        uploadSaga(),
        authSaga(),
        oauthSaga(),
        signUpSaga(),
    ])
}
