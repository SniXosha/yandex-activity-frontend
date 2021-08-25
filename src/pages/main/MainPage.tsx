import React, {ReactElement, useState} from "react";
import {
    Button,
    ButtonGroup, Checkbox,
    Container, FormControlLabel,
    makeStyles,
    Slider,
    Typography,
    withStyles
} from "@material-ui/core";
import ActivitiesContainer, {ActivityCircle} from "pages/main/ActivitiesContainer";
import {ALL, allActivities, FUN, randomActivity, REST, SPORT, WALKS} from "data/activities";
import {useDispatch, useSelector} from "react-redux";
import {setActivityLevel, setBinary, setCategory, setMoney} from "redux/filters";
import {Dispatch} from "redux";
import {Modal} from "@material-ui/core";
import {Popover} from "@material-ui/core";

export default function MainPage(): ReactElement {
    const classes = useStyles();
    let sortedActivities = allActivities
    const activityLevel = useSelector((state: any) => state.filter.activityLevel)
    const money = useSelector((state: any) => state.filter.money)
    const category = useSelector((state: any) => state.filter.category)
    const binary = useSelector((state: any) => state.filter.binary)
    let finalActivities = sortedActivities.filter(activity => {
        if (money !== 0 && activity.money > money) return false
        if (category !== ALL && activity.category !== category) return false
        if (activityLevel !== 0 && activity.activityLevel !== activityLevel) return false
        let badFilters = Object.entries(binary).filter(value => value[1]).map(value => value[0]).filter(value => !activity.binary.includes(value))
        if (badFilters.length > 0) return false

        return true;
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
        {/*<SpaceTimeFilters/>*/}
    </Container>
}

const categories = [
    {value: ALL, label: 'все'},
    {value: SPORT, label: 'спорт'},
    {value: WALKS, label: 'прогулки'},
    {value: FUN, label: 'развлечения'},
    {value: REST, label: 'отдых'},
]

const categoryToButton = (dispatch: Dispatch, category: any, styleClass: string) => {
    return <Button className={styleClass}
                   onClick={() => dispatch(setCategory(category.value))}>{category.label}</Button>
}

function CategoriesBar(): ReactElement {
    const classes = useStyles();
    const dispatch = useDispatch()
    const currentCategory = useSelector((state: any) => state.filter.category)

    const buttons = categories.map(category => categoryToButton(dispatch, category, category.value === currentCategory ? classes.selectedCategory : classes.unselectedCategory))

    return <Container className={classes.categories}>
        <ButtonGroup variant="text" aria-label="text button group">
            {buttons}
        </ButtonGroup>
    </Container>
}


function TypeFilters(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.filters}>
        <ActivitySlider name="Уровень активности"/>
        <MoneySlider name="Бюджет"/>
        <FiltersButton/>
        <RandomButton/>
    </Container>
}

function FiltersButton(): ReactElement {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false)

    return <>
        <Button onClick={(e) => {
            setOpen(true);
            setAnchorEl(e.currentTarget)
        }}>Больше фильтров</Button>
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={() => {
                setOpen(false);
                setAnchorEl(null)
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <Container className={classes.binaryFilters}>
                <AdditionalCheckbox label='Можно одному' binaryFilter='solo'/>
                <AdditionalCheckbox label='Можно с компанией' binaryFilter='company'/>
                <AdditionalCheckbox label='Не нужно ничего брать' binaryFilter='noEquipment'/>
                <AdditionalCheckbox label='В помещении' binaryFilter='indoor'/>
                <AdditionalCheckbox label='На улице' binaryFilter='outdoor'/>
            </Container>
        </Popover>
    </>
}

function AdditionalCheckbox({label, binaryFilter}: any): ReactElement {
    const dispatch = useDispatch()
    const value = useSelector((state: any) => state.filter.binary[binaryFilter])
    return <FormControlLabel
        control={
            <Checkbox
                checked={value}
                onChange={() => {
                    dispatch(setBinary(binaryFilter))
                }}
                name="checkedF"
            />
        }
        label={label}
    />
}

function RandomButton(): ReactElement {
    const classes = useStyles();
    const [activity, setActivity] = useState(randomActivity())

    const [open, setOpen] = useState(false)
    return <>
        <Button onClick={() => setOpen(true)}>Подберите мне развлечение</Button>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={classes.randomModal}>
                <div className={classes.circleBorder}>
                    <ActivityCircle image={activity.image.url} imageSize={activity.image.size} size={19}
                                    title={activity.name} id={activity.id}/>
                </div>
                <Button onClick={() => setActivity(randomActivity())} className={classes.nextButton}>Ещё</Button>
            </div>
        </Modal>
    </>
}


function SpaceTimeFilters(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.spaceTime}>
        <Button>м. Севастопольская</Button>
        <Button>28 августа</Button>
        <Button>15:00 - 19:00</Button>
    </Container>
}

const namedActivityLevel = (activityLevel: number) => {
    return {
        0: 'любой',
        1: 'низкий',
        2: 'средний',
        3: 'высокий',
    }[activityLevel]
}

function ActivitySlider({name}: any): ReactElement {
    const classes = useStyles();
    const activityLevel = useSelector((state: any) => state.filter.activityLevel)
    const dispatch = useDispatch()
    return <div className={classes.slider}>
        {name}
        <IOSSlider value={activityLevel} onChange={(e, newValue) => dispatch(setActivityLevel(newValue))}
                   defaultValue={0} min={0} max={3} step={1} aria-labelledby="continuous-slider"/>
        {namedActivityLevel(activityLevel)}
    </div>
}

function MoneySlider({name}: any): ReactElement {
    const classes = useStyles();
    const money = useSelector((state: any) => state.filter.money)
    const dispatch = useDispatch()
    return <div className={classes.slider}>
        {name}
        <IOSSlider value={money} onChange={(e, newValue) => dispatch(setMoney(newValue))} min={0}
                   max={10000} step={100} aria-labelledby="continuous-slider"/>
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
        marginTop: '2vw',
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
    },
    selectedCategory: {
        backgroundColor: 'lightgray',
    },
    unselectedCategory: {},
    randomModal: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '17vw',
        margin: 'auto'
    },
    nextButton: {
        backgroundColor: '#fcee7c',
        width: '10vw',
        '&:hover': {
            backgroundColor: "#fcee6c",
        },
    },
    binaryFilters: {
        display: 'flex',
        flexDirection: 'column',
    },
    circleBorder: {
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