import {createStyles, Typography, withStyles} from "@material-ui/core";
import React from "react";

const styles = createStyles({
    root: {
        fontSize: "15rem",
        display: "flex",
        flexDirection: "row",
    },
    left: {
        width: "70%",
        fontSize: "1.5vw",
        textAlign: "left",
        marginLeft: "2vw"
    }
});

export const ActivityBody = withStyles(styles)(({classes, activity}: any) => (
        <div className={classes.root}>
            <div>
                <Typography className={classes.left}>{activity.description}</Typography>
            </div>
        </div>
    ));
