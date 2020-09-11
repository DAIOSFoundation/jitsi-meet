import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../librarys/createRequest";
import * as AUTH from './action';
import * as authAPI from '../../librarys/api/auth';

const postGoogleLogin = createRequestSaga(
    AUTH.POST_GOOGLE_LOGIN,
    authAPI.postGoogleLogin,
);

export default function* rootSaga() {
    yield [
        yield takeLatest(AUTH.POST_GOOGLE_LOGIN, postGoogleLogin)
    ]
}

