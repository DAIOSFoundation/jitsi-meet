import React, {useEffect, useState} from "react";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/LockOutlined"
import VerifiedUserOutlined from "@material-ui/icons/VerifiedUserOutlined"

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";

import styles from "../../../components/jss/registerPageStyle";
import ValidationInput
    from '../../../components/ValidationInput/ValidationInput';

import {useHistory} from 'react-router-dom';
import * as signUpActions from '../../../modules/signUp/actions';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {
    regNickName,
    regEmail,
    regAccountPassWord
} from '../../../utils/regularExpression';
import BasicLoading from '../../../components/Loading/BasicLoading';
import BasicModal from '../../../components/Modal/BasicModal';
import * as modalActions from '../../../modules/modal/actions';

const useStyles = makeStyles(styles);

const SignUpPage = () => {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const {
        email,
        isValidEmail,
        nickName,
        isValidNickName,
        password,
        isValidPassword,
        passwordVerify,
        loading,
        signUpMsg
    } = useSelector((state) => ({
        email: state.signUp.email,
        isValidEmail: state.signUp.isValidEmail,
        nickName: state.signUp.nickName,
        isValidNickName: state.signUp.isValidNickName,
        password: state.signUp.password,
        isValidPassword: state.signUp.isValidPassword,
        passwordVerify: state.signUp.passwordVerify,
        loading: state.loading['sign_up/POST_SIGN_UP'],
        signUpMsg: state.signUp.signUpMsg,
    }), shallowEqual)

    useEffect(() => {
        return () => {
            dispatch(signUpActions.change_sign_up_clear())
        }
    }, [])

    useEffect(() => {
        if (signUpMsg === 'signUpSuccess') {
            history.push({
                pathname: '/auth/login'
            })
        }
    }, [signUpMsg])

    const [test, setTest] = useState(null);

    const textChangeActions = {
        email: signUpActions.change_email,
        nickName: signUpActions.change_nickName,
        password: signUpActions.change_password,
        passwordVerify: signUpActions.change_password_verify,
    }

    const textValidActions = {
        email: signUpActions.change_is_valid_email,
        nickName: signUpActions.change_is_valid_nickName,
        password: signUpActions.change_is_valid_password,
    }

    const onChange = (e, state, valid) => {
        dispatch(textChangeActions[state](e.target.value));
        if (valid === true || valid === false) {
            dispatch(textValidActions[state](valid))
        }
    }

    const onPressCancel = () => {
        history.push({
            pathname: '/'
        })
    }

    const onPressSignUp = () => {
        if (isValidEmail || isValidNickName || isValidPassword) {
            dispatch(modalActions.change_modal_message('입력 형식이 올바르지 않습니다.'))
        } else if (password !== passwordVerify) {
            dispatch(modalActions.change_modal_message('비밀번호가 일치하지 않습니다.'))
        } else {
            let param = {
                nickName: nickName,
                email: email,
                password: password
            }

            dispatch(signUpActions.post_sign_up(param))
        }
    }

    const onKeyPress = (key) => {
       if(key === 'Enter'){
           onPressSignUp()
       }
    }

    return (
        <div className={classes.container}>
            <BasicModal/>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={10}>
                    <Card className={classes.cardSignup}>
                        {
                            loading ? <BasicLoading/> : null
                        }
                        <h2 className={classes.cardTitle} style={{
                            fontWeight: 500,
                            marginBottom: '50px'
                        }}>DVision 회원가입</h2>
                        <CardBody>
                            <GridContainer justify="center" style={{
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}>
                                <GridItem xs={12} sm={12} md={5}>
                                    <div className='sign-up-left-illust'/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={5}>
                                    <ValidationInput
                                        id={'name'}
                                        placeholder={'닉네임, 추후 변경 가능합니다.'}
                                        fullWidth
                                        valid={regNickName}
                                        value={nickName}
                                        onChangeText={(e, valid) => onChange(e, 'nickName', valid)}
                                        errorText={'닉네임 형식은 한글 또는 숫자 또는 영문 5~15자리 입니다.'}
                                        onKeyPress={onKeyPress}
                                        inputProps={{
                                            startAdornment: (
                                                <InputAdornment
                                                    position="start">
                                                    <Face/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        style={{
                                            marginTop: 25
                                        }}
                                    />
                                    <ValidationInput
                                        id={'email'}
                                        placeholder={'이메일을 입력해주세요.'}
                                        fullWidth
                                        valid={regEmail}
                                        value={email}
                                        onChangeText={(e, valid) => onChange(e, 'email', valid)}
                                        errorText={'이메일형식이 아닙니다.'}
                                        onKeyPress={onKeyPress}
                                        inputProps={{
                                            startAdornment: (
                                                <InputAdornment
                                                    position="start">
                                                    <Email/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        style={{
                                            marginTop: 25
                                        }}
                                    />
                                    <ValidationInput
                                        id={'password'}
                                        placeholder={'비밀번호를 입력해주세요.'}
                                        fullWidth
                                        valid={regAccountPassWord}
                                        value={password}
                                        onChangeText={(e, valid) => onChange(e, 'password', valid)}
                                        errorText={'비밀번호 형식은 특수문자,문자,숫자 포함 형태의 8~15자리 입니다.'}
                                        onKeyPress={onKeyPress}
                                        inputProps={{
                                            startAdornment: (
                                                <InputAdornment
                                                    position="start">
                                                    <Lock/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        type={'password'}
                                        style={{
                                            marginTop: 25
                                        }}
                                    />
                                    <ValidationInput
                                        id={'passwordVerify'}
                                        placeholder={'비밀번호 확인'}
                                        fullWidth
                                        value={passwordVerify}
                                        onChangeText={(e) => onChange(e, 'passwordVerify')}
                                        onKeyPress={onKeyPress}
                                        inputProps={{
                                            startAdornment: (
                                                <InputAdornment
                                                    position="start">
                                                    <VerifiedUserOutlined/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        type={'password'}
                                        style={{
                                            margin: '25px 0 10px 0',
                                        }}
                                    />
                                </GridItem>
                                <div style={{
                                    marginTop: 25,
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <button
                                        className='signUpCancelButton'
                                        onClick={onPressCancel}>
                                        취소
                                    </button>
                                    <button
                                        className='signUpInsertButton'
                                        onClick={onPressSignUp}
                                    >
                                        등록
                                    </button>
                                </div>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
};

export default React.memo(SignUpPage);
