import React, {useEffect} from 'react';

const AttendeesList = (props) => {

    useEffect(() => {
        let element = document.getElementById('attendeesListWrapper');
        element.scrollTop = element.scrollHeight
    }, [props.attendeesList])

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
                        {item}
                    </div>
                ))
            }
        </div>
    );
};

export default AttendeesList;
