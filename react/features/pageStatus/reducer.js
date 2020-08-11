import {ReducerRegistry} from '../base/redux';

import {
    PAGE_STATUS
} from './actionTypes';

const DEFAULT_STATE = {
    pageStatus: "main",
};

ReducerRegistry.register('features/pageStatus', (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case PAGE_STATUS: {
            console.log("PAGE_STATUS !!!")
            return {
                ...state,
                pageStatus: 'room'
            }
        }
    }

    return state;
});
