import {handleActions} from 'redux-actions';
import * as ROOM from './actions';
import produce, {createDraft, finishDraft} from 'immer';

const initialState = {
    room: null, // 회의방 이름
}

const room = handleActions({
    [ROOM.CHANGE_MEETING_ROOM]: (state, action) => {
        console.log('CHANGE_MEETING_ROOM', action.payload);
        return produce(state, (draft) => {
            draft.room = action.payload;
        })
    }
}, initialState)

export default room;
