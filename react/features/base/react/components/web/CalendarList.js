// @flow

import React, {Component} from 'react';

import {
    getLocalizedDateFormatter,
    getLocalizedDurationFormatter
} from '../../../i18n';

import Container from './Container';
import Text from './Text';

import {Button} from './index';
import UserCalendar from '../../../../calendar-sync/components/UserCalendar';

type Props = {

    /**
     * Indicates if the list is disabled or not.
     */
    disabled: boolean,

    /**
     * Indicates if the URL should be hidden or not.
     */
    hideURL: boolean,

    /**
     * Function to be invoked when an item is pressed. The item's URL is passed.
     */
    onPress: Function,

    /**
     * Rendered when the list is empty. Should be a rendered element.
     */
    listEmptyComponent: Object,

    /**
     * An array of meetings.
     */
    meetings: Array<Object>,

    /**
     * Defines what happens when  an item in the section list is clicked
     */
    onItemClick: Function,

    // 최근 회의방 리스트 개별 제거 함수
    deleteRecentListEntry: Function
};

/**
 * Generates a date string for a given date.
 *
 * @param {Object} date - The date.
 * @private
 * @returns {string}
 */
function _toDateString(date) {
    return getLocalizedDateFormatter(date).format('LL');
}


/**
 * Generates a time (interval) string for a given times.
 *
 * @param {Array<Date>} times - Array of times.
 * @private
 * @returns {string}
 */
function _toTimeString(times) {
    if (times && times.length > 0) {
        return (
            times
                .map(time => getLocalizedDateFormatter(time).format('LT'))
                .join(' - '));
    }

    return undefined;
}

/**
 * Implements a React/Web {@link Component} for displaying a list with
 * meetings.
 *
 * @extends Component
 */
export default class MeetingsList extends Component<Props> {
    /**
     * Constructor of the MeetingsList component.
     *
     * @inheritdoc
     */
    constructor(props: Props) {
        super(props);

        this._onPress = this._onPress.bind(this);
        this._renderItem = this._renderItem.bind(this);
    }

    /**
     * Renders the content of this component.
     *
     * @returns {React.ReactNode}
     */
    render() {
        const {listEmptyComponent, meetings} = this.props;
        console.log('meetings => ',meetings)
        /**
         * If there are no recent meetings we don't want to display anything
         */
        if (meetings) {
            return (
                <Container
                    className='meetings-list'>
                    {
                        meetings.length === 0
                            ? listEmptyComponent
                            : <UserCalendar events={meetings}/>
                    }
                </Container>
            );
        }

        return null;
    }

    _onPress: string => Function;

    /**
     * Returns a function that is used in the onPress callback of the items.
     *
     * @param {string} url - The URL of the item to navigate to.
     * @private
     * @returns {Function}
     */
    _onPress(url) {
        const {disabled, onPress} = this.props;

        if (!disabled && url && typeof onPress === 'function') {
            return () => onPress(url);
        }

        return null;
    }

    _renderItem: (Object, number) => React$Node;

    /**
     * Renders an item for the list.
     *
     * @param {Object} meeting - Information about the meeting.
     * @param {number} index - The index of the item.
     * @returns {Node}
     */
    _renderItem(meeting, index) {
        const {
            date,
            duration,
            elementAfter,
            time,
            title,
            url
        } = meeting;
        const {hideURL = false, deleteRecentListEntry} = this.props;
        const onPress = this._onPress(url);
        const rootClassName
            = `item ${
            onPress ? 'with-click-handler' : 'without-click-handler'}`;
        return (
            // eslint-disable-next-line react-native/no-inline-styles
            <Container style={{position: 'relative'}} key={index}>
                <Container
                    onClick={onPress}
                    className={rootClassName}>
                    <Container className='left-column'>
                        <Text className='date'>
                            {_toDateString(date)}
                        </Text>
                        <Text>
                            {_toTimeString(time)}
                        </Text>
                    </Container>
                    <Container className='right-column'>
                        <Text className='title' style={{color:'0960ff'}}>
                            {title}
                        </Text>
                        {
                            hideURL || !url ? null : (
                                <Text>
                                    {url}
                                </Text>)
                        }
                        {
                            typeof duration === 'number' ? (
                                <Text>
                                    {getLocalizedDurationFormatter(duration)}
                                </Text>) : null
                        }
                    </Container>
                    <Container className='actions'>
                        {elementAfter || null}
                    </Container>
                </Container>
                {/* eslint-disable-next-line react-native/no-inline-styles */}
                {/* 미팅 리스트 - 캘린더 / 최근방 리스트 분기처리 */}
                {
                    elementAfter ? null :
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: 30,
                                transform: 'translate(0,-50%)'
                            }}>
                            {/* eslint-disable-next-line react/jsx-no-bind */}
                            <button style={{
                                padding: '9px 17px 9px 17px',
                                backgroundColor: '#ffe7e7',
                                fontWeight:'bold',
                                color:'black',
                                border: 'none',
                                outline: 'none',
                                borderRadius: 17,
                            }} onClick={() => deleteRecentListEntry(meeting)}>
                                <Text>
                                    삭제
                                </Text>
                            </button>
                        </div>
                }
            </Container>
        );
    }
}
