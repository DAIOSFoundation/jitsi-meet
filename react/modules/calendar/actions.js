import {createAction} from 'redux-actions';

// 타입에 따른 캘린더 모달 창 분기처리
export const CHANGE_MODAL_VISIBLE = "calendar/CHANGE_MODAL_VISIBLE";
export const change_modal_visible = createAction(CHANGE_MODAL_VISIBLE);

// 캘린더 스케줄 제목
export const CHANGE_TITLE = "calendar/CHANGE_TITLE";
export const change_title = createAction(CHANGE_TITLE);

// 캘린더 스케줄 제목 유효성 검사
export const CHANGE_IS_VALID_TITLE = "calendar/CHANGE_IS_VALID_TITLE";
export const change_is_valid_title = createAction(CHANGE_IS_VALID_TITLE);

// 캘린더 스케줄 시작 날짜
export const CHANGE_START_DATE = "calendar/CHANGE_START_DATE";
export const change_start_date = createAction(CHANGE_START_DATE);

// 캘린더 스케줄 마지막 날짜
export const CHANGE_END_DATE = "calendar/CHANGE_END_DATE";
export const change_end_date = createAction(CHANGE_END_DATE);

// 캘린더 스케줄 시작 시간
export const CHANGE_START_TIME = "calendar/CHANGE_START_TIME";
export const change_start_time = createAction(CHANGE_START_TIME)

// 캘린더 스케줄 마지막 시간
export const CHANGE_END_TIME = "calendar/CHANGE_END_TIME";
export const change_end_time = createAction(CHANGE_END_TIME)

// 캘린더 스케줄 설명
export const CHANGE_DESCRIPTION = "calendar/CHANGE_DESCRIPTION";
export const change_description = createAction(CHANGE_DESCRIPTION);

// 캘린더 스케줄 회의방 이름
export const CHANGE_MEETING_ROOM_NAME = "calendar/CHANGE_MEETING_ROOM_NAME";
export const change_meeting_room_name = createAction(CHANGE_MEETING_ROOM_NAME);

// 캘린더 스케줄 회의방 이름 유효성 검사
export const CHANGE_IS_VALID_MEETING_ROOM_NAME = "calendar/CHANGE_IS_VALID_MEETING_ROOM_NAME";
export const change_is_valid_meeting_room_name = createAction(CHANGE_IS_VALID_MEETING_ROOM_NAME);

// 캘린더 등록 선택 or 드래그 이벤트 동작 분기 처리
export const CHANGE_SELECT_MOTION = "calendar/CHANGE_SELECT_MOTION";
export const change_select_motion = createAction(CHANGE_SELECT_MOTION);

// 캘린더 스케줄 참석자 등록
export const CHANGE_ATTENDEE = "calendar/CHANGE_ATTENDEE";
export const change_attendee = createAction(CHANGE_ATTENDEE);

// 캘린더 스케줄 참석자 제거
export const REMOVE_ATTENDEE = "calendar/REMOVE_ATTENDEE";
export const remove_attendee = createAction(REMOVE_ATTENDEE);

// 캘린더 스케줄 참석자 유효성 검사
export const CHANGE_IS_VALID_ATTENDEE = "calendar/CHANGE_IS_VALID_ATTENDEE";
export const change_is_valid_attendee = createAction(CHANGE_IS_VALID_ATTENDEE);

// 캘린더 스케줄 로딩바 상태
export const CHANGE_CALENDAR_LOADING_STATUS = "calendar/CHANGE_CALENDAR_LOADING_STATUS";
export const change_calendar_loading_status = createAction(CHANGE_CALENDAR_LOADING_STATUS);

// 응답에 따른 캘린더 메세지
export const CHANGE_CALENDAR_MESSAGE = "calendar/POST_CALENDAR_MESSAGE";
export const change_calendar_message = createAction(CHANGE_CALENDAR_MESSAGE);

// 특정 캘린더 일정 정보 가져오기
export const CHANGE_CALENDAR_SCHEDULE_INFO = "calendar/CHANGE_CALENDAR_SCHEDULE_INFO";
export const change_calendar_schedule_info = createAction(CHANGE_CALENDAR_SCHEDULE_INFO);
