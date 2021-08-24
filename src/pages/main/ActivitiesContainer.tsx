import React, {ReactElement} from "react";
import {Container, createStyles, makeStyles, Typography, WithStyles} from "@material-ui/core";
import {withStyles} from "@material-ui/core";

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
    return <Activity size={size} image={activity.image.url} imageSize={activity.image.size}
                     title={activity.name}/>
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

export default function ActivitiesContainer({activities}: any): ReactElement {
    const classes = useStyles();
    const splittedActivities = splitActivities(activities);

    const activityColumns = splittedActivitiesToColumns(classes.activityColumn, splittedActivities)

    return <Container className={classes.content} maxWidth={false}>
        {activityColumns}
    </Container>
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

interface ActivityProps {
    size: number,
    title: string,
    image: string,
    imageSize: number,
}

function Activity({title, size, image, imageSize}: ActivityProps): ReactElement {
    return <ActivityCircle image={image} imageSize={imageSize} size={size} title={title}/>
}

const useStyles = makeStyles(theme => ({
    content: {
        height: "100%",
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    activityColumn: {
        width: "17vw",
        margin: "1vw"
    }
}));

interface Styles {
    size: number;
    image: string;
    imageSize: number;

    [key: string]: any;
}

interface ButtonStyles extends WithStyles<typeof styles> {
    title: string;
    size: number;
    image: string;
    imageSize: number;
}

const styles = createStyles({
    root: {
        margin: "1vw auto",
        width: (props: Styles) => props['size'] + "vw",
        height: (props: Styles) => props['size'] + "vw",
        verticalAlign: "bottom",
        borderRadius: "50%",
        fontSize: "1rem",
        color: "#FFF",
        backgroundImage: (props: Styles) => `url(/images/${props['image']}.png)`,
        backgroundSize: (props: Styles) => `${props['imageSize']}%`,
        backgroundPosition: 'center',
        display: "flex",
        flexDirection: "column",
        alignSelf: "end",
        '&:hover': {
            border: 'solid 5px',
            borderColor: "#fcee7c",
            transition: 'transform .2s',
        },
    },
    title: {
        marginTop: "auto",
        marginBottom: "3vw",
        marginLeft: "3vw",
        marginRight: "3vw",
        backgroundColor: "white",
        color: "black",
        borderRadius: "15%",
    }
});

const ActivityCircle = withStyles(styles)(({classes, title, size, ...other}: ButtonStyles) => (
    <div className={classes.root}>
        <Typography className={classes.title}>{title}</Typography>
    </div>
));
