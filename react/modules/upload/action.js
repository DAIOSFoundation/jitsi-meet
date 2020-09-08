import {createAction} from "redux-actions";
import {createRequestActionTypes} from "../../libs/createRequestSaga";

// 파일 업로드
export const [
    POST_FILE_UPLOAD,
    POST_FILE_UPLOAD_SUCCESS,
    POST_FILE_UPLOAD_FAILED,
] = createRequestActionTypes("chat/POST_FILE_UPLOAD");
export const post_file_upload = createAction(POST_FILE_UPLOAD);
