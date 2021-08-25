import React, {ReactElement, useState} from "react";
import {Button, Checkbox, Container, FormControlLabel, makeStyles, Popover} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {setBinary} from "redux/filters";
import {flex} from "styles/common";

export default function FiltersButton(): ReactElement {
    return <FiltersButtonPopover>
        <BinaryFilterCheckbox label='Можно одному' binaryFilter='solo'/>
        <BinaryFilterCheckbox label='Можно с компанией' binaryFilter='company'/>
        <BinaryFilterCheckbox label='Не нужно ничего брать' binaryFilter='noEquipment'/>
        <BinaryFilterCheckbox label='В помещении' binaryFilter='indoor'/>
        <BinaryFilterCheckbox label='На улице' binaryFilter='outdoor'/>
    </FiltersButtonPopover>
}

const FiltersButtonPopover = ({children}: any): ReactElement => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false)

    return <>
        <Button onClick={(e) => {
            setOpen(true);
            setAnchorEl(e.currentTarget)
        }}>Больше фильтров</Button>
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={() => {
                setOpen(false);
                setAnchorEl(null)
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <Container className={classes.binaryFilters}>
                {children}
            </Container>
        </Popover>
    </>
}

function BinaryFilterCheckbox({label, binaryFilter}: any): ReactElement {
    const dispatch = useDispatch()
    const value = useSelector((state: any) => state.filter.binary[binaryFilter])
    return <FormControlLabel
        control={
            <Checkbox
                checked={value}
                onChange={() => {
                    dispatch(setBinary(binaryFilter))
                }}
                name="checkedF"
            />
        }
        label={label}
    />
}

const useStyles = makeStyles(() => ({
    binaryFilters: flex('column'),
}));