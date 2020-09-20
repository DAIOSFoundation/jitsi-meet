// @flow

import { ReducerRegistry } from '../base/redux';

import { WBO_SET_DOCUMENT_EDITING_STATUS, WBO_SET_DOCUMENT_URL } from './actionTypes';

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
        case WBO_SET_DOCUMENT_EDITING_STATUS:
            return {
                ...state,
                editing: action.editing
            };

        case WBO_SET_DOCUMENT_URL:
            return {
                ...state,
                documentUrl: action.documentUrl
            };

        default:
            return state;
        }
    });
