import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import * as calendarActions from '../../../modules/calendar/actions';

const AttendeesList = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        let element = document.getElementById('attendeesListWrapper');
        element.scrollTop = element.scrollHeight
    }, [props.attendeesList])

    const onPressAttendeeRemove = (index) => {
        dispatch(calendarActions.remove_attendee(index))
    }

    return (
        <div id='attendeesListWrapper' style={{
            overflow: 'scroll',
            maxHeight: 150,
            wordBreak: 'break-all'
        }}>
            {
                props.attendeesList.map((item, index) => (
                    <div key={index}
                         className='ScheduleRegisterModalAttendeesList'>
                        <div style={{display: 'inline-block'}}>
                            {item.email}
                        </div>
                        <div style={{display: 'inline-block'}}>
                            <button
                                onClick={() => onPressAttendeeRemove(index)}
                                style={{
                                border: 'none',
                                padding: 0,
                                background: 'transparent',
                                outline: 'none'
                            }}>
                                <img width={16} height={16}
                                     style={{verticalAlign: 'middle'}}
                                     src={'images/calendar/close-icon.png'}/>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AttendeesList;
