import {CHANGE_PAGE_STATUS_MEET} from './actionTypes'

export function changePageStatusMeet() {
    return function (dispatch) {
        dispatch({type: CHANGE_PAGE_STATUS_MEET});
    };
}


