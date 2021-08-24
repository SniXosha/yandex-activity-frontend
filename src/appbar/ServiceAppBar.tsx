import {ReactElement} from "react";
import {AppBar, IconButton, InputAdornment, makeStyles, TextField, Toolbar, Typography} from "@material-ui/core";
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

export default function ServiceAppBar(): ReactElement {
    const classes = useStyles();

    return <AppBar position="static" elevation={0} color="secondary">
        <Toolbar className="bar">
            <IconButton edge="start" className={classes.search} color="inherit" aria-label="menu">
                <FlashOnIcon />
                <Typography variant="h6" className={classes.title}>
                    Яндекс Выходные
                </Typography>
            </IconButton>
            <TextField
                variant="outlined"
                className={classes.menuButton}
                id="input-with-icon-textfield"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <LocationOnIcon />
                <Typography variant="h6" className={classes.title}>
                    Москва
                </Typography>
            </IconButton>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <TurnedInIcon />
                <Typography variant="h6" className={classes.title}>
                    Мои активности
                </Typography>
            </IconButton>
            <AccountCircleIcon/>
        </Toolbar>
    </AppBar>
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    search: {
        marginRight: "auto",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));