import {createAction} from 'redux-actions';

// 캘린더 스케줄 제목
export const CHANGE_TITLE = "calendar/CHANGE_TITLE";
export const change_title = createAction(CHANGE_TITLE);

// 캘린더 스케줄 제목 유효성 검사
export const CHANGE_IS_VALID_TITLE = "calendar/CHANGE_IS_VALID_TITLE";
export const change_is_valid_title = createAction(CHANGE_IS_VALID_TITLE);
