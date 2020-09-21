import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone'
import {useDispatch} from 'react-redux';
import * as uploadActions from '../../modules/upload/actions';
import * as modalActions from '../../modules/modal/actions';

const DragZone = () => {

    const dispatch = useDispatch();

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles.length !== 1) {
            return dispatch(modalActions.change_modal_message('현재 단일 파일 업로드만 가능합니다.'))
        } else if (acceptedFiles[0].size > 577000000) {
            return dispatch(modalActions.change_modal_message('파일 용량 제한은 500MB 이하입니다.'))
        } else {
            dispatch(uploadActions.post_file_upload({
                'userFile': acceptedFiles[0]
            }))
        }
    }, [])

    const {getRootProps, getInputProps, isDragActive, open} = useDropzone({
        onDrop,
        noClick: true
    })

    return (
        <div className="container" {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <div className="drop-container">
                        <div className="drop-message">
                            <div className="upload-icon"></div>
                            업로드하실 파일을 올려주세요.
                        </div>
                    </div> :
                    null
            }
        </div>
    );
};

export default DragZone;
