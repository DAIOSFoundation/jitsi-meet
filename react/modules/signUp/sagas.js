import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../librarys/createRequest";
import * as SIGNUP from './actions';
import * as signUpAPI from '../../librarys/api/signUp/signUp'

const postSignUp = createRequestSaga(
  SIGNUP.POST_SIGN_UP,
  signUpAPI.postSignUp,
);

export default function* rootSaga() {
    yield [
        yield takeLatest(SIGNUP.POST_SIGN_UP, postSignUp)
    ]
}

