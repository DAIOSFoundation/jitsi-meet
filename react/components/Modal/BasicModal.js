import React, {useCallback} from 'react';

// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

import styles from "../jss/sweetAlertStyle.js";
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import * as modalActions from '../../modules/modal/actions';

const useStyles = makeStyles(styles);

const BasicModal = () => {

    const {
        isVisible,
        message,
        onPressOK,
    } = useSelector(state => ({
        isVisible: state.modal.isVisible,
        message: state.modal.message,
        onPressOK: state.modal.onPressOK,
    }), shallowEqual)

    const dispatch = useDispatch();

    // Modal OK Button
    const onPress = useCallback(() => {
        if (!onPressOK || typeof onPressOK !== 'function') {
            dispatch(modalActions.change_modal_clear());
        } else {
            dispatch(modalActions.change_modal_clear());
            return onPressOK();
        }
    },[onPressOK]);

    // Modal Cancel Button
    const onPressCancel = () => {
        dispatch(modalActions.change_modal_clear());
    }

    const classes = useStyles();

    return (
        <SweetAlert
            show={isVisible}
            title={<div style={{color: 'black'}}>{message}</div>}
            onConfirm={onPress}
            confirmBtnCssClass={classes.button + " " + classes.info}
            confirmBtnStyle={{
                color: 'white',
                textDecoration: 'none',
                outline: 'none'
            }}
            confirmBtnText={'확인'}
        />
    );
};

export default BasicModal;
