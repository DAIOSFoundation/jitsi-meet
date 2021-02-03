import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../librarys/createRequest';

// DVision 유저 계정 이메일
export const CHANGE_EMAIL = 'auth/CHANGE_EMAIL'
export const change_email = createAction(CHANGE_EMAIL);

// DVision 유저 계정 비밀번호
export const CHANGE_PASSWORD = 'auth/CHANGE_PASSWORD'
export const change_password = createAction(CHANGE_PASSWORD);

// 로그인 실패 메시지
export const CHANGE_LOGIN_ERROR_MSG = 'auth/CHANGE_LOGIN_ERROR_MSG'
export const change_login_error_msg = createAction(CHANGE_LOGIN_ERROR_MSG);

// DVision 로그인 버튼
export const [
    POST_LOGIN,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAILED,
] = createRequestActionTypes("auth/POST_LOGIN");
export const post_login = createAction(POST_LOGIN);
