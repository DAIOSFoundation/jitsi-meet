import {ReducerRegistry} from '../base/redux';

import {
    CHANGE_PAGE_STATUS
} from './actionTypes';

const DEFAULT_STATE = {
    pageStatus: 'main',
};

ReducerRegistry.register('features/pageStatus', (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case CHANGE_PAGE_STATUS: {
            return {
                ...state,
                pageStatus:  action.pageStatus
            }
        }
    }

    return state;
});
