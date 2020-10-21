import {handleActions} from 'redux-actions';
import produce, {createDraft, finishDraft} from 'immer';
import * as CALENDAR from './actions';

const initialState = {
    title: '', // 스케줄 제목
    isValidTitle: true, // 스케줄 제목 유효성 검사
    modalVisible: false, // 타입에 따른 캘린더 모달 창 분기처리 (상세보기 or 등록)
    startDate: new Date(), // 스케줄 시작 날짜
    endDate: new Date(), // 스케줄 마지막 날짜
    startTime: new Date(), // 스케줄 시작 시간
    endTime: new Date(), // 스케줄 마지막 시간
    description: '', // 스케줄 설명
    meetingRoomName: '', // 스케줄 회의방 이름
    isValidMeetingRoomName: true, // 스케줄 회의방 이름 유효성 검사
    selectMotion: null, // 선택 or 드래그 이벤트 동작 분기 처리
    attendees: [], // 스케줄 참석자들
    isValidAttendee: true, // 스케줄 참석자 유효성 검사
    loadingStatus: false, // 스케줄 로딩바 상태
    calendarMsg: '', //  응답에 따른 캘린더 메세지
    scheduleInfo: null, // 특정 캘린더 일정 정보 가져오기
}

const calendar = handleActions({
    [CALENDAR.CHANGE_MODAL_VISIBLE]: (state, action) => {
        console.log('CHANGE_MODAL_VISIBLE', action.payload);
        return produce(state, (draft) => {
            if (action.payload === 'detailView' || action.payload === 'insert') {
                draft.modalVisible = action.payload;
            } else {
                draft.modalVisible = action.payload;
                draft.attendees = [];
                draft.title = '';
                draft.isValidTitle = true;
                draft.isValidAttendee = true;
                draft.isValidMeetingRoomName = true;
                draft.meetingRoomName = '';
                draft.description = '';
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
    [CALENDAR.CHANGE_IS_VALID_MEETING_ROOM_NAME]: (state, action) => {
        console.log('CHANGE_IS_VALID_MEETING_ROOM_NAME', action.payload);
        return produce(state, (draft) => {
            draft.isValidMeetingRoomName = action.payload;
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
    [CALENDAR.REMOVE_ATTENDEE]: (state, action) => {
        console.log('REMOVE_ATTENDEE ', action.payload);
        return produce(state, (draft) => {
            draft.attendees.splice(action.payload, 1)
        });
    },
    [CALENDAR.CHANGE_IS_VALID_ATTENDEE]: (state, action) => {
        console.log('CHANGE_IS_VALID_ATTENDEE', action.payload);
        return produce(state, (draft) => {
            draft.isValidAttendee = action.payload;
        });
    },
    [CALENDAR.CHANGE_CALENDAR_LOADING_STATUS]: (state, action) => {
        console.log('CHANGE_CALENDAR_LOADING_STATUS', action.payload);
        return produce(state, (draft) => {
            draft.loadingStatus = action.payload;
        });
    },
    [CALENDAR.CHANGE_CALENDAR_MESSAGE]: (state, action) => {
        console.log('CHANGE_CALENDAR_MESSAGE', action.payload);
        return produce(state, (draft) => {
            draft.calendarMsg = action.payload;
        })
    },
    [CALENDAR.CHANGE_CALENDAR_SCHEDULE_INFO]: (state, action) => {
        console.log('CHANGE_CALENDAR_SCHEDULE_INFO', action.payload);
        return produce(state, (draft) => {
            draft.scheduleInfo = action.payload;
        })
    }
}, initialState)

export default calendar
