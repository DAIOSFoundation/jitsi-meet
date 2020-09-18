import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as LOGIN from './actions'

const initialState = {
    jwt: null, // 로그인 성공 시 서버에서 반환하는 JWT 토큰
    userId: null, //  로그인 성공 시 서버에서 반환하는 User ID
    email: null, // 로그인 성공 시 서버에서 반환하는 Email
}

const auth = handleActions({
    [LOGIN.POST_GOOGLE_LOGIN_SUCCESS]: (state, action) => {
        console.log('GOOGLE_LOGIN_SUCCESS', action.payload)
        return produce(state, (draft) => {
            draft.jwt = action.payload.data.jwt
            draft.userId = action.payload.data.userId
            draft.email = action.payload.data.email
        })
    },
    [LOGIN.POST_GOOGLE_LOGIN_FAILED]: (state, action) => {
        console.log('POST_GOOGLE_LOGIN_FAILED', action.payload)
        return produce(state, (draft) => {
        })
    }
},initialState)

export default auth;
