import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../librarys/createRequest";
import * as LOGIN from './actions';
import * as oauthAPI from '../../librarys/api/oauth/google';
import * as usersAPI from '../../librarys/api/users/users';

const postGoogleLogin = createRequestSaga(
    LOGIN.POST_GOOGLE_LOGIN,
    oauthAPI.postGoogleLogin,
);

const postLogin = createRequestSaga(
    LOGIN.POST_LOGIN,
    usersAPI.postLogin,
);

export default function* rootSaga() {
    yield [
        yield takeLatest(LOGIN.POST_GOOGLE_LOGIN, postGoogleLogin),
        yield takeLatest(LOGIN.POST_LOGIN, postLogin)
    ]
}

