import {Button, createStyles, Typography, withStyles, WithStyles} from "@material-ui/core";
import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';

interface HeaderStyles {
    size: number;
    image: string;
    imageSize: number;

    [key: string]: any;
}

interface ButtonStyles extends WithStyles<typeof styles> {
    title: string;
    size: number;
    image: string;
    imageSize: number;
}

const styles = createStyles({
    root: {
        margin: "1vw auto",
        width: "100%",
        height: "40%",
        verticalAlign: "bottom",
        fontSize: "1rem",
        color: "#FFF",
        backgroundImage: (props: HeaderStyles) => `url(/images/${props['image']}.png)`,
        backgroundSize: (props: HeaderStyles) => `${props['imageSize']}%`,
        backgroundPosition: 'center',
        display: "flex",
        flexDirection: "column",
        alignSelf: "end",
        textAlign: "left",
    },
    title: {
        color: "white",
        fontSize: "4vw",
        marginLeft: "5vw",
        marginRight: "auto",
    },
    lowerBar: {
        marginTop: "auto",
        marginRight: "15vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    bookButton: {
        backgroundColor: "rgb(255,255,0)",
        fontSize: "1.2vw",
        height: "2vw",
        borderRadius: "2vw",
        textTransform: "none",
        '&:hover': {
            backgroundColor: "rgb(230,230,0)",
        },
    },
    likeButton: {
        marginLeft: "2vw",
        fontSize: "1.2vw",
        height: "2vw",
        color: "white",
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        borderRadius: "2vw",
        textTransform: "none",
        '&:hover': {
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
        },
    }
});

export const ActivityHeader = withStyles(styles)(({classes, title, size, ...other}: ButtonStyles) => (
    <div className={classes.root}>
        <div className={classes.lowerBar}>
            <Typography className={classes.title}>{title}</Typography>
            <Button className={classes.bookButton}>Записаться</Button>
            <Button className={classes.likeButton} startIcon={<FavoriteIcon/>}>Хочу сходить</Button>
        </div>
    </div>
));




