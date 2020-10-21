import React from 'react';
import * as calendarActions from '../../../modules/calendar/actions';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import Moment from 'moment';
import BasicLoading from '../../../components/Loading/BasicLoading';

const ScheduleDetailViewModal = () => {

    const dispatch = useDispatch();

    const {
        scheduleInfo
    } = useSelector(state => ({
        scheduleInfo: state.calendar.scheduleInfo
    }), shallowEqual)

    // 캘린더 모달 폼 닫기
    const onPressClose = () => {
        dispatch(calendarActions.change_modal_visible(false))
    }

    return (
        <>
            {
                scheduleInfo ?
                    <div className='ScheduleModalWrapper'>
                        <div className='ScheduleModalHeader'>
                            <span style={{fontSize: '1vw'}}>나의 일정</span>
                            <button className='ScheduleModalCancelButton'
                                    onClick={onPressClose}>
                                <img
                                    src={'images/calendar/close-icon.png'}
                                    width={25} height={25} alt=""/>
                            </button>
                        </div>

                        <div style={{
                            padding: 15,
                            color: '##3f4452'
                        }}>
                            <div className='ScheduleModalTitle'>
                                일정 제목
                            </div>

                            <div
                                style={{
                                    fontSize: '1vw',
                                    marginTop: 3
                                }}>{scheduleInfo.title}</div>

                            <div style={{
                                display: 'flex',
                                marginTop: 15,
                                alignItems: 'center'
                            }}>
                                <div>
                                    <div className='ScheduleModalTitle'>
                                        일정 시작
                                    </div>
                                    <div style={{
                                        fontSize: '1vw',
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: 3
                                    }}>
                                        <img
                                            style={{marginRight: 7}}
                                            src={'images/calendar/calendar-icon.png'}
                                            width={16} height={16} alt=""/>
                                        {Moment((scheduleInfo.start)).format('YYYY-MM-DD A hh:mm')}
                                    </div>
                                </div>

                                <img style={{
                                    margin: '0 15px',
                                    alignSelf: 'flex-end'
                                }}
                                     src={'images/calendar/to-icon.png'}
                                     width={16} height={16} alt=""/>

                                <div>
                                    <div className='ScheduleModalTitle'>
                                        일정 종료
                                    </div>
                                    <div style={{
                                        fontSize: '1vw',
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: 3
                                    }}>
                                        <img
                                            style={{marginRight: 7}}
                                            src={'images/calendar/calendar-icon.png'}
                                            width={16} height={16} alt=""/>
                                        {Moment((scheduleInfo.end)).format('YYYY-MM-DD A hh:mm')}
                                    </div>
                                </div>
                            </div>

                            <div style={{
                                marginTop: 15
                            }}>
                                <div className='ScheduleModalTitle'>
                                    참석자
                                </div>
                                <div style={{
                                    marginTop: 3,
                                    fontSize: '1vw',
                                    overflow: 'scroll',
                                    maxHeight: 150,
                                    wordBreak: 'break-all'
                                }}>
                                    {
                                        scheduleInfo.attendees ?
                                            scheduleInfo.attendees.map((item, index) => (
                                                <div key={index}
                                                     style={{margin: '0px 0px 5px 0'}}>
                                                    {item.email}
                                                </div>
                                            ))
                                            :
                                            null
                                    }
                                </div>
                            </div>

                            <div style={{
                                marginTop: 15
                            }}>
                                <div className='ScheduleModalTitle'>
                                    회의방 주소
                                </div>

                                <div
                                    style={{
                                        fontSize: '1vw',
                                        marginTop: 3
                                    }}>
                                    <a href={scheduleInfo.url}>
                                        {scheduleInfo.url}
                                    </a>
                                </div>
                            </div>

                            <div style={{
                                marginTop: 15
                            }}>
                                <div className='ScheduleModalTitle'>
                                    설명
                                </div>

                                <pre style={{
                                    fontSize: '1vw',
                                    marginTop: 5,
                                    whiteSpace: 'pre-wrap'
                                }}>
                                    {scheduleInfo.description}
                                </pre>
                            </div>
                        </div>
                    </div>
                    :
                    <BasicLoading/>
            }
        </>
    );
};

export default ScheduleDetailViewModal;
