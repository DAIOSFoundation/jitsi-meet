import React from 'react';
import {useDispatch} from 'react-redux';
import {changePageStatus} from '../../pageStatus';
import {setRoom} from '../../base/conference';

const WelcomePageMain = () => {

    const dispatch = useDispatch();

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
        // 방만들기 페이지 화면으로 이동하기 위해 현재 페이지 상태 값을 'meet' 으로 바꿈
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

    return (
        <div style={{
            backgroundImage: `url(images/dvision_main_img01.png)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        }}>
            <div style={{position: 'relative', width: '100%', height: '100%'}}>
                <div style={{
                    width: '170px',
                    height: '70px',
                    paddingTop: 15,
                    paddingLeft: 30
                }}>
                    <img src={'images/watermark.png'} width={'100%'}
                         height={'100%'}/>
                </div>
                {/*<button onClick={onClickLogin} style={{*/}
                {/*    borderRadius: 35,*/}
                {/*    outline: 'none',*/}
                {/*    borderColor: 'white',*/}
                {/*    borderWidth: 1,*/}
                {/*    backgroundColor: 'white',*/}
                {/*    width: '150',*/}
                {/*    height: '50px',*/}
                {/*    fontSize: 19,*/}
                {/*    fontWeight: 'bold',*/}
                {/*    color: 'white',*/}
                {/*    textAlign: 'center',*/}
                {/*    marginRight: 10,*/}
                {/*    opacity: 0.8,*/}
                {/*    right:15,*/}
                {/*    top:25,*/}
                {/*    position:'absolute'*/}
                {/*}}>*/}
                {/*    <text style={{zIndex: 1, color: '#0d2656'}}>*/}
                {/*       로그인*/}
                {/*    </text>*/}
                {/*</button>*/}
                <div style={{
                    color: 'white',
                    width: 'auto',
                    height: 'auto',
                    marginLeft: '10%',
                    marginTop: '10%',
                }}>
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '5vmin',
                        marginBottom: 20,
                    }}>
                        <div>
                            <p>
                                최상의 화상 솔루션 DVision으로
                            </p>
                            <p>
                                최적의 비즈니스 환경을 경험해 보세요.
                            </p>
                        </div>
                    </div>

                    <div>
                        <span style={{
                            fontSize: '2vmin',
                            letterSpacing: 1,
                            opacity: 0.7
                        }}>DVision is the best of Video Business Solution in the Next Normal age.</span>
                    </div>

                    <button onClick={onClickMeet} style={{
                        borderRadius: 35,
                        outline: 'none',
                        borderColor: 'white',
                        borderWidth: 1,
                        backgroundColor: 'white',
                        marginTop: 155,
                        width: '200px',
                        height: '50px',
                        fontSize: 19,
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                        display: 'inline-block',
                        marginRight: 10,
                        opacity: 0.8
                    }}>
                        <text style={{zIndex: 1, color: '#0d2656'}}>
                            방 만들기
                        </text>
                    </button>
                    <a download={'DVision_사용매뉴얼_다이브(주)'} href={`/static/DVision_Manual.pdf`}>
                        <button style={{
                            borderRadius: 35,
                            outline: 'none',
                            borderColor: 'white',
                            borderWidth: 1,
                            backgroundColor: 'white',
                            marginTop: 155,
                            width: '200px',
                            height: '50px',
                            fontSize: 19,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign: 'center',
                            display: 'inline-block',
                            marginRight: 10,
                            opacity: 0.8
                        }}>
                            <text style={{zIndex: 1, color: '#0d2656'}}>
                                매뉴얼 다운로드
                            </text>
                        </button>
                    </a>
                    <button onClick={onClickPlan} style={{
                        borderRadius: 35,
                        outline: 'none',
                        borderColor: 'white',
                        borderWidth: 1,
                        backgroundColor: 'white',
                        marginTop: 15,
                        width: '200px',
                        height: '50px',
                        fontSize: 19,
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                        display: 'inline-block',
                        marginRight: 10,
                        opacity: 0.8
                    }}>
                        <text style={{zIndex: 1, color: '#0d2656'}}>
                            요금제 및 가격 정책
                        </text>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePageMain;




