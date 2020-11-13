import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../librarys/createRequest";
import * as OAUTH from './actions';
import * as oauthAPI from '../../librarys/api/oauth/google';

const postGoogleLogin = createRequestSaga(
    OAUTH.POST_GOOGLE_LOGIN,
    oauthAPI.postGoogleLogin,
);

export default function* rootSaga() {
    yield [
        yield takeLatest(OAUTH.POST_GOOGLE_LOGIN, postGoogleLogin)
    ]
}

