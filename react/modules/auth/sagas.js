import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../librarys/createRequest";
import * as AUTH from './actions';
import * as authAPI from '../../librarys/api/auth/auth';

const postLogin = createRequestSaga(
    AUTH.POST_LOGIN,
    authAPI.postLogin,
);

export default function* rootSaga() {
    yield [
        yield takeLatest(AUTH.POST_LOGIN, postLogin)
    ]
}

