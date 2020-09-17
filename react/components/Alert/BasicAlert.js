import React from 'react';

// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

import styles from "../jss/sweetAlertStyle.js";

const useStyles = makeStyles(styles);

const BasicAlert = () => {

    const classes = useStyles();

    return (
        <SweetAlert
            show={false}
            title={<div style={{color: 'black'}}>test</div>}
            onConfirm={() => console.log("TEST")}
            confirmBtnCssClass={classes.button + " " + classes.success}
            confirmBtnStyle={{
                color: 'white',
                textDecoration: 'none',
                outline: 'none'
            }}
            confirmBtnText={'확인'}
        />
    );
};

export default BasicAlert;
