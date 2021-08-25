import {createStyles, Typography, withStyles} from "@material-ui/core";
import React from "react";
import {flex} from "styles/common";

const styles = createStyles({
    root: flex('row', {
        fontSize: "15rem",
    }),
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
