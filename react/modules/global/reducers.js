import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as GLOBAL from './actions'

const initialState = {
    streamStatus: false
}

const global = handleActions({
    [GLOBAL.CHANGE_STREAM_STATUS]: (state, action) => {
        console.log('CHANGE_STREAM_STATUS', action.payload)
        return produce(state, (draft) => {
            draft.streamStatus = action.payload
        })
    }
}, initialState)

export default global
