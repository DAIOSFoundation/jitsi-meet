import React, {useState} from 'react';
import ValidationInput
    from '../../../components/ValidationInput/ValidationInput';
import {useDispatch, useSelector} from 'react-redux';
import * as calendarActions from '../../../../react/modules/calendar/actions';
import {regTitle} from '../../../utils/regularExpression';

const ScheduleRegisterModal = () => {

    const {
        title,
        isValidTitle
    } = useSelector(state => ({
        title: state.calendar.title,
        isValidTitle: state.calendar.isValidTitle
    }))

    const dispatch = useDispatch();

    const onChangeTitle = (title, valid) => {
        dispatch(calendarActions.change_title(title))
        dispatch(calendarActions.change_is_valid_title(valid))
    }

    return (
        <div style={{
            position: 'absolute',
            width: '35%',
            height: '50%',
            backgroundColor: 'white',
            zIndex: 99
        }}>
            <div>
                <ValidationInput
                    id={'제목'}
                    label={'제목'}
                    rowsMax={4}
                    valid={regTitle}
                    value={title}
                    errorText={'제목은 2~10자 사이로 입력해 주세요.'}
                    onChangeText={(e, valid) => onChangeTitle(e.target.value, valid)}
                />
            </div>
        </div>
    );
};

export default ScheduleRegisterModal;
