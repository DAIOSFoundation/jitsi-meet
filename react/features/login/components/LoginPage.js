import React, {useEffect, useState} from "react";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from '@material-ui/icons/AccountCircle';

// @material-ui/icons
import Lock from "@material-ui/icons/Lock";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from '../../../components/Card/CardHeader';
import CardFooter from '../../../components/Card/CardFooter';
import CardBody from "../../../components/Card/CardBody.js";

import ValidationInput
    from '../../../components/ValidationInput/ValidationInput';

import styles from "../../../components/jss/loginPageStyle";

import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import Cookies from 'universal-cookie';
import * as authActions from '../../../modules/auth/actions';
import BasicLoading from '../../../components/Loading/BasicLoading';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(styles);

const LoginPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const {
        jwt,
        id,
        password,
        loading
    } = useSelector(
        (state) => ({
            jwt: state.auth.jwt,
            id: state.auth.id,
            password: state.auth.password,
            loading: state.loading['auth/POST_LOGIN'],
        }), shallowEqual)

    const [cardAnimaton, setCardAnimation] = useState("cardHidden");

    const cookies = new Cookies();
    const classes = useStyles();

    useEffect(() => {
        const expires = new Date();
        expires.setDate(Date.now() + 3600)

        if (jwt) {
            cookies.set('jwt', jwt, {
                path: '/',
                maxAge: 3600,
                secure: true
            });
        } else {
            console.log('jwt undefined !!!');
        }
    }, [jwt])

    useEffect(() => {
        // if (cookies.get('jwt') && cookies.get('room')) {
        //     window.location.href = `/${cookies.get('room')}`
        //     cookies.remove('room')
        // } else
        if (cookies.get('jwt')) {
            window.location.href = '/#'
        } else {
            console.log('cookies && room undefined !!!')
        }
    }, [cookies]);

    const successGoogleLogin = (res) => {

        let param = {
            'platform': 'google',
            'accessToken': res.accessToken,
            'name': res.profileObj.name,
            'origin': window.location.origin
        }

        console.log("successGoogleLogin")

        dispatch(authActions.post_google_login(param))
    };

    const onChangeID = (value) => {
        dispatch(authActions.change_id(value))
    }

    const onChangePassWord = (value) => {
        dispatch(authActions.change_password(value))
    }

    const loginSubmit = () => {
        let param = {
            'origin': window.location.origin,
            userId: id,
            password: password
        }

        dispatch(authActions.post_login(param))

    }

    // 메인페이지 이동
    const onPressMain = () => {
        history.push({
            pathname: `/`,
        });
    }
    setTimeout(function () {
        setCardAnimation("");
    }, 700);

    return (
        <div className={classes.container}
             style={{display: 'flex', alignItems: 'center', height: '100%'}}
        >
            {/*<GridContainer justify="center">*/}
            {/*    <GridItem xs={12} sm={12} md={10}>*/}
            {/*        <Card className={classes.cardSignup}>*/}
            {/*            <h2 className={classes.cardTitle} style={{*/}
            {/*                fontWeight: 'bold',*/}
            {/*                color: 'black'*/}
            {/*            }}>DVision 로그인</h2>*/}
            {/*            <h3 className={classes.cardTitle} style={{*/}
            {/*                fontWeight: 'bold',*/}
            {/*                color: 'black',*/}
            {/*                marginTop: 15*/}
            {/*            }}>*/}
            {/*            </h3>*/}
            {/*            <CardBody>*/}
            {/*                <GridContainer justify="center">*/}

            {/*                </GridContainer>*/}
            {/*            </CardBody>*/}
            {/*        </Card>*/}
            {/*    </GridItem>*/}
            {/*</GridContainer>*/}
            <GridContainer justify="center">
                <GridItem xs={12} sm={6} md={4}>
                    <form>
                        <Card login className={classes[cardAnimaton]}
                              style={{padding: 15}}>
                            {
                                loading ?
                                    <div style={{
                                        marginTop: -15,
                                        marginLeft: -15
                                    }}>
                                        <BasicLoading/>
                                    </div>
                                    :
                                    null
                            }
                            <CardHeader
                                className={`${classes.cardHeader} ${classes.textCenter}`}
                                style={{
                                    backgroundColor: '#0960ff',
                                    marginTop: '-35px',
                                    borderRadius: 7
                                }}
                            >
                                <h3 className={classes.cardTitle} style={{
                                    marginBottom: 0,
                                    fontWeight: 500
                                }}>DVision</h3>
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <ValidationInput
                                        id={'id'}
                                        label={'아이디'}
                                        placeholder={'아이디 입력'}
                                        fullWidth
                                        value={id}
                                        onChangeText={(e) => onChangeID(e.target.value)}
                                    />
                                </div>
                                <div style={{marginTop: 15}}>
                                    <ValidationInput
                                        id={'password'}
                                        label={'비밀번호'}
                                        placeholder={'비밀번호 입력'}
                                        fullWidth
                                        value={password}
                                        onChangeText={(e) => onChangePassWord(e.target.value)}
                                        type={'password'}
                                    />
                                </div>
                            </CardBody>
                            <CardFooter
                                className={classes.justifyContentCenter}>
                                <Button style={{
                                    color: '#0960ff',
                                    fontWeight: 'bold'
                                }} simple
                                        size="lg" block onClick={loginSubmit}>
                                    로그인
                                </Button>
                            </CardFooter>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>
                                <button className='loginMainMove'
                                        onClick={onPressMain}>
                                    메인으로가기
                                </button>
                            </div>
                        </Card>
                    </form>
                </GridItem>
            </GridContainer>
        </div>
    );
};

export default LoginPage;
