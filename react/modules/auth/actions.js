import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../librarys/createRequest';

// DVision 유저 계정 아이디
export const CHANGE_ID = 'auth/CHANGE_ID'
export const change_id = createAction(CHANGE_ID);

// DVision 유저 계정 아이디 유효성 검사
export const CHANGE_IS_VALID_ID = 'auth/CHANGE_IS_VALID_ID'
export const change_is_valid_id = createAction(CHANGE_IS_VALID_ID);

// DVision 유저 계정 비밀번호
export const CHANGE_PASSWORD = 'auth/CHANGE_PASSWORD'
export const change_password = createAction(CHANGE_PASSWORD);

// DVision 유저 계정 비밀번호 유효성 검사
export const CHANGE_IS_VALID_PASSWORD = 'auth/CHANGE_IS_VALID_PASSWORD'
export const change_is_valid_password = createAction(CHANGE_IS_VALID_PASSWORD);

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
