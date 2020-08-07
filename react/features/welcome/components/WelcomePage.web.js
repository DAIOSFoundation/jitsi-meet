import React from 'react';

const WelcomePageWeb = () => {

    const onClickHref = () => {
        location.href = 'https://dvision-sub.daios.net'
    }

    return (
        <div style={{
            backgroundImage: `url(images/dvision_main_img01.png)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center center'
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
                <div style={{
                    color: 'white',
                    width: 'auto',
                    height: 'auto',
                    marginLeft:'10%',
                    marginTop:'10%',
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
                        }}>DVision is the best of Video Business Solution in the new-normal age.</span>
                    </div>

                    <button onClick={onClickHref} style={{
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
                        opacity:0.8
                    }}>
                        <text style={{zIndex:1, color:'#0d2656'}}>
                            방 만들기
                        </text>
                    </button>
                    <button onClick={() => alert('현재 준비중 입니다.')} style={{
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
                        opacity: 0.8
                    }}>
                        <text style={{zIndex:1, color:'#0d2656'}}>
                           제품소개서 다운로드
                        </text>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePageWeb;



