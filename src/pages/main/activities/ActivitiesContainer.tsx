import React, {ReactElement} from "react";
import {Container, makeStyles} from "@material-ui/core";
import {flex} from "styles/common";
import {ActivityCircle} from "pages/main/activities/ActivitiesCircle";

export default function ActivitiesContainer({activities}: any): ReactElement {
    const classes = useStyles();
    const activityColumns = splittedActivitiesToColumns(classes.activityColumn, splitActivities(activities))

    return <Container className={classes.content} maxWidth={false}>
        {activityColumns}
    </Container>
}


function splitActivities(activities: any[]) {
    let n = Math.min(activities.length, 4);
    let result = [];
    for (let i = 0; i < n; i++) {
        let column = []
        for (let j = 0; j < activities.length; j++) {
            if (j % n === i) column.push(activities[j])
        }
        result.push(column)
    }
    return result;
}

const activityDescriptionToElement = (size: number, activity: any): ReactElement => {
    return <ActivityCircle size={size} image={activity.image.url} imageSize={activity.image.size}
                     title={activity.name} id={activity.id}/>
}

const activitiesColumnToElement = (styleClass: string, activities: any[], sizes: number[]): ReactElement => {
    return <ActivityColumn styleClass={styleClass}>
        {activities.map((activity, index) => activityDescriptionToElement(sizes[index % 3], activity))}
    </ActivityColumn>
}

const splittedActivitiesToColumns = (styleClass: string, splittedActivities: any[]): ReactElement[] => {
    let sizes = [[17, 15, 13], [13, 17, 15]]

    return splittedActivities.map((activities, index) => activitiesColumnToElement(styleClass, activities, sizes[index % 2]))
}

interface ActivityColumnProps {
    children: ReactElement | ReactElement[],
    styleClass: string
}

function ActivityColumn({children, styleClass}: ActivityColumnProps) {
    return <Container className={styleClass}>
        {children}
    </Container>
}

const useStyles = makeStyles(() => ({
    content: flex('row', {
        height: "100%",
        width: "100%",
        justifyContent: 'center',
    }),
    activityColumn: {
        width: "17vw",
        margin: "1vw"
    }
}));
