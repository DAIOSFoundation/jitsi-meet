import { PAGE_STATUS } from './actionTypes'

export function changePageStatus() {
    return function(dispatch) {
        dispatch({ type: PAGE_STATUS });
    };
}


