import {handleActions} from "redux-actions";
import produce from "immer";
import * as UPLOAD from './actions';

const initialState = {
    userFileInfo: null, // gcs 업로드된 파일 정보 반환 값
}

const upload = handleActions({
    [UPLOAD.POST_FILE_UPLOAD_SUCCESS]: (state, action) => {
        console.log('POST_FILE_UPLOAD_SUCCESS', action.payload)
        return produce(state, (draft) => {
            draft.userFileInfo = action.payload.data;
        });
    },
    [UPLOAD.POST_FILE_UPLOAD_FAILED]: (state, action) => {
        console.log('POST_FILE_UPLOAD_FAILED', action.payload)
        return produce(state, (draft) => {
        });
    },
}, initialState)

export default upload;

