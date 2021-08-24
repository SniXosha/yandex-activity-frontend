import React, {ReactElement} from "react";
import {Button, ButtonGroup, Container, makeStyles, Slider, Typography, withStyles} from "@material-ui/core";
import ActivitiesContainer from "pages/main/ActivitiesContainer";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import {allActivities} from "data/activities";
import {useDispatch, useSelector} from "react-redux";
import {setActivityLevel, setMoney} from "redux/filters";

export default function MainPage(): ReactElement {
    const classes = useStyles();
    let sortedActivities = allActivities
    const activityLevel = useSelector((state: any) => state.filter.activityLevel)
    const money = useSelector((state: any) => state.filter.money)
    let finalActivities = sortedActivities.filter(activity => {
        if (money !== 0 && activity.money > money) return false
        return activity.activityLevel > activityLevel;
    })

    return <Container className={classes.content} maxWidth={false}>
        <Typography className={classes.slogan} variant="h2">Выбирай, как провести время</Typography>
        <div className={classes.topBar}>
            <ChooseBar/>
            <CategoriesBar/>
        </div>
        <ActivitiesContainer activities={finalActivities}/>
    </Container>
}

function ChooseBar(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.choose}>
        <TypeFilters/>
        <SpaceTimeFilters/>
    </Container>
}

function CategoriesBar(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.categories}>
        <ButtonGroup variant="text" aria-label="text button group">
            <Button>все</Button>
            <Button>спорт</Button>
            <Button>прогулки</Button>
            <Button>мастер-классы</Button>
            <Button>экстрим-развлечения</Button>
            <Button>танцы</Button>
            <Button>ремесло</Button>
            <Button>больше категорий</Button>
        </ButtonGroup>
    </Container>
}

function WeekendInfoBar() {
    const classes = useStyles();
    const weatherClasses = useWeatherStyles();
    return <Container className={classes.weekendInfo}>
        <Typography variant="h5">До выходных:</Typography>
        <Typography variant="h5">2 дня</Typography>
        <Container className={classes.days}>
            <WeatherInfo day="сб" temp="+24°" classes={weatherClasses}/>
            <WeatherInfo day="вс" temp="+17°" classes={weatherClasses}/>
        </Container>
    </Container>
}

function WeatherInfo({day, temp, classes}: any) {
    return <Container className={classes.weather}>
        <WbSunnyIcon className={classes.icon} fontSize="large"/>
        <Container className={classes.weatherText}>
            <Typography>{day}</Typography>
            <Typography>{temp}</Typography>
        </Container>
    </Container>
}

function TypeFilters(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.filters}>
        <ActivitySlider name="Уровень активности"/>
        <MoneySlider name="Бюджет"/>
        <Button>Больше фильтров</Button>
        <Button>Подберите мне развлечение</Button>
    </Container>
}

function SpaceTimeFilters(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.spaceTime}>
        <Button>м. Севастопольская</Button>
        <Button>28 августа</Button>
        <Button>15:00 - 19:00</Button>
    </Container>
}

function ActivitySlider({name}: any): ReactElement {
    const classes = useStyles();
    const activityLevel = useSelector((state: any) => state.filter.activityLevel)
    const dispatch = useDispatch()
    return <div className={classes.slider}>
        {name}
        <IOSSlider value={activityLevel} onChange={(e, newValue) => dispatch(setActivityLevel(newValue))} defaultValue={0} min={0} max={10} step={1} aria-labelledby="continuous-slider"/>
        {activityLevel}
    </div>
}

function MoneySlider({name}: any): ReactElement {
    const classes = useStyles();
    const money = useSelector((state: any) => state.filter.money)
    const dispatch = useDispatch()
    return <div className={classes.slider}>
        {name}
        <IOSSlider value={money} onChange={(e, newValue) => dispatch(setMoney(newValue))} defaultValue={0} min={0} max={10000} step={500} aria-labelledby="continuous-slider"/>
        {money}
    </div>
}

const useStyles = makeStyles(theme => ({
    content: {
        height: "100%",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fffef2'
    },
    spaceTime: {
        border: 'solid 1px',
        borderColor: 'gray',
        borderRadius: '1vw',
        width: "60%",
        marginTop: "1vw",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    slogan: {
        marginLeft: '1vw',
        textAlign: 'left',
    },
    days: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%"
    },
    weekendInfo: {
        width: "20%"
    },
    topBar: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        margin: '1vw',
    },
    choose: {
        textAlign: "left",
        width: "80%",
        border: 'solid 2px',
        borderRadius: "2vw",
        padding: "1vw",
        display: 'flex',
        flexDirection: 'column'
    },
    filters: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'space-between',
        paddingLeft: "0.5vw"
    },
    slider: {
        display: 'flex',
        flexDirection: 'column',
        width: "10vw",
    },
    categories: {
        marginTop: '1vw'
    }
}));

const useWeatherStyles = makeStyles(theme => ({
    icon: {
        width: '100%'
    },
    weather: {
        display: 'flex',
        flexDirection: 'row',
        width: '40%'
    },
    textWeather: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = withStyles({
    root: {
        color: '#fcee7c',
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