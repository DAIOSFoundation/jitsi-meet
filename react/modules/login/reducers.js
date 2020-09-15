import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as LOGIN from './action'

const initialState = {
    jwt: null,
    userId: null,
    email: null,
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
