import React, {ReactElement} from "react";
import {Container, makeStyles} from "@material-ui/core";
import {ActivityHeader} from "./ActivityHeader";
import { useParams } from "react-router-dom";
import {activityByName} from "data/activities";
import {ActivityBody} from "./ActivityBody";


export default function ActivityPage(): ReactElement {
    const classes = useStyles();
    let { name }: any = useParams();
    let activity = activityByName(name)

    return <Container className={classes.content} maxWidth={false}>
        <ActivityHeader image={activity.image.url} size={activity.image.poster.size} position={activity.image.poster.position} title={activity.name}/>
        <ActivityBody activity={activity}/>
    </Container>
}

const useStyles = makeStyles(() => ({
    content: {
        height: "100%",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));