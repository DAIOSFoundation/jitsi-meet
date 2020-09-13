import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../librarys/createRequest";
import * as LOGIN from './action';
import * as authAPI from '../../librarys/api/oauth/google';

const postGoogleLogin = createRequestSaga(
    LOGIN.POST_GOOGLE_LOGIN,
    authAPI.postGoogleLogin,
);

export default function* rootSaga() {
    yield [
        yield takeLatest(LOGIN.POST_GOOGLE_LOGIN, postGoogleLogin)
    ]
}

