import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as Login from './action'

const initialState = {
    jwt: null,
    userId: null,
    email: null,
}

const auth = handleActions({
    [Login.POST_GOOGLE_LOGIN_SUCCESS]: (state, action) => {
        console.log('GOOGLE_LOGIN_SUCCESS', action.payload)
        return produce(state, (draft) => {
            draft.jwt = action.payload.data.jwt
            draft.userId = action.payload.data.userId
            draft.email = action.payload.data.email
        })
    }
},initialState)

export default auth;
