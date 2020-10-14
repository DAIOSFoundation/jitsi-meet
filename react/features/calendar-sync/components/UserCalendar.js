import React, {useEffect, useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import {bootstrapCalendarIntegration, createCalendarEvent} from '../actions'
import logger from '../../settings/logger';
import ScheduleRegisterModal from './ScheduleRegisterModal';

const localizer = momentLocalizer(moment)

const UserCalendar = (props) => {

    const dispatch = useDispatch();

    const [registerModal, setRegisterModal] = useState(null);

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

    const handleSelect = ({start, end}) => {
        setRegisterModal(true)
        // dispatch(createCalendarEvent('안녕하셍용'))
    }

    return (
        <div className='calendar-wrapper'>
            <Calendar
                selectable
                localizer={localizer}
                onSelectEvent={event => console.log('TEST', event)}
                onSelectSlot={handleSelect}
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
            <ScheduleRegisterModal/>
            {/*{*/}
            {/*    registerModal ? <ScheduleRegisterModal/> : null*/}
            {/*}*/}
        </div>
    );
};

export default UserCalendar;
