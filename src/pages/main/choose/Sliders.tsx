import React, {ReactElement} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StyledSlider} from "pages/main/StyledSlider";
import {setActivityLevel, setMoney} from "redux/filters";
import {makeStyles, Typography} from "@material-ui/core";
import {flex} from "styles/common";

const namedActivityLevel = (activityLevel: number) => {
    return {
        0: 'любой',
        1: 'низкий',
        2: 'средний',
        3: 'высокий',
    }[activityLevel]
}

export function ActivitySlider(): ReactElement {
    const classes = useStyles();
    const activityLevel = useSelector((state: any) => state.filter.activityLevel)
    const dispatch = useDispatch()
    return <div className={classes.slider}>
        <Typography>Уровень активности</Typography>
        <StyledSlider value={activityLevel} onChange={(e, newValue) => dispatch(setActivityLevel(newValue))}
                      defaultValue={0} min={0} max={3} step={1} aria-labelledby="continuous-slider"/>
        {namedActivityLevel(activityLevel)}
    </div>
}

export function MoneySlider(): ReactElement {
    const classes = useStyles();
    const money = useSelector((state: any) => state.filter.money)
    const dispatch = useDispatch()
    return <div className={classes.slider}>
        <Typography>Бюджет</Typography>
        <StyledSlider value={money} onChange={(e, newValue) => dispatch(setMoney(newValue))} min={0}
                      max={5000} step={100} aria-labelledby="continuous-slider"/>
        {money}
    </div>
}

const useStyles = makeStyles(() => ({
    slider: flex('column', {
        width: "10vw",
    }),
}));