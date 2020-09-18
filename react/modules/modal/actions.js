import {createAction} from 'redux-actions';

// Modal 메세지 SHOW / HIDDEN
export const CHANGE_MODAL_VISIBLE = "modal/CHANGE_MODAL_VISIBLE";
export const change_modal_visible = createAction(CHANGE_MODAL_VISIBLE);

// Modal 메세지 변경
export const CHANGE_MODAL_MESSAGE = "modal/CHANGE_MODAL_MESSAGE";
export const change_modal_message = createAction(CHANGE_MODAL_MESSAGE);

// Modal 확인 버튼 기능
export const CHANGE_MODAL_ONPRESS_OK = "modal/CHANGE_MODAL_ONPRESS_OK;"
export const change_modal_onpress_ok = createAction(CHANGE_MODAL_ONPRESS_OK);

// Modal 리덕스 변수 초기화
export const CHANGE_MODAL_CLEAR = "modal/CHANGE_MODAL_CLEAR";
export const change_modal_clear = createAction(CHANGE_MODAL_CLEAR);
