import {handleActions} from 'redux-actions';
import * as MODAL from './actions';
import produce, {createDraft, finishDraft} from 'immer';

const initialState = {
    isVisible: false, // 메세지 SHOW / HIDDEN
    message: null, // 메세지 내용
    onPressOK: null // 모달 확인 버튼 기능
}

const modal = handleActions({
        [MODAL.CHANGE_MODAL_MESSAGE]: (state, action) => {
            console.log('CHANGE_MODAL_MESSAGE', action.payload);
            return produce(state, (draft) => {
                draft.isVisible = true;
                draft.message = action.payload;
            });
        },
        [MODAL.CHANGE_MODAL_ONPRESS_OK]: (state, action) => {
            console.log('CHANGE_MODAL_ONPRESS_OK', action.payload);
            return produce(state, (draft) => {
                draft.onPressOK = action.payload;
            });
        },
        [MODAL.CHANGE_MODAL_CLEAR]: (state, action) => {
            console.log('CHANGE_MODAL_CLEAR');
            const draft = createDraft(initialState);
            return finishDraft(draft);
        },
    }
    , initialState)

export default modal;
