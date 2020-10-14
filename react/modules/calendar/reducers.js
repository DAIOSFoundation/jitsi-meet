import {handleActions} from 'redux-actions';
import produce, {createDraft, finishDraft} from 'immer';
import * as CALENDAR from './actions';

const initialState = {
    title: '', // 캘린더 스케줄 제목
    isValidTitle: false, // 캘린더 스케줄 제목 유효성 검사
}

const calendar = handleActions({
    [CALENDAR.CHANGE_TITLE]: (state, action) => {
        console.log('CHANGE_TITLE:', action.payload);
        return produce(state, (draft) => {
            draft.title = action.payload;
        });
    },
    [CALENDAR.CHANGE_IS_VALID_TITLE]: (state, action) => {
        console.log('CHANGE_IS_VALID_TITLE', action.payload);
        return produce(state, (draft) => {
            draft.isValidTitle = action.payload;
        });
    },
}, initialState)

export default calendar
