import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone'
import {useDispatch} from 'react-redux';
import * as uploadActions from '../../modules/upload/actions';

const DragZone = () => {

    const dispatch = useDispatch();

    const onDrop = useCallback(acceptedFiles => {
        dispatch(uploadActions.post_file_upload({
            'userFile': acceptedFiles[0]
        }))
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
