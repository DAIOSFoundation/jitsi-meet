import {createAction} from "redux-actions";
import {createRequestActionTypes} from "../../librarys/createRequest";

// 채팅창 파일 업로드 메세지 초기화
export const UPLOAD_MESSAGE_CLEAR = "chat/UPLOAD_MESSAGE_CLEAR";
export const upload_message_clear = createAction(UPLOAD_MESSAGE_CLEAR);

// 채팅창 파일 업로드
export const [
    POST_FILE_UPLOAD,
    POST_FILE_UPLOAD_SUCCESS,
    POST_FILE_UPLOAD_FAILED,
] = createRequestActionTypes("chat/POST_FILE_UPLOAD");
export const post_file_upload = createAction(POST_FILE_UPLOAD);
