import {createAction} from 'redux-actions';

// 회의방 이름 변경
export const CHANGE_MEETING_ROOM = "room/CHANGE_MEETING_ROOM";
export const change_meeting_room = createAction(CHANGE_MEETING_ROOM);
