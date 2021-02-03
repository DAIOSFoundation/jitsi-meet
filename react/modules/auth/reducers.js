import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as AUTH from './actions'

const initialState = {
    jwt: null, // 로그인 성공 시 서버에서 반환하는 JWT 토큰
    userId: null, //  로그인 성공 시 서버에서 반환하는 User ID
    email: '', // DVision 계정 이메일
    password: '', // DVision 계정 비밀번호
    loginErrorMsg: null, // 로그인 실패시 메시지 정보 저장
}

const auth = handleActions({
    [AUTH.CHANGE_EMAIL]: (state, action) => {
        console.log('CHANGE_EMAIL', action.payload)
        return produce(state, (draft) => {
            draft.email = action.payload
        })
    },
    [AUTH.CHANGE_PASSWORD]: (state, action) => {
        console.log('CHANGE_PASSWORD', action.payload)
        return produce(state, (draft) => {
            draft.password = action.payload
        })
    },
    [AUTH.CHANGE_LOGIN_ERROR_MSG]: (state, action) => {
        console.log('CHANGE_LOGIN_ERROR_MSG', action.payload)
        return produce(state, (draft) => {
            draft.loginErrorMsg = action.payload
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
            draft.loginErrorMsg = action.payload;
        })
    },
}, initialState)

export default auth;
