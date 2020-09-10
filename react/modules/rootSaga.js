import { all } from "redux-saga/effects";
import uploadSaga from "./upload/sagas";

export default function* rootSaga() {
    yield all([
        uploadSaga()
    ])
}
