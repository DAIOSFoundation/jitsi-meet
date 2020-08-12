import {ReducerRegistry} from '../base/redux';

import {
    CHANGE_PAGE_STATUS_MEET
} from './actionTypes';

const DEFAULT_STATE = {
    pageStatus: 'main',
};

ReducerRegistry.register('features/pageStatus', (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case CHANGE_PAGE_STATUS_MEET: {
            console.log("CHANGE_PAGE_STATUS_MEET !!!")
            return {
                ...state,
                pageStatus: 'meet'
            }
        }
    }

    return state;
});
