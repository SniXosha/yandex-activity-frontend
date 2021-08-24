import React, {ReactElement} from "react";
import {Container, makeStyles} from "@material-ui/core";
import {ActivityHeader} from "./ActivityHeader";
import { useParams } from "react-router-dom";
import {activityByName} from "data/activities";


export default function ActivityPage(): ReactElement {
    const classes = useStyles();
    let { name }: any = useParams();
    let activity = activityByName(name)

    return <Container className={classes.content} maxWidth={false}>
        <ActivityHeader image={activity.image.url} imageSize={activity.image.size} title={activity.name}/>
    </Container>
}

const useStyles = makeStyles(() => ({
    content: {
        height: "100%",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));