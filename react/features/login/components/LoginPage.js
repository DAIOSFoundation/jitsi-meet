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

import * as loginActions from '../../../modules/login/actions';

import Cookies from 'universal-cookie';

const useStyles = makeStyles(styles);

const LoginPage = () => {

    const dispatch = useDispatch();

    const {
        jwt,
        userId,
        email,
    } = useSelector(
        (state) => ({
            jwt: state.login.jwt,
            userId: state.login.userId,
            email: state.login.email
        }), shallowEqual)

    const cookies = new Cookies();

    // 뒤로가기 이벤트
    useEffect(() => {
        window.history.pushState(null, '', location.href);

        window.onpopstate = () => {
            history.go(1);
            window.location.reload();
        };
    }, []);

    useEffect(() => {
        if (jwt) {
            cookies.set('jwt', jwt, { path: '/'});
        }else{
            console.log('jwt undefined !!!');
        }
    }, [jwt])

    useEffect(() => {
        if(cookies.get('jwt') !== 'undefined' && cookies.get('jwt') !== undefined){
            dispatch(changePageStatus({
                'pageStatus': 'meet'
            }))
            // _getRouteToRender 함수 호출 하기 위해 사용
            dispatch(setRoom())
        }
    },[cookies]);

    const successGoogleLogin = (res) => {

        let param = {
            'platform': 'google',
            'accessToken': res.accessToken,
            'name': res.profileObj.name,
        }

        console.log("successGoogleLogin", param)

        dispatch(loginActions.post_google_login(param))
    };

    //todo failedGoogleLogin
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
                        }}>DVision 간편 로그인</h2>
                        <h3 className={classes.cardTitle} style={{
                            fontWeight: 'bold',
                            color: 'black',
                            marginTop:15
                        }}>
                            Google 계정을 통해 DVision에 간편하게 로그인 할 수 있습니다.
                        </h3>
                        <CardBody>
                            <GridContainer justify="center">
                                <GoogleLogin
                                    clientId="372866353222-8hh2rk7jci4pm0m1gggiabiqp3grfd58.apps.googleusercontent.com"
                                    buttonText="Google 로그인"
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
