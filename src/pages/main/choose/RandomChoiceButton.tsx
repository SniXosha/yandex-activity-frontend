import React, {ReactElement, useState} from "react";
import {randomActivity} from "data/api";
import {Button, makeStyles, Modal} from "@material-ui/core";
import {flex} from "styles/common";
import {ActivityCircle} from "pages/main/activities/ActivitiesCircle";

export default function RandomButton(): ReactElement {
    const classes = useStyles();
    const [activity, setActivity] = useState(randomActivity())

    const [open, setOpen] = useState(false)
    return <>
        <Button onClick={() => setOpen(true)}>Подберите мне развлечение</Button>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={classes.randomModal}>
                <div>
                    <ActivityCircle image={activity.image.url} imageSize={activity.image.size} size={19}
                                    title={activity.name} id={activity.id}/>
                </div>
                <Button onClick={() => setActivity(randomActivity())} className={classes.nextButton}>Ещё</Button>
            </div>
        </Modal>
    </>
}

const useStyles = makeStyles((theme) => ({
    randomModal: flex('column', {
        alignItems: 'center',
        maxWidth: '17vw',
        margin: 'auto'
    }),
    nextButton: {
        backgroundColor: theme.palette.secondary.main,
        width: '10vw',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
    },
}));