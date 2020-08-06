import React from 'react';
import Main from './WelcomePageSub.web'

const WelcomePageWeb = () => {

    const onClickHref = () => {
        location.href='https://dvision.daios.net'
    }

    return (
        <div style={{width: '100%', height: '100%'}}>
            <img src={'images/division_web_main_img01.png'} width={'100%'}
                 height={'100%'} style={{position: 'fixed'}}/>
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
                <div style={{
                    color: 'white',
                    position: 'absolute',
                    width: 'auto',
                    height: 'auto',
                    top: '30%',
                    left: '10%',
                }}>
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: 50,
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
                        <span style={{fontSize: 21, letterSpacing: 1, opacity: 0.7}}>DVision is the best of Video Business Solution in the new-normal age.</span>
                    </div>

                    <button onClick={onClickHref} style={{
                        borderRadius: 35,
                        outline: 'none',
                        borderColor: 'white',
                        borderWidth: 1,
                        backgroundColor: 'transparent',
                        marginTop: 155,
                        width: '150px',
                        height: '50px',
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                        display: 'inline-block',
                        marginRight: 10,
                        opacity: 0.7
                    }}>
                        방 만들기
                    </button>
                    <button onClick={() => alert('현재 준비중 입니다.')} style={{
                        borderRadius: 35,
                        outline: 'none',
                        borderColor: 'white',
                        borderWidth: 1,
                        backgroundColor: 'transparent',
                        marginTop: 15,
                        width: '150px',
                        height: '50px',
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                        display: 'inline-block',
                        opacity: 0.7
                    }}>
                        제품소개서 다운로드
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePageWeb;

