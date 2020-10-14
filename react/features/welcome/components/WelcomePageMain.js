import React from 'react';
import {useDispatch} from 'react-redux';
import {changePageStatus} from '../../pageStatus';
import {setRoom} from '../../base/conference';
import {useHistory} from "react-router-dom";

const WelcomePageMain = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    // MainPage 방만들기 버튼 클릭 시 이벤트
    const onClickMeet = () => {
        history.push({
            pathname: `/meetingRoom`,
        });
    }

    // MainPage 요금제 및 가격정책 버튼 클릭 시 이벤트
    const onClickPlan = () => {
        dispatch(changePageStatus({
            'pageStatus': 'plan'
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
                    height: '35px',
                    paddingTop: 15,
                    paddingLeft: 30
                }}>
                    <img src={'images/watermark.png'} width={'100%'}
                         height={'100%'}/>
                </div>
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

                    <div style={{marginBottom: 150}}>
                        <span style={{
                            fontSize: '2vmin',
                            letterSpacing: 1,
                            opacity: 0.7
                        }}>DVision is the best of Video Business Solution in the Next Normal age.</span>
                    </div>

                    <button onClick={onClickMeet}
                            className='welcomePageMainButton'>
                        <text style={{zIndex: 1, color: '#0d2656'}}>
                            방 만들기
                        </text>
                    </button>
                    <a download={'DVision_사용매뉴얼_다이브(주)'}
                       href={`/static/DVision_Manual.pdf`}>
                        <button className='welcomePageMainButton'>
                            <text style={{zIndex: 1, color: '#0d2656'}}>
                                매뉴얼 다운로드
                            </text>
                        </button>
                    </a>
                    <button onClick={onClickPlan}
                            className='welcomePageMainButton'>
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




