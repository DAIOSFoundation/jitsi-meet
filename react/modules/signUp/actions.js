import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../librarys/createRequest';

// DVision 회원가입 이메일
export const CHANGE_EMAIL = "sign_up/CHANGE_EMAIL"
export const change_email = createAction(CHANGE_EMAIL);

// DVision 회원가입 이메일 유효성 검사
export const CHANGE_IS_VALID_EMAIL = "sign_up/CHANGE_IS_VALID_EMAIL"
export const change_is_valid_email = createAction(CHANGE_IS_VALID_EMAIL);

// DVision 회원가입 닉네임
export const CHANGE_NICKNAME = "sign_up/CHANGE_NICKNAME"
export const change_nickName = createAction(CHANGE_NICKNAME);

// DVision 회원가입 유효성 검사
export const CHANGE_IS_VALID_NICKNAME = "sign_up/CHANGE_IS_VALID_NICKNAME"
export const change_is_valid_nickName = createAction(CHANGE_IS_VALID_NICKNAME);

// DVision 비밀번호
export const CHANGE_PASSWORD = "sign_up/CHANGE_PASSWORD"
export const change_password = createAction(CHANGE_PASSWORD);

// DVision 비밀번호 유효성 검사
export const CHANGE_IS_VALID_PASSWORD = "sign_up/CHANGE_IS_VALID_PASSWORD"
export const change_is_valid_password = createAction(CHANGE_IS_VALID_PASSWORD);

// DVision 비밀번호 확인
export const CHANGE_PASSWORD_VERIFY = 'sign_up/CHANGE_PASSWORD_VERIFY'
export const change_password_verify = createAction(CHANGE_PASSWORD_VERIFY)

// DVision 회원가입 등록
export const [
    POST_SIGN_UP,
    POST_SIGN_UP_SUCCESS,
    POST_SIGN_UP_FAILED,
] = createRequestActionTypes("sign_up/POST_SIGN_UP");
export const post_sign_up = createAction(POST_SIGN_UP);

// DVision 회원가입 응답에 따른 메시지
export const CHANGE_SIGN_UP_MSG = "sign_up/CHANGE_SIGN_UP_MSG"
export const change_sign_up_msg = createAction(CHANGE_SIGN_UP_MSG)

// DVision 회원가입 상태 정보 초기화
export const CHANGE_SIGN_UP_CLEAR = "sign_up/CHANGE_SIGN_UP_CLEAR"
export const change_sign_up_clear = createAction(CHANGE_SIGN_UP_CLEAR)
