// @flow

import { ReducerRegistry } from '../base/redux';

import { SET_WBO_DOCUMENT_EDITING_STATUS, SET_WBO_DOCUMENT_URL } from './actionTypes';

const DEFAULT_STATE = {

    /**
     * URL for the shared document.
     */
    documentUrl: undefined,

    /**
     * Whether or not Etherpad is currently open.
     *
     * @public
     * @type {boolean}
     */
    editing: false
};

/**
 * Reduces the Redux actions of the feature features/etherpad.
 */
ReducerRegistry.register(
    'features/wbo',
    (state = DEFAULT_STATE, action) => {
        switch (action.type) {
        case SET_WBO_DOCUMENT_EDITING_STATUS:
            return {
                ...state,
                editing: action.editing
            };

        case SET_WBO_DOCUMENT_URL:
            return {
                ...state,
                documentUrl: action.documentUrl
            };

        default:
            return state;
        }
    });
