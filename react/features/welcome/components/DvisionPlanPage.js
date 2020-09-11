import React, {useEffect} from 'react';

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Table from "../../../components/Table/Table.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardIcon from "../../../components/Card/CardIcon.js";
import CardBody from "../../../components/Card/CardBody.js";

import {cardTitle} from "../../../components/jss/material-dashboard-pro-react.js";

const styles = {
    customCardContentClass: {
        paddingLeft: "0",
        paddingRight: "0"
    },
    cardIconTitle: {
        ...cardTitle,
        marginTop: "15px",
        marginBottom: "0px",
    }
};

const useStyles = makeStyles(styles);


const DvisionPlanPage = () => {

    // 뒤로가기 이벤트
    useEffect(() => {
        window.history.pushState(null, '', location.href);

        window.onpopstate = () => {
            history.go(1);
            window.location.reload();
        };
    }, []);

    const classes = useStyles();

    return (
        <GridContainer>
            <GridItem lg={10} xs={12} style={{margin: '0 auto'}}>
                <Card>
                    <CardHeader color="rose" icon style={{
                        backgroundColor: '#1B2638',
                        margin: 0}}>
                        {/*<CardIcon color="rose">*/}
                        {/*    <Assignment />*/}
                        {/*</CardIcon>*/}
                        <h4 className={classes.cardIconTitle}
                            style={{
                                marginTop: 30,
                                marginBottom: 50,
                                textAlign: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 30
                            }}>요금제 및 가격 정책</h4>
                    </CardHeader>
                    <CardBody style={{
                        textAlign: "center",
                        backgroundColor: '#1B2638'
                    }}>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={["구분", "Personal", "Personal Pro", "Team", "Enterprise"]}
                            tableData={[
                                ["가격", "무료", "월 계정당 3만원", "월 계정당 5만원", "영업에 문의"],
                                ["사용 가능 인원", "최대 2명", "최대 50명", "최대 200명", "무제한"],
                                ["동시접속 가능 인원", "최대 2명", "최대 10명", "최대 50명", "무제한"],
                                ["회의 제한 시간", "1회당 최대 1시간", "무제한", "무제한", "무제한"],
                                ["회의방 생성", "무제한", "무제한", "무제한", "무제한"],
                                ["화면 공유", "기본 제공", "기본 제공", "기본 제공", "기본 제공"],
                                ["채팅 기능", "기본 제공", "기본 제공", "기본 제공", "기본 제공"],
                                ["가상 배경", "미제공", "옵션 제공", "옵션 제공", "옵션 제공"],
                                ["보안 기능", "미제공", "옵션 제공", "옵션 제공", "옵션 제공"],
                                ["화이트보드 기능", "미제공", "옵션 제공", "옵션 제공", "옵션 제공"],
                                ["캘린더 기능", "미제공", "옵션 제공", "옵션 제공", "옵션 제공"],
                                ["공동문서 작성 기능", "미제공", "미제공", "옵션 제공", "옵션 제공"],
                                ["관리자 페이지", "미제공", "미제공", "옵션 제공", "기업에 맞춤 제공"],
                                ["녹화 기능", "미제공", "미제공", "옵션 제공", "기업에 맞춤 제공"],
                                ["저장 공간 제공", "미제공", "2G 기본 제공", "5G 기본 제공", "기업에 맞춤 제공"],
                                ["로고 브랜딩", "미제공", "옵션 제공(영업에 문의)", "옵션 제공(영업에 문의)", "기업에 맞춤 제공"],
                                ["기술 지원", "미제공", "옵션 제공(영업에 문의)", "옵션 제공(영업에 문의)", "기업에 맞춤 제공"],
                                ["모바일 앱 지원", "미제공", "옵션 제공(영업에 문의)", "옵션 제공(영업에 문의)", "옵션 제공(영업에 문의)"],
                                ["자동 회의록 기능(beta)", "미제공", "옵션 제공(영업에 문의)", "옵션 제공(영업에 문의)", "옵션 제공(영업에 문의)"],
                            ]}
                            coloredColls={[0]}
                            colorsColls={["rose"]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
};

export default DvisionPlanPage;
