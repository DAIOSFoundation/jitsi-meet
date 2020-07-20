// @flow

import React from 'react';
import type { Dispatch } from 'redux';

import { translate } from '../../base/i18n';
import { MeetingsList } from '../../base/react';
import { connect } from '../../base/redux';
import { _deleteRecentListEntry } from '../actions';
import { isRecentListEnabled, toDisplayableList } from '../functions';

import AbstractRecentList from './AbstractRecentList';

/**
 * The type of the React {@code Component} props of {@link RecentList}
 */
type Props = {

    /**
     * Renders the list disabled.
     */
    disabled: boolean,

    /**
     * The redux store's {@code dispatch} function.
     */
    dispatch: Dispatch<any>,

    /**
     * The translate function.
     */
    t: Function,

    /**
     * The recent list from the Redux store.
     */
    _recentList: Array<Object>,

    // 최근 회의방 리스트 개별 제거 함수
    _deleteRecentListEntry: Function
};

/**
 * The cross platform container rendering the list of the recently joined rooms.
 *
 */
class RecentList extends AbstractRecentList<Props> {
    _getRenderListEmptyComponent: () => React$Node;
    _onPress: string => {};

    /**
     * Initializes a new {@code RecentList} instance.
     *
     * @inheritdoc
     */
    constructor(props: Props) {
        super(props);

        this._getRenderListEmptyComponent
            = this._getRenderListEmptyComponent.bind(this);
        this._onPress = this._onPress.bind(this);
    }

    /**
     * Implements the React Components's render method.
     *
     * @inheritdoc
     */
    render() {
        if (!isRecentListEnabled()) {
            return null;
        }
        const {
            disabled,
            _recentList,
            _deleteRecentListEntry
        } = this.props;
        const recentList = toDisplayableList(_recentList);

        return (
            <MeetingsList
                deleteRecentListEntry = { _deleteRecentListEntry }
                disabled = { disabled }
                hideURL = { true }
                listEmptyComponent = { this._getRenderListEmptyComponent() }
                meetings = { recentList }
                onPress = { this._onPress } />
        );
    }
}

/**
 * Maps redux state to component props.
 *
 * @param {Object} state - The redux state.
 * @returns {{
 *     _defaultServerURL: string,
 *     _recentList: Array
 * }}
 */
export function _mapStateToProps(state: Object) {
    return {
        _recentList: state['features/recent-list']
    };
}

/**
 * Maps dispatching of some actions to React component props.
 *
 * @param {Function} dispatch - Redux action dispatcher.
 * @private
 * @returns {{
 *     _deleteRecentListEntry: void
 * }}
 */
export function _mapDispatchToProps(dispatch: Function) {
    // 최근 회의방 리스트 개별 제거 Dispatch
    return {
        _deleteRecentListEntry(entryId: Object) {
            dispatch(_deleteRecentListEntry(entryId));
        }
    };
}

export default translate(connect(_mapStateToProps, _mapDispatchToProps)(RecentList));
