import {createAction} from 'redux-actions';

// Youtube 라이브 성공 / 실패 여부
export const CHANGE_STREAM_STATUS = 'youtube/CHANGE_STREAM_STATUS'
export const change_stream_status = createAction(CHANGE_STREAM_STATUS);
