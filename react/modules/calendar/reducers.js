import {handleActions} from 'redux-actions';
import produce, {createDraft, finishDraft} from 'immer';
import * as CALENDAR from './actions';

const initialState = {
    title: '', // 스케줄 제목
    isValidTitle: true, // 스케줄 제목 유효성 검사
    modalVisible: false, // 모달 창 SHOW / HIDDEN
    startDate: new Date(), // 스케줄 시작 날짜
    endDate: new Date(), // 스케줄 마지막 날짜
    startTime: new Date(), // 스케줄 시작 시간
    endTime: new Date(), // 스케줄 마지막 시간
    description: '', // 스케줄 설명
    meetingRoomName: '', // 스케줄 회의방 이름
    selectMotion: null, // 선택 or 드래그 이벤트 동작 분기 처리
    attendees: [], // 스케줄 참석자들
    isValidAttendee: true, // 스케줄 참석자 유효성 검사
}

const calendar = handleActions({
    [CALENDAR.CHANGE_MODAL_VISIBLE]: (state, action) => {
        console.log('CHANGE_MODAL_VISIBLE', action.payload);
        return produce(state, (draft) => {
            if (action.payload) {
                draft.modalVisible = action.payload;
            } else {
                draft.modalVisible = action.payload;
                draft.attendees = [];
                draft.title = '';
                draft.isValidTitle = true;
                draft.isValidAttendee = true;
            }
        });
    },
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
    [CALENDAR.CHANGE_START_DATE]: (state, action) => {
        console.log('CHANGE_START_DATE', action.payload);
        return produce(state, (draft) => {
            draft.startDate = action.payload;
        });
    },
    [CALENDAR.CHANGE_END_DATE]: (state, action) => {
        console.log('CHANGE_END_DATE', action.payload);
        return produce(state, (draft) => {
            draft.endDate = action.payload;
        });
    },
    [CALENDAR.CHANGE_START_TIME]: (state, action) => {
        console.log('CHANGE_START_TIME', action.payload);
        return produce(state, (draft) => {
            draft.startTime = action.payload;
        });
    },
    [CALENDAR.CHANGE_END_TIME]: (state, action) => {
        console.log('CHANGE_END_TIME', action.payload);
        return produce(state, (draft) => {
            draft.endTime = action.payload;
        });
    },
    [CALENDAR.CHANGE_DESCRIPTION]: (state, action) => {
        console.log('CHANGE_DESCRIPTION', action.payload);
        return produce(state, (draft) => {
            draft.description = action.payload;
        });
    },
    [CALENDAR.CHANGE_MEETING_ROOM_NAME]: (state, action) => {
        console.log('CHANGE_MEETING_ROOM_NAME', action.payload);
        return produce(state, (draft) => {
            draft.meetingRoomName = action.payload;
        });
    },
    [CALENDAR.CHANGE_SELECT_MOTION]: (state, action) => {
        console.log('CHANGE_SELECT_MOTION', action.payload);
        return produce(state, (draft) => {
            draft.selectMotion = action.payload;
        });
    },
    [CALENDAR.CHANGE_ATTENDEE]: (state, action) => {
        console.log('CHANGE_ATTENDEE ', action.payload);
        return produce(state, (draft) => {
            draft.attendees.push(action.payload);
        });
    },
    [CALENDAR.CHANGE_IS_VALID_ATTENDEE]: (state, action) => {
        console.log('CHANGE_IS_VALID_ATTENDEE', action.payload);
        return produce(state, (draft) => {
            draft.isValidAttendee = action.payload;
        });
    },
}, initialState)

export default calendar
