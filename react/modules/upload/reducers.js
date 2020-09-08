import {handleActions} from "redux-actions";
import produce from "immer";
import * as UPLOAD from './action';

const initialState = {}

const upload = handleActions({
    [UPLOAD.POST_FILE_UPLOAD]: (state, action) => {
        console.log("TEST",action.payload)
        return produce(state, (draft) => {

        });
    },
}, initialState)

export default upload;

