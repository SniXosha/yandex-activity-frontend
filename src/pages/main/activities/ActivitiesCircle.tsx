import {createStyles, Typography, withStyles, WithStyles} from "@material-ui/core";
import React from "react";

interface Styles {
    size: number;
    image: string;
    imageSize: number;
    id: string;

    [key: string]: any;
}

interface ButtonStyles extends WithStyles<typeof styles> {
    title: string;
    size: number;
    image: string;
    imageSize: number;
    id: string;
}

const styles = createStyles({
    root: {
        margin: "1vw auto",
        width: (props: Styles) => props['size'] + "vw",
        height: (props: Styles) => props['size'] + "vw",
        borderRadius: "50%",
        fontSize: "1rem",
        color: "#FFF",
        backgroundImage: (props: Styles) => `url(/images/${props['image']}.png)`,
        backgroundSize: (props: Styles) => `${props['imageSize']}%`,
        backgroundPosition: 'center',
        display: "flex",
        flexDirection: "column",
        alignSelf: "end",
        '&:hover': {
            border: 'solid 5px',
            borderColor: "#fcee7c",
            transition: 'transform .2s',
        },
    },
    title: {
        marginTop: "auto",
        marginBottom: "3vw",
        marginLeft: "3vw",
        marginRight: "3vw",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5vw",
        textAlign: 'center'
    }
});

export const ActivityCircle = withStyles(styles)(({classes, title, id, size, ...other}: ButtonStyles) => (
    <div className={classes.root} onClick={() => window.location.href = `/activity/${id}`}>
        <Typography className={classes.title}>{title}</Typography>
    </div>
));