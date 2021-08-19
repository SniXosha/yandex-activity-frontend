import React, {ReactElement} from "react";
import {Button, Container, makeStyles, Slider, Typography, withStyles} from "@material-ui/core";
import ActivitiesContainer from "pages/main/ActivitiesContainer";
import WbSunnyIcon from '@material-ui/icons/WbSunny';

export default function MainPage(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.content} maxWidth={false}>
        <Container className={classes.topBar}>
            <ChooseBar/>
            <WeekendInfoBar/>
        </Container>
        <ActivitiesContainer/>
    </Container>
}

function ChooseBar(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.choose}>
        <Typography variant="h2">Выбирай, как провести время</Typography>
        <Filters/>
    </Container>
}

function WeekendInfoBar() {
    const classes = useStyles();
    return <Container className={classes.weekendInfo}>
        <Typography variant="h6">До выходных: 2 дня</Typography>
        <Container className={classes.days}>
            <WeatherInfo day="сб"/>
            <WeatherInfo day="вс"/>
        </Container>
    </Container>
}

function WeatherInfo({day}: any) {
    return <div>
        <WbSunnyIcon/>
        <Typography>{day}</Typography>
    </div>
}

function Filters(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.filters}>
        <NamedSlider name="Уровень активности"/>
        <NamedSlider name="Бюджет"/>
        <Button>Больше фильтров</Button>
    </Container>
}

function NamedSlider({name}: any): ReactElement {
    const classes = useStyles();
    return <div className={classes.slider}>
        {name}
        <IOSSlider aria-labelledby="continuous-slider"/>
    </div>
}

const useStyles = makeStyles(theme => ({
    content: {
        height: "100%",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    days: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    weekendInfo: {
        width: "20%"
    },
    topBar: {
        height: "100%",
        width: "100%",
        display: 'flex',
        flexDirection: 'row'
    },
    choose: {
        textAlign: "left",
        width: "80%"
    },
    filters: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left',
        paddingLeft: "0.5vw"
    },
    slider: {
        display: 'flex',
        flexDirection: 'column',
        width: "10vw",
    }
}));

const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0',
        margin: "0.25vw",
        width: "80%"
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus, &:hover, &$active': {
            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        height: 2,
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: 8,
        width: 1,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    },
})(Slider);