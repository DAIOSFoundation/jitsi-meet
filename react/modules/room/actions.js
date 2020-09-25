import {createAction} from 'redux-actions';

// Modal 메세지 SHOW / HIDDEN
export const CHANGE_MEETING_ROOM = "room/CHANGE_MEETING_ROOM";
export const change_meeting_room = createAction(CHANGE_MEETING_ROOM);
