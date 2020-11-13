import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../librarys/createRequest';

// Google Login
export const [
    POST_GOOGLE_LOGIN,
    POST_GOOGLE_LOGIN_SUCCESS,
    POST_GOOGLE_LOGIN_FAILED,
] = createRequestActionTypes("oauth/POST_GOOGLE_LOGIN");
export const post_google_login = createAction(POST_GOOGLE_LOGIN);

