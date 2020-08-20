import {CHANGE_PAGE_STATUS} from './actionTypes'

export function changePageStatus(pageStatus: Object) {
    return {
        type: CHANGE_PAGE_STATUS,
        ...pageStatus
    }
}
