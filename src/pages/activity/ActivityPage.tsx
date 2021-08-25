import React, {ReactElement} from "react";
import {Container, makeStyles} from "@material-ui/core";
import {ActivityHeader} from "./ActivityHeader";
import {useParams} from "react-router-dom";
import {ActivityBody} from "./ActivityBody";
import {activityByName} from "data/api";
import {flex} from "styles/common";


export default function ActivityPage(): ReactElement {
    const classes = useStyles();
    let {name}: any = useParams();
    let activity = activityByName(name)

    return <Container className={classes.content} maxWidth={false}>
        <ActivityHeader image={activity.image.url} size={activity.image.poster.size}
                        position={activity.image.poster.position} title={activity.name}/>
        <ActivityBody activity={activity}/>
    </Container>
}

const useStyles = makeStyles(() => ({
    content: flex('column', {
        height: "100%",
        width: "100%",
        alignItems: 'center',
    })
}));