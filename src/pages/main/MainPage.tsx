import React, {ReactElement} from "react";
import {Container, makeStyles} from "@material-ui/core";
import ActivitiesContainer from "pages/main/ActivitiesContainer";


export default function MainPage(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.content} maxWidth={false}>
        <ActivitiesContainer/>
    </Container>
}

const useStyles = makeStyles(theme => ({
    content: {
        height: "100%",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));