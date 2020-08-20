import React, {useEffect} from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import Home from "@material-ui/icons/Home";
import Business from "@material-ui/icons/Business";
import AccountBalance from "@material-ui/icons/AccountBalance";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";

import styles from "../../../components/jss/pricingPageStyle.js";

const useStyles = makeStyles(styles);


const DvisionPlanPage = () => {

    // 뒤로가기 이벤트
    useEffect(() => {
        window.history.pushState(null, '', location.href);

        window.onpopstate = () => {
            history.go(1);
            window.location.href = 'https://dvision.daib.io'
        };
    },[]);

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                    <h2 className={classes.title}>Pick the best plan for you</h2>
                    <h5 className={classes.description}>
                        You have Free Unlimited Updates and Premium Support on each package.
                    </h5>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={3}>
                    <Card pricing raised>
                        <CardBody pricing>
                            <h6 className={classes.cardCategory}>SMALL COMPANY</h6>
                            <h3 className={`${classes.cardTitle} ${classes.marginTop30}`}>
                                $29
                            </h3>
                            <p className={classes.cardDescription}>
                                This is good if your company size is between 2 and 10 Persons.
                            </p>
                            <Button round color="rose">
                                Choose plan
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                    <Card pricing raised>
                        <CardBody pricing>
                            <h6 className={classes.cardCategory}>SMALL COMPANY</h6>
                            <h3 className={`${classes.cardTitle} ${classes.marginTop30}`}>
                                $29
                            </h3>
                            <p className={classes.cardDescription}>
                                This is good if your company size is between 2 and 10 Persons.
                            </p>
                            <Button round color="rose">
                                Choose plan
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem> <GridItem xs={12} sm={12} md={3}>
                <Card pricing raised>
                    <CardBody pricing>
                        <h6 className={classes.cardCategory}>SMALL COMPANY</h6>
                        <h3 className={`${classes.cardTitle} ${classes.marginTop30}`}>
                            $29
                        </h3>
                        <p className={classes.cardDescription}>
                            This is good if your company size is between 2 and 10 Persons.
                        </p>
                        <Button round color="rose">
                            Choose plan
                        </Button>
                    </CardBody>
                </Card>
            </GridItem> <GridItem xs={12} sm={12} md={3}>
                <Card pricing raised>
                    <CardBody pricing>
                        <h6 className={classes.cardCategory}>SMALL COMPANY</h6>
                        <h3 className={`${classes.cardTitle} ${classes.marginTop30}`}>
                            $29
                        </h3>
                        <p className={classes.cardDescription}>
                            This is good if your company size is between 2 and 10 Persons.
                        </p>
                        <Button round color="rose">
                            Choose plan
                        </Button>
                    </CardBody>
                </Card>
            </GridItem>
            </GridContainer>
        </div>
    );
};

export default DvisionPlanPage;
