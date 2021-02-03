import {handleActions} from 'redux-actions';
import {produce, createDraft, finishDraft} from 'immer';
import * as SINGUP from './actions';

const initialState = {
    email: '', // 회원가입 계정 이메일
    isValidEmail: true, // 회원가입 계정 이메일 유효성 검사
    nickName: '', // 회원가입 닉네임
    isValidNickName: true, // 회원가입 닉네임 유효성 검사
    password: '', // 회원가입 비밀번호
    isValidPassword: true, // 회원가입 비밀번호 유효성 검사
    passwordVerify: '', // 회원가입 비밀번호 확인
    signUpMsg: null, // 회원가입 응답에 따른 메세지 정보 저장
}

const signUp = handleActions({
    [SINGUP.CHANGE_EMAIL]: (state, action) => {
        console.log('CHANGE_EMAIL', action.payload);
        return produce(state, (draft) => {
            draft.email = action.payload;
        })
    },
    [SINGUP.CHANGE_IS_VALID_EMAIL]: (state, action) => {
        console.log('CHANGE_IS_VALID_EMAIL', action.payload);
        return produce(state, (draft) => {
            draft.isValidEmail = action.payload;
        })
    },
    [SINGUP.CHANGE_NICKNAME]: (state, action) => {
        console.log('CHANGE_NICKNAME', action.payload);
        return produce(state, (draft) => {
            draft.nickName = action.payload;
        })
    },
    [SINGUP.CHANGE_IS_VALID_NICKNAME]: (state, action) => {
        console.log('CHANGE_IS_VALID_NICKNAME', action.payload);
        return produce(state, (draft) => {
            draft.isValidNickName = action.payload;
        })
    },
    [SINGUP.CHANGE_PASSWORD]: (state, action) => {
        console.log('CHANGE_PASSWORD', action.payload);
        return produce(state, (draft) => {
            draft.password = action.payload;
        })
    },
    [SINGUP.CHANGE_IS_VALID_PASSWORD]: (state, action) => {
        console.log('CHANGE_IS_VALID_PASSWORD', action.payload);
        return produce(state, (draft) => {
            draft.isValidPassword = action.payload;
        })
    },
    [SINGUP.CHANGE_PASSWORD_VERIFY]: (state, action) => {
        console.log('CHANGE_PASSWORD_VERIFY', action.payload);
        return produce(state, (draft) => {
            draft.passwordVerify = action.payload;
        })
    },
    [SINGUP.POST_SIGN_UP_SUCCESS]: (state, action) => {
        console.log('POST_SIGN_UP_SUCCEㅠㅁㄴㄷSS', action.payload);
        return produce(state, (draft) => {
            draft.signUpMsg = 'signUpSuccess'
        })
    },
    [SINGUP.POST_SIGN_UP_FAILED]: (state, action) => {
        console.log('POST_SIGN_UP_FAILED', action.payload);
        return produce(state, (draft) => {
            draft.signUpMsg = action.payload
        })
    },
    [SINGUP.CHANGE_SIGN_UP_MSG]: (state, action) => {
        console.log('CHANGE_SIGN_UP_MSG', action.payload);
        return produce(state, (draft) => {
            draft.signUpMsg = action.payload
        })
    },
    [SINGUP.CHANGE_SIGN_UP_CLEAR]: (state, action) => {
        console.log('CHANGE_SIGN_UP_CLEAR', action.payload);
        const draft = createDraft(initialState);
        return finishDraft(draft);
    }
}, initialState)

export default signUp
