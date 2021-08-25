import {ALL, FUN, REST, SPORT, WALKS} from "data/activities";
import {Dispatch} from "redux";
import {Button, ButtonGroup, Container, makeStyles} from "@material-ui/core";
import {setCategory} from "redux/filters";
import React, {ReactElement} from "react";
import {useDispatch, useSelector} from "react-redux";

const categories = [
    {value: ALL, label: 'все'},
    {value: SPORT, label: 'спорт'},
    {value: WALKS, label: 'прогулки'},
    {value: FUN, label: 'развлечения'},
    {value: REST, label: 'отдых'},
]

export default function CategoriesBar(): ReactElement {
    const classes = useStyles();
    const dispatch = useDispatch()
    const currentCategory = useSelector((state: any) => state.filter.category)

    const buttons = categories.map(category => categoryToButton(dispatch, category,
        category.value === currentCategory ? classes.selectedCategory : classes.unselectedCategory
    ))

    return <Container className={classes.categories}>
        <ButtonGroup variant="text" aria-label="text button group">
            {buttons}
        </ButtonGroup>
    </Container>
}

const categoryToButton = (dispatch: Dispatch, category: any, styleClass: string) => {
    return <Button className={styleClass}
                   onClick={() => dispatch(setCategory(category.value))}>{category.label}</Button>
}

const useStyles = makeStyles(() => ({
    categories: {
        marginTop: '1vw'
    },
    selectedCategory: {
        backgroundColor: 'lightgray',
    },
    unselectedCategory: {},
}));