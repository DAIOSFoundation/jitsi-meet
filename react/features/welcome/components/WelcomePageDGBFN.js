import React from 'react';
import {useDispatch} from 'react-redux';
import {changePageStatus} from '../../pageStatus';
import {setRoom} from '../../base/conference';
import {useCookies} from 'react-cookie';

const WelcomePageDGBFN = () => {

    const dispatch = useDispatch();

    const [cookies, removeCookie] = useCookies(['jwt']);

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
        removeCookie('jwt')
    }

    return (
        <div style={{
            backgroundColor:'#256DD6',
            backgroundSize: 'cover',
            width:'100%',
            height:'100%'
        }}>
            <div style={{position: 'relative', width: '100%', height: '100%'}}>
                <div style={{position:'absolute', bottom:0, right:0, width:'34%',height:'80%'}}>
                    <img src={'images/dgbfn/dandi.png'} width={'100%'}
                         height={'100%'}/>
                </div>
                <div style={{position:'absolute', bottom:30, left:30}}>
                    <img src={'images/dgbfn/dgbbank_logo.png'} width={198}
                         height={34}/>
                </div>
                <div style={{
                    width: '170px',
                    height: '70px',
                    paddingTop: 15,
                    paddingLeft: 30
                }}>
                    <img src={'images/watermark.png'} width={'100%'}
                         height={'100%'}/>
                </div>
                {
                    (cookies.jwt !== 'undefined' && cookies.jwt !== undefined)?
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
                    marginTop: '5%',
                }}>
                    <div style={{width:'40%', height:'9%'}}>
                        <img src={'images/dgbfn/collab.png'} width={'100%'}
                             height={'100%'}/>
                    </div>

                    <div style={{margin:'30px 0 100px 0', width:'35%', height:'18%'}}>
                        <img src={'images/dgbfn/main_text01.png'} width={'100%'}
                             height={'100%'}/>
                    </div>

                    <button onClick={onClickMeet}
                            className='welcomePageMainButton'>
                        <text style={{zIndex: 1, color: '#0042A2'}}>
                            방 만들기
                        </text>
                    </button>
                    <a download={'DVision_사용매뉴얼_다이브(주)'}
                       href={`/static/DVision_Manual.pdf`}>
                        <button className='welcomePageMainButton'>
                            <text style={{zIndex: 1, color: '#0042A2'}}>
                                매뉴얼 다운로드
                            </text>
                        </button>
                    </a>
                    <button onClick={onClickPlan}
                            className='welcomePageMainButton'>
                        <text style={{zIndex: 1, color: '#0042A2'}}>
                            요금제 및 가격 정책
                        </text>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePageDGBFN;




