import React, {ReactElement} from "react";
import {Container, makeStyles} from "@material-ui/core";
import {ActivitySlider, MoneySlider} from "pages/main/choose/Sliders";
import FiltersButton from "./BinaryFiltersButton";
import RandomButton from "./RandomChoiceButton";
import {flex} from "styles/common";


export default function ChooseBar(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.choose}>
        <TypeFilters/>
    </Container>
}

function TypeFilters(): ReactElement {
    const classes = useStyles();
    return <Container className={classes.filters}>
        <ActivitySlider/>
        <MoneySlider/>
        <FiltersButton/>
        <RandomButton/>
    </Container>
}

const useStyles = makeStyles(() => ({
    choose: flex('column', {
        textAlign: "left",
        width: "80%",
        border: 'solid 2px',
        borderRadius: "2vw",
        padding: "1vw",
    }),
    filters: flex('row', {
        alignItems: 'left',
        justifyContent: 'space-between',
        paddingLeft: "0.5vw"
    }),
}));