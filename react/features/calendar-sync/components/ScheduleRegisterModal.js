import 'date-fns';
import React, {useCallback, useState} from 'react';
import ValidationInput
    from '../../../components/ValidationInput/ValidationInput';
import {useDispatch, useSelector} from 'react-redux';
import * as calendarActions from '../../../../react/modules/calendar/actions';
import {
    regEmail,
    regMeetingRoom,
    regTitle,
    regSpaceRemove
} from '../../../utils/regularExpression';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {ko} from 'date-fns/locale';
import format from "date-fns/format"
import {Button} from '@material-ui/core';
import AttendeesList from './AttendeesList';
import Moment from 'moment';
import useComponentVisible from '../../../hooks/useComponentVisible';
import {createCalendarEvent, refreshCalendar} from '../actions.web';
import BasicLoading from '../../../components/Loading/BasicLoading';

const ScheduleRegisterModal = () => {

    const {
        title,
        isValidTitle,
        startDate,
        endDate,
        startTime,
        endTime,
        selectMotion,
        attendees,
        isValidAttendee,
        meetingRoomName,
        isValidMeetingRoomName,
        description,
        loadingStatus,
    } = useSelector(state => ({
        title: state.calendar.title,
        isValidTitle: state.calendar.isValidTitle,
        startDate: state.calendar.startDate,
        endDate: state.calendar.endDate,
        startTime: state.calendar.startTime,
        endTime: state.calendar.endTime,
        selectMotion: state.calendar.selectMotion,
        attendees: state.calendar.attendees,
        isValidAttendee: state.calendar.isValidAttendee,
        meetingRoomName: state.calendar.meetingRoomName,
        isValidMeetingRoomName: state.calendar.isValidMeetingRoomName,
        description: state.calendar.description,
        loadingStatus: state.calendar.loadingStatus,
    }))

    const dispatch = useDispatch();

    const [attendee, setAttendee] = useState('');
    const [requiredTitle, setRequiredTitle] = useState(false)
    const [requiredMeetingRoomName, setRequiredMeetingRoomName] = useState(false)

    // 제목 입력
    const onChangeTitle = (title, valid) => {
        dispatch(calendarActions.change_title(title))
        dispatch(calendarActions.change_is_valid_title(valid))
    }

    // 참석자 입력
    const onChangeAttendee = (value, valid) => {
        setAttendee(value)
        dispatch(calendarActions.change_is_valid_attendee(valid))
    }

    // 참석자 추가
    const onPressAttendeeInsert = useCallback(() => {
        if (!isValidAttendee) {
            dispatch(calendarActions.change_attendee({
                'email': attendee
            }))
            setAttendee('')
            dispatch(calendarActions.change_is_valid_attendee(true))
        }
    }, [isValidAttendee, attendee])

    // 회의방 이름 입력
    const onChangeMeetingRoomName = (value, valid) => {
        dispatch(calendarActions.change_meeting_room_name(value))
        dispatch(calendarActions.change_is_valid_meeting_room_name(valid))
    }

    // 설명(기타 메모) 입력
    const onChangeDescription = (value) => {
        dispatch(calendarActions.change_description(value));
    }

    // 캘린더 모달 폼 닫기
    const onPressClose = () => {
        dispatch(calendarActions.change_modal_visible(false))
    }

    // 시작 날짜 선택 시
    const handleStartDateChange = (date) => {
        dispatch(calendarActions.change_start_date(date))
    }

    // 종료 날짜 선택 시
    const handleEndDateChange = (date) => {
        dispatch(calendarActions.change_end_date(date))
    }

    // 시작 시간 선택 시
    const handleStartTimeChange = (time) => {
        dispatch(calendarActions.change_start_time(time))
    }

    // 종료 시간 선택 시
    const handleEndTimeChange = (time) => {
        dispatch(calendarActions.change_end_time(time))
    }

    // Date classification according to motion
    const motionDate = useCallback(() => {
        if (selectMotion !== 'drag') {
            return Moment(startDate).format('YYYY-MM-DD')
        } else {
            return Moment(endDate).format('YYYY-MM-DD')
        }
    }, [
        selectMotion,
        startTime,
        endDate
    ])

    // 캘린더 일정 등록
    const onPressScheduleInsert = useCallback(() => {

        let startDates = Moment(startDate).format('YYYY-MM-DD') + ' ' + Moment(startTime).format('HH:mm:ss')
        let endDates = motionDate() + ' ' + Moment(endTime).format('HH:mm:ss')

        let scheduleData = {
            'summary': title,
            'description': '회의방 주소 ' + location.origin + '/' + meetingRoomName + '\n\n' + description,
            'start': {
                'dateTime': new Date(startDates).toISOString(),
            },
            'end': {
                'dateTime': new Date(endDates).toISOString(),
            },
            'attendees': attendees,
            'reminders': {
                'useDefault': false,
                'overrides': [
                    {'method': 'email', 'minutes': 24 * 60},
                    {'method': 'popup', 'minutes': 10}
                ]
            },
            'source': {
                'url': location.origin + '/' + meetingRoomName
            }
        }

        if (regSpaceRemove(title) === '') {
            return setRequiredTitle(true)
        } else if (regSpaceRemove(meetingRoomName) === '') {
            return setRequiredMeetingRoomName(true)
        } else if (!isValidTitle && !isValidMeetingRoomName) {
            dispatch(calendarActions.change_calendar_loading_status(true))
            return dispatch(createCalendarEvent(scheduleData))
        }
    }, [
        title,
        startDate,
        endDate,
        startTime,
        endTime,
        attendees,
        meetingRoomName,
        description,
        isValidTitle,
        isValidMeetingRoomName
    ]);

    class LocalizedUtils extends DateFnsUtils {
        getDatePickerHeaderText(date) {
            return format(date, "MMM do (EEEEEE)", {locale: ko});
        }
    }

    return (
        <div className='ScheduleModalWrapper'>
            {
                loadingStatus ? <BasicLoading/> : null
            }
            <div className='ScheduleModalHeader'>
                <span style={{
                    fontSize: '1.3vw',
                }}>
                    일정등록
                </span>
                <button className='ScheduleModalCancelButton'
                        onClick={onPressClose}>
                    <img
                        src={'images/calendar/close-icon.png'}
                        width={25} height={25} alt=""/>
                </button>
            </div>
            <div className='ScheduleRegisterModalDescription'>
                <span>
                    캘린더에 등록할 일정 정보를 입력하세요.
                </span>
            </div>
            <div style={{
                padding: 15
            }}>
                <ValidationInput
                    id={'scheduleTitle'}
                    label={'일정 제목'}
                    placeholder={'일정 제목 입력'}
                    fullWidth
                    valid={regTitle}
                    value={title}
                    errorText={'제목은 2~10자 사이로 입력해 주세요.'}
                    onChangeText={(e, valid) => onChangeTitle(e.target.value, valid)}
                />
                {
                    requiredTitle ? <span style={{color: 'red'}}>일정 제목은 필수 값 입니다.</span> : null
                }
                <MuiPickersUtilsProvider locale={ko} utils={LocalizedUtils}>
                    <Grid container alignItems="baseline">
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label={selectMotion !== 'drag' ? "일정 날짜" : "일정 시작 날짜"}
                            format="yyyy-MM-dd"
                            value={startDate}
                            onChange={handleStartDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            style={{flex: 1}}
                        />
                        {
                            selectMotion === 'drag' ?
                                <>
                                    <img style={{margin: '0 15px'}}
                                         src={'images/calendar/to-icon.png'}
                                         width={16} height={16} alt=""/>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="일정 종료 날짜"
                                        format="yyyy-MM-dd"
                                        value={endDate}
                                        onChange={handleEndDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        style={{flex: 1}}
                                    />
                                </>
                                :
                                null
                        }
                    </Grid>
                    <Grid container justify="space-around"
                          alignItems="baseline">
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="일정 시작 시간"
                            value={startTime}
                            onChange={handleStartTimeChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            style={{flex: 1}}
                        />
                        <img style={{margin: '0 15px'}}
                             src={'images/calendar/to-icon.png'}
                             width={16} height={16} alt=""/>
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="일정 종료 시간"
                            value={endTime}
                            onChange={handleEndTimeChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            style={{flex: 1}}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <div style={{display: 'flex'}}>
                    <ValidationInput
                        id={'attendee'}
                        label={'참석자'}
                        placeholder={'참석자 입력'}
                        fullWidth
                        valid={regEmail}
                        value={attendee}
                        errorText={'이메일 형식이 아닙니다.'}
                        onChangeText={(e, valid) => onChangeAttendee(e.target.value, valid)}
                        style={{flex: 1}}
                    />
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '5px'
                    }}>
                        <Button
                            onClick={onPressAttendeeInsert}
                            style={{
                                backgroundColor: '#3f83ff',
                                color: 'white'
                            }}>
                            추가
                        </Button>
                    </div>
                </div>
                <AttendeesList
                    attendeesList={attendees}
                />
                <ValidationInput
                    id={'meetingRoomName'}
                    label={'회의방 이름'}
                    placeholder={'회의방 이름 입력'}
                    fullWidth
                    valid={regMeetingRoom}
                    value={meetingRoomName}
                    descriptionText={"일정 등록 후 생성되는 주소에 사용됩니다."}
                    errorText={'회의방 이름은 영문,한글,숫자만 가능합니다.'}
                    onChangeText={(e, valid) => onChangeMeetingRoomName(e.target.value, valid)}
                />
                <div style={{
                    wordBreak: 'break-all',
                    fontSize: '0.75rem',
                    marginBottom: 20
                }}>
                    <span style={{color: '#3f83ff'}}>회의방 주소 미리보기 : </span>
                    {location.origin}/{meetingRoomName}
                </div>
                {
                    requiredMeetingRoomName ? <span style={{color: 'red'}}>회의방 이름은 필수 값 입니다.</span> : null
                }
                <ValidationInput
                    id={'description'}
                    label={'설명'}
                    placeholder={'기타 메모'}
                    fullWidth
                    value={description}
                    onChangeText={(e) => onChangeDescription(e.target.value)}
                    multiline
                    rowsMax={4}
                />
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: 15
                }}>
                    <Button
                        onClick={onPressScheduleInsert}
                        style={{
                            backgroundColor: '#3f83ff',
                            color: 'white'
                        }}>
                        등록
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ScheduleRegisterModal;
