import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as AUTH from './actions'

const initialState = {
    jwt: null, // 로그인 성공 시 서버에서 반환하는 JWT 토큰
    userId: null, //  로그인 성공 시 서버에서 반환하는 User ID
    email: null, // 로그인 성공 시 서버에서 반환하는 Email
    id: '', // DVision 계정 아이디
    isValidId: true, // DVision 계정 아이디 유효성 검사
    password: '', // DVision 계정 비밀번호
    isValidPassword: true, // DVision 계정 비밀번호 유효성 검사
}

const auth = handleActions({
    [AUTH.CHANGE_ID]: (state, action) => {
        console.log('CHANGE_ID', action.payload)
        return produce(state, (draft) => {
            draft.id = action.payload
        })
    },
    [AUTH.CHANGE_IS_VALID_ID]: (state, action) => {
        console.log('CHANGE_IS_VALID_ID', action.payload)
        return produce(state, (draft) => {
            draft.isValidId = action.payload
        })
    },
    [AUTH.CHANGE_PASSWORD]: (state, action) => {
        console.log('CHANGE_PASSWORD', action.payload)
        return produce(state, (draft) => {
            draft.password = action.payload
        })
    },
    [AUTH.CHANGE_IS_VALID_PASSWORD]: (state, action) => {
        console.log('CHANGE_IS_VALID_PASSWORD', action.payload)
        return produce(state, (draft) => {
            draft.isValidPassword = action.payload
        })
    },
    [AUTH.POST_LOGIN_SUCCESS]: (state, action) => {
        console.log('POST_LOGIN_SUCCESS', action.payload)
        return produce(state, (draft) => {
            draft.jwt = action.payload.data.jwt
        })
    },
    [AUTH.POST_LOGIN_FAILED]: (state, action) => {
        console.log('POST_LOGIN_FAILED', action.payload)
        return produce(state, (draft) => {
        })
    },
}, initialState)

export default auth;
