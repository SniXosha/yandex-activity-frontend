import React, {ReactElement} from 'react';
import './App.css';
import {createTheme, CssBaseline, makeStyles, ThemeProvider} from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from "pages/main/MainPage";
import ActivityPage from "pages/activity/ActivityPage";
import ServiceAppBar from "appbar/ServiceAppBar";


export default function App(): ReactElement {
    const classes = useStyles();
    return <ThemeProvider theme={appTheme()}>
        <CssBaseline/>
        <div className="App">
            <Router>
                <div className={classes.content}>
                    <ServiceAppBar/>
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route exact path="/activity">
                            <ActivityPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    </ThemeProvider>
}

function appTheme() {
    return createTheme({
        palette: {
            primary: {
                main: "#FFFFFF",
            },
        },
    });
}
const useStyles = makeStyles(() => ({
    appbar: {
        height: "4rem",
    },
    content: {
        height: "calc(100% - 4rem)",
        width: "80%",
        margin: "auto"
    },
}));