import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as LOGIN from './action'

const initialState = {
    userId: null,
}

const login = handleActions({
    [LOGIN.CHANGE_LOGIN_ID]: (state, action) => {
        return produce(state, (draft) => {
            draft.userId = action.payload
        })
    }
},initialState)

export default login;
