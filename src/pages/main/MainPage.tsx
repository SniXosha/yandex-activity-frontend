import React, {ReactElement} from "react";
import {
    Container,
    makeStyles,
    Typography
} from "@material-ui/core";
import ActivitiesContainer from "pages/main/activities/ActivitiesContainer";
import {useFilteredActivities} from "pages/main/filter";
import ChooseBar from "pages/main/choose/ChooseBar";
import {flex} from "styles/common";
import CategoriesBar from "./categories/CategoriesBar";

export default function MainPage(): ReactElement {
    const classes = useStyles();
    let finalActivities = useFilteredActivities();

    return <Container className={classes.content} maxWidth={false}>
        <Typography className={classes.slogan} variant="h2">Выбирай, как провести время</Typography>
        <div className={classes.topBar}>
            <ChooseBar/>
            <CategoriesBar/>
        </div>
        <ActivitiesContainer activities={finalActivities}/>
    </Container>
}

const useStyles = makeStyles(theme => ({
    content: flex('column', {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main
    }),
    slogan: {
        marginTop: '2vw',
        marginLeft: '1vw',
        textAlign: 'left',
    },
    topBar: flex('column', {
        width: "100%",
        margin: '1vw',
    }),
}));