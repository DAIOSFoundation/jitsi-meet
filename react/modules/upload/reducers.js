import {handleActions} from "redux-actions";
import produce from "immer";
import * as UPLOAD from './actions';

const initialState = {
    userFileInfo: null, // gcs 업로드된 파일 정보 반환 값
    uploadErrorMsg: null, // 업로드 에러 메세지
    uploadSuccessMsg: null, // 업로드 성공 메세지
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
            draft.uploadErrorMsg = action.payload.errorData.message
        });
    },
    [UPLOAD.UPLOAD_MESSAGE_CLEAR]: (state, action) => {
        console.log('UPLOAD_MESSAGE_CLEAR')
        return produce(state, (draft) => {
            draft.uploadErrorMsg = null;
            draft.uploadSuccessMsg = null;
        });
    },
}, initialState)

export default upload;

