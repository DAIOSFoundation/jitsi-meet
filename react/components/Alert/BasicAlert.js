import React, {useEffect} from 'react';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import Button from '../CustomButtons/Button';

// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

import styles from "../jss/sweetAlertStyle.js";

const useStyles = makeStyles(styles);

const BasicAlert = (props) => {


    const classes = useStyles();

    return (
        <SweetAlert
            style={{display: "block", margin: 0}}
            title={<div style={{color: 'black'}}>{props.title}</div>}
            onConfirm={props.onPressOK}
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
