import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../librarys/createRequest";
import * as uploadAPI from '../../librarys/api/upload';
import * as UPLOAD from './actions';

const postFileUpload = createRequestSaga(
    UPLOAD.POST_FILE_UPLOAD,
    uploadAPI.postFileUpload
);

export default function* rootSaga() {
    yield [
        yield takeLatest(UPLOAD.POST_FILE_UPLOAD, postFileUpload)
    ]
}

