import React, {ReactElement} from "react";
import {Container, makeStyles} from "@material-ui/core";

export default function ActivitiesContainer(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.content} maxWidth={false}>
        <Activity styleClass={classes.circle} title="Картинг"/>
        <Activity styleClass={classes.circle} title="Серфинг"/>
        <Activity styleClass={classes.circle} title="Велосипед"/>
    </Container>
}

interface ActivityProps {
    styleClass: string,
    title: string,
}

function Activity({title, styleClass}: ActivityProps): ReactElement {
    return <div className={styleClass}>{title}</div>
}

const useStyles = makeStyles(theme => ({
    content: {
        height: "100%",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    circle: {
        margin: theme.spacing(2),
        width: "10rem",
        height: "10rem",
        lineHeight: "10rem",
        borderRadius: "50%",
        fontSize: "1rem",
        color: "#fff",
        textAlign: "center",
        background: "#000"
    }
}));