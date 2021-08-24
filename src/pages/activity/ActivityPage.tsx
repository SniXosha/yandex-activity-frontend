import React, {ReactElement} from "react";
import {Container, makeStyles} from "@material-ui/core";
import {ActivityHeader} from "./ActivityHeader";


export default function ActivityPage(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.content} maxWidth={false}>
        <ActivityHeader image={"surf"} imageSize={200} size={17} title={"Вейксерф"}/>
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