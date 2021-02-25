// @flow

import type { Dispatch } from 'redux';

import VideoLayout from '../../../modules/UI/videolayout/VideoLayout';

import { OPEN_CHAT, CLOSE_CHAT_WINDOW } from './actionTypes';
import { closeChat } from './actions.any';

export * from './actions.any';

/**
 * Displays the chat panel.
 *
 * @param {Object} participant - The recipient for the private chat.
 * @returns {{
 *     participant: Participant,
 *     type: OPEN_CHAT
 * }}
 */
export function openChat(participant: Object) {
    return function(dispatch: (Object) => Object) {
        dispatch({
            participant,
            type: OPEN_CHAT
        });
    };
}

/**
 * Toggles display of the chat panel.
 *
 * @returns {Function}
 */
export function toggleChat() {
    return (dispatch: Dispatch<any>, getState: Function) => {
        const isOpen = getState()['features/chat'].isOpen;

        if (isOpen) {
            dispatch(closeChat());
        } else {
            dispatch(openChat());
        }

        // Recompute the large video size whenever we toggle the chat, as it takes chat state into account.
        VideoLayout.onResize();
    };
}

// 채팅창 범위 밖 클릭 시 채팅창 닫기
export function closeChatWindow() {
    return function(dispatch: (Object) => Object) {
        dispatch({ type: CLOSE_CHAT_WINDOW });
        VideoLayout.onResize();
    };
}
