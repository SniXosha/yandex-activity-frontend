import React, {ReactElement} from "react";
import {Container, makeStyles, WithStyles} from "@material-ui/core";
import { withStyles } from "@material-ui/core";

export default function ActivitiesContainer(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.content} maxWidth={false}>
        <ActivityColumn styleClass={classes.activityColumn}>
            <Activity size={17} image="surf" imageSize={250} title="Мужик в контрсвете"/>
            <Activity size={15} image="cook" imageSize={200} title="Смешные томаты"/>
            <Activity size={13} image="lasers" imageSize={200} title="Школьники"/>
        </ActivityColumn>
        <ActivityColumn styleClass={classes.activityColumn}>
            <Activity size={13} image="horse" imageSize={150} title="Конь ебать"/>
            <Activity size={17} image="planets" imageSize={200} title="Бэд трип"/>
            <Activity size={15} image="karting" imageSize={170} title="Врум врум"/>
        </ActivityColumn>
        <ActivityColumn styleClass={classes.activityColumn}>
            <Activity size={17} image="quest" imageSize={150} title="Держим дверь"/>
            <Activity size={15} image="tea" imageSize={150} title="Чифирнуть"/>
            <Activity size={13} image="sauna" imageSize={150} title="Три телки"/>
        </ActivityColumn>
        <ActivityColumn styleClass={classes.activityColumn}>
            <Activity size={13} image="games" imageSize={200} title="Смотрим на стол"/>
            <Activity size={17} image="rock" imageSize={150} title="Смеемся над камнем"/>
            <Activity size={15} image="stretching" imageSize={150} title="Шпагат"/>
        </ActivityColumn>
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
    return <StyledButton image={image} imageSize={imageSize} size={size} title={title}/>
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

const styles = {
    root: {
        margin: "1vw auto",
        width: (props: Styles) => props['size'] + "vw",
        height: (props: Styles) => props['size'] + "vw",
        lineHeight: (props: Styles) => props['size'] + "vw",
        borderRadius: "50%",
        fontSize: "1rem",
        color: "#FFF",
        border: "solid 1px",
        backgroundImage: (props: Styles) => `url(/images/${props['image']}.png)`,
        backgroundSize: (props: Styles) => `${props['imageSize']}%`,
        backgroundPosition: 'center',
        borderColor: "#000",
        textShadow: "1px 1px #000000"
},
};

const StyledButton = withStyles(styles)(({ classes, title, size, ...other }: ButtonStyles) => (
    <div className={classes.root}>{title}</div>
));
