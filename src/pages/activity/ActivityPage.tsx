import React, {ReactElement} from "react";
import {Container, makeStyles} from "@material-ui/core";


export default function ActivityPage(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.content} maxWidth={false}>
        Activity Page
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