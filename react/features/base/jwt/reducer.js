// @flow

import { equals, ReducerRegistry } from '../redux';

import { SET_JWT } from './actionTypes';

/**
 * The default/initial redux state of the feature jwt.
 *
 * @private
 * @type {{
 *     isGuest: boolean
 * }}
 */
const DEFAULT_STATE = {
    /**
     * The indicator which determines whether the local participant is a guest
     * in the conference.
     *
     * @type {boolean}
     */
    isGuest: true,
    jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZXh0Ijp7InVzZXIiOnsiYXZhdGFyIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvam9obi1kb2UiLCJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6Impkb2VAZXhhbXBsZS5jb20ifX0sImF1ZCI6ImR2aXNpb24iLCJpc3MiOiJkdmlzaW9uIiwic3ViIjoiZHZpc2lvbi5kYWlvcy5uZXQiLCJyb29tIjoiKiJ9.X4AvlNrkjK4RBXGdORrj_OtCZK1o6UKdaWZU-gO1yic'
};

/**
 * Reduces redux actions which affect the JSON Web Token (JWT) stored in the
 * redux store.
 *
 * @param {Object} state - The current redux state.
 * @param {Object} action - The redux action to reduce.
 * @returns {Object} The next redux state which is the result of reducing the
 * specified {@code action}.
 */
ReducerRegistry.register(
    'features/base/jwt',
    (state = DEFAULT_STATE, action) => {
        switch (action.type) {
        case SET_JWT: {
            // eslint-disable-next-line no-unused-vars
            const { type, ...payload } = action;
            const nextState = {
                ...DEFAULT_STATE,
                ...payload
            };

            return equals(state, nextState) ? state : nextState;
        }
        }

        return state;
    });
