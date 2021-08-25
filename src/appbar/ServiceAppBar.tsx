import {ReactElement} from "react";
import {AppBar, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {flex} from "styles/common";

export default function ServiceAppBar(): ReactElement {
    return <AppBar position="static" elevation={0} color="secondary">
        <Toolbar className="bar">
            <Brand/>
            <Geo/>
            <Favourite/>
            <AccountCircleIcon/>
        </Toolbar>
    </AppBar>
}

const Brand = (): ReactElement => {
    const classes = useStyles();

    return <IconButton edge="start" className={classes.brand} color="inherit" aria-label="menu">
        <FlashOnIcon/>
        <Typography variant="h6" onClick={() => window.location.href = '/'}>
            Яндекс Выходные
        </Typography>
    </IconButton>;
}

const Geo = (): ReactElement => {
    const classes = useStyles();
    return <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <LocationOnIcon/>
        <Typography variant="h6">
            Москва
        </Typography>
    </IconButton>;
}

const Favourite = (): ReactElement => {
    const classes = useStyles();
    return <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <TurnedInIcon/>
        <Typography variant="h6">
            Мои активности
        </Typography>
    </IconButton>;
}

const useStyles = makeStyles((theme) => ({
    bar: flex('column', {
        alignItems: 'center',
        justifyContent: 'center',
    }),
    brand: {
        marginRight: "auto",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));