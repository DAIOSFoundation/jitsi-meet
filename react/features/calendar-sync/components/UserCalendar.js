import React, {useEffect, useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import {bootstrapCalendarIntegration, refreshCalendar} from '../actions'
import logger from '../../settings/logger';
import ScheduleRegisterModal from './ScheduleRegisterModal';
import * as calendarActions from '../../../../react/modules/calendar/actions';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScheduleDetailViewModal from './ScheduleDetailViewModal';

const localizer = momentLocalizer(moment)

const UserCalendar = (props) => {

    const dispatch = useDispatch();

    const {
        modalVisible,
        calendarMsg
    } = useSelector(state => ({
        modalVisible: state.calendar.modalVisible,
        calendarMsg: state.calendar.calendarMsg
    }), shallowEqual)

    useEffect(() => {
        if (calendarMsg === 'scheduleInsertSuccess') {
            dispatch(refreshCalendar())
            toast('일정을 등록하였습니다.', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            dispatch(calendarActions.change_modal_visible(false))
            dispatch(calendarActions.change_calendar_loading_status(false))
            dispatch(calendarActions.change_calendar_message(''))
        }
    }, [calendarMsg])

    // const {profileEmail} = useSelector(state => ({
    //     profileEmail: state['features/calendar-sync'].profileEmail
    // }), shallowEqual)
    //
    // useEffect(() => {
    //     dispatch(bootstrapCalendarIntegration())
    //         .catch(err => logger.error('UserCalendar bootstrap failed', err))
    // }, [])

    const Event = ({event}) => {
        return (
            <>
                {event.title}
            </>
        )
    }

    // 일정 등록을 위해 캘린더 일정 클릭 시 이벤트 발생 (빈칸)
    const scheduleInsertSelect = ({start, end, action}) => {

        dispatch(calendarActions.change_start_date(start))
        dispatch(calendarActions.change_start_time(start))
        dispatch(calendarActions.change_end_date(end))
        dispatch(calendarActions.change_end_time(end))

        if (action === 'click') {
            dispatch(calendarActions.change_select_motion('click'))
        } else {
            dispatch(calendarActions.change_select_motion('drag'))
        }

        dispatch(calendarActions.change_modal_visible('insert'))
    }

    // 일정 클릭 시 상세보기 화면 이벤트 발생
    const scheduleDetailViewSelect = (event) => {
        dispatch(calendarActions.change_calendar_schedule_info(event))
        dispatch(calendarActions.change_modal_visible('detailView'))
    }

    return (
        <div className='calendar-wrapper'>
            <Calendar
                selectable
                localizer={localizer}
                onSelectEvent={(event) => scheduleDetailViewSelect(event)}
                onSelectSlot={scheduleInsertSelect}
                events={props.events}
                startAccessor="start"
                endAccessor="end"
                popup={true}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white'
                }}
                components={{
                    event: Event,
                }}
                formats={{
                    agendaDateFormat: 'MM/DD',
                    monthHeaderFormat: 'YYYY년 MM월',
                    dayHeaderFormat: 'MM월DD일 dddd'
                }}
            />
            {
                modalVisible ?
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0, 0.3)',
                        zIndex: 99,
                    }}>
                        {
                            modalVisible === 'insert' ?
                                <ScheduleRegisterModal/> :
                                <ScheduleDetailViewModal/>
                        }
                    </div> : null
            }
            <ToastContainer/>
        </div>
    );
};

export default UserCalendar;
