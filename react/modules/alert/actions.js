import {createAction} from 'redux-actions';

// Alert 메세지 SHOW / HIDDEN
export const CHANGE_MODAL_VISIBLE = "global/CHANGE_MODAL_VISIBLE";
export const change_modal_visible = createAction(CHANGE_MODAL_VISIBLE);

// Alert 메세지 변경
export const CHANGE_MODAL_MESSAGE = "global/CHANGE_MODAL_MESSAGE";
export const change_modal_message = createAction(CHANGE_MODAL_MESSAGE);

// Alert 메세지 초기화
export const CHANGE_MODAL_CLEAR = "global/CHANGE_MODAL_CLEAR";
export const change_modal_clear = createAction(CHANGE_MODAL_CLEAR);
