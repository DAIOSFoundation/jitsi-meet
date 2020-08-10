// @flow

import VideoLayout from '../../../modules/UI/videolayout/VideoLayout';

import { TOGGLE_CHAT, CLOSE_CHAT_WINDOW } from './actionTypes';

export * from './actions.any';

/**
 * Toggles display of the chat side panel while also taking window
 * resize into account.
 *
 * @returns {Function}
 */
export function toggleChat() {
    return function(dispatch: (Object) => Object) {
        dispatch({ type: TOGGLE_CHAT });
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
