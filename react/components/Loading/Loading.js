import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

const Loading = () => {
    return (
        <div style={{
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <CircularProgress/>
            <div style={{marginTop:10}}>
                파일 업로드 중입니다...
            </div>
        </div>
    );
};

export default Loading;
