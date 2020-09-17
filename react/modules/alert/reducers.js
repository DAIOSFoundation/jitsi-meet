import {handleActions} from 'redux-actions';
import * as ALERT from './actions';
import produce, {createDraft, finishDraft} from 'immer';

const initialState = {
    isVisible: false,
    message: null,
}

const alert = handleActions({
        [ALERT.CHANGE_MODAL_MESSAGE]: (state, action) => {
            console.log('CHANGE_MODAL_MESSAGE', action.payload);
            return produce(state, (draft) => {
                draft.isVisible = true;
                draft.message = action.payload;
            });
        },
        [ALERT.CHANGE_MODAL_CLEAR]: (state, action) => {
            console.log('CHANGE_MODAL_CLEAR');
            const draft = createDraft(initialState);
            return finishDraft(draft);
        },
    }
    , initialState)

export default alert;
