import React, {useEffect} from "react";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";

import styles from "../../../components/jss/loginPageStyle";

import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {changePageStatus} from '../../pageStatus';
import {setRoom} from '../../base/conference';

import {GoogleLogin} from 'react-google-login';

import * as loginActions from '../../../modules/login/action';

const useStyles = makeStyles(styles);

const LoginPage = () => {

    const dispatch = useDispatch();

    const {userId} = useSelector(
        (state) => ({
            userId: state.login.userId
        }), shallowEqual)

    console.log("userId", userId);

    // 뒤로가기 이벤트
    useEffect(() => {
        window.history.pushState(null, '', location.href);

        window.onpopstate = () => {
            history.go(1);
            window.location.reload();
        };
    }, []);

    const onClickMeet = () => {
        // 방만들기 페이지 화면으로 이동하기 위해 현재 페이지 상태 값을 'meet' 으로 바꿈
        dispatch(changePageStatus({
            'pageStatus': 'meet'
        }))
        // _getRouteToRender 함수 호출 하기 위해 사용
        dispatch(setRoom())
    }

    const onChangeText = (e) => {
        dispatch(loginActions.login_change_id(e.target.value))
    }

    const successGoogleLogin = (res) => {
        console.log("successGoogleLogin", res)
    };

    const failedGoogleLogin = (res) => {
        console.log("failedGoogleLogin", res)
    }

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={10}>
                    <Card className={classes.cardSignup}>
                        <h2 className={classes.cardTitle} style={{
                            fontWeight: 'bold',
                            color: 'black'
                        }}>로그인</h2>
                        <CardBody>
                            <GridContainer justify="center">
                                <GoogleLogin
                                    clientId="106358503881-urr58iic37alnh5u57m7fn7huelmiuij.apps.googleusercontent.com"
                                    buttonText="로그인"
                                    onSuccess={successGoogleLogin}
                                    onFailure={failedGoogleLogin}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
};

export default LoginPage;
