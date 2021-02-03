import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

const BasicLoading = () => {
    return (
        <div style={{
            display: 'flex',
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.1)',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
            zIndex: 1
        }}>
            <CircularProgress/>
        </div>
    );
};

export default BasicLoading;
