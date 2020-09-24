import React from 'react';
import {useDispatch} from 'react-redux';
import {changePageStatus} from '../../pageStatus';
import {setRoom} from '../../base/conference';
import Cookies from 'universal-cookie';

const WelcomePageAllLang = () => {

    const dispatch = useDispatch();

    const cookies = new Cookies();

    // MainPage 방만들기 버튼 클릭 시 이벤트
    const onClickMeet = () => {
        // 방만들기 페이지 화면으로 이동하기 위해 현재 페이지 상태 값을 'meet' 으로 바꿈
        dispatch(changePageStatus({
            'pageStatus': 'meet'
        }))
        // _getRouteToRender 함수 호출 하기 위해 사용
        dispatch(setRoom())
    }

    // MainPage 요금제 및 가격정책 버튼 클릭 시 이벤트
    const onClickPlan = () => {
        dispatch(changePageStatus({
            'pageStatus': 'plan'
        }))
        // _getRouteToRender 함수 호출 하기 위해 사용
        dispatch(setRoom())
    }

    // Google 로그인
    const onClickLogin = () => {
        dispatch(changePageStatus({
            'pageStatus': 'login'
        }))
        // _getRouteToRender 함수 호출 하기 위해 사용
        dispatch(setRoom())
    }

    // 로그아웃
    const onClickLogout = () => {
        cookies.remove('jwt')
        window.location.reload();
    }

    return (
        <div style={{
            backgroundColor: '#85CDED',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%'
        }}>
            <div style={{position: 'relative', width: '100%', height: '100%'}}>
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '34%',
                    height: '50%'
                }}>
                    <img src={'images/allLang/allLangCharacter.png'}
                         width={'100%'}
                         height={'100%'}/>
                </div>
                <div style={{
                    position: 'absolute',
                    top: '17%',
                    right: 0,
                    width: '25%',
                    height: '20%'
                }}>
                    <img src={'images/allLang/allLangCloud_01.png'}
                         width={'100%'}
                         height={'100%'}/>
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '25%',
                    height: '20%'
                }}>
                    <img src={'images/allLang/allLangCloud_02.png'}
                         width={'100%'}
                         height={'100%'}/>
                </div>
                <div style={{
                    width: '170px',
                    height: '35px',
                    paddingTop: 15,
                    paddingLeft: 30
                }}>
                    <img src={'images/watermark.png'} width={'100%'}
                         height={'100%'}/>
                </div>
                {
                    (cookies.get('jwt') !== 'undefined' && cookies.get('jwt') !== undefined) ?
                        <button onClick={onClickLogout}
                                className='welcomePageMainAuthButton'>
                            <text style={{zIndex: 1, color: '#0d2656'}}>
                                로그아웃
                            </text>
                        </button>
                        :
                        <button onClick={onClickLogin}
                                className='welcomePageMainAuthButton'>
                            <text style={{zIndex: 1, color: '#0d2656'}}>
                                로그인
                            </text>
                        </button>
                }
                <div style={{
                    marginLeft: '10%',
                    marginTop: '8%',
                }}>
                    <div style={{width: '30%', height: '9%'}}>
                        <img src={'images/allLang/collab.png'} width={'100%'}
                             height={'100%'}/>
                    </div>

                    <div style={{
                        margin: '70px 0 80px 0',
                        width: '33%',
                        height: '18%'
                    }}>
                        <a target='_blank'
                           href="https://www.all-lang.com/launch/index.html">
                            <img src={'images/allLang/allLangText.png'}
                                 width={'100%'}
                                 height={'100%'}/>
                        </a>
                    </div>

                    <button style={{backgroundColor: '#314C99'}}
                            onClick={onClickMeet}
                            className='welcomePageMainButton'>
                        <text style={{zIndex: 1, color: '#FFFFFF'}}>
                            방 만들기
                        </text>
                    </button>
                    <a download={'DVision_사용매뉴얼_다이브(주)'}
                       href={`/static/DVision_Manual.pdf`}>
                        <button
                            style={{backgroundColor: '#314C99'}}
                            className='welcomePageMainButton'>
                            <text style={{zIndex: 1, color: '#FFFFFF'}}>
                                매뉴얼 다운로드
                            </text>
                        </button>
                    </a>
                    <button style={{backgroundColor: '#314C99'}}
                            onClick={onClickPlan}
                            className='welcomePageMainButton'>
                        <text style={{zIndex: 1, color: '#FFFFFF'}}>
                            요금제 및 가격 정책
                        </text>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePageAllLang;




