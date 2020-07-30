import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        paddingTop: "10em"
    },

    spacing: {
        paddingRight: "1em",
    },

    timeIn: {
        paddingBottom: "1em",
    },

    timeOut: {
        paddingTop: "1em",
        paddingBottom: "1em"
    },

    submitButton: {
        paddingTop: "2em"
    }
}))

export default function Hours() {
    const classes = useStyles();

    const [hoursIn, setHoursIn] = useState("")
    const [minutesIn, setMinutesIn] = useState("")
    const [hoursOut, setHoursOut] = useState("")
    const [minutesOut, setMinutesOut] = useState("")
    const [inTOD, setInTOD] = useState("")
    const [outTOD, setOutTOD] = useState("")

    const onChange = event => {
        
        switch(event.target.id) {
            case "timeInHour":
                break;
            case "timeInMinutes":
                break;
            case "timeOutHour":
                break;
            case "timeOutMinutes":
                break;
            default: 
                break;
        }

    }

    const handleInSelect = event => {

    }

    const handleOutSelect = event => {
        setOutTOD()
    }

    return(
        <Grid container direction="column" alignContent="center" className={classes.mainContainer}>
            <form>
                <h2 className={classes.timeIn}>Time In</h2>
                <Grid container direct="row">
                    <Grid item className={classes.spacing}>
                        <Input
                        id="timeInHour"
                        placeholder="Hour"
                        onChange={onChange}
                        />
                    </Grid>
                    <Grid item className={classes.spacing}>
                        <Input
                        id="timeInMinutes"
                        placeholder="Minutes"
                        onChange={onChange}
                        />
                    </Grid>
                    <Grid item>
                        <Select
                        value={inTOD}
                        id="inTOD"
                        >
                            <option value={"am"}>AM</option>
                            <option value={"pm"}>PM</option>
                        </Select>
                    </Grid>
                </Grid>
                <h2 className={classes.timeOut}>Time Out</h2>
                <Grid container direct="row">
                    <Grid item className={classes.spacing}>
                        <Input
                        id="timeOutHour"
                        placeholder="Hour"
                        onChange={onChange}
                        />
                    </Grid>
                    <Grid item className={classes.spacing}>
                        <Input
                        id="timeOutMinutes"
                        placeholder="Minutes"
                        onChange={onChange}
                        />
                    </Grid>
                    <Grid item>
                        <Select
                        value={outTOD}
                        id="outTOD"
                        onChange={handleOutSelect}
                        >
                            <option value={"am"}>AM</option>
                            <option value={"pm"}>PM</option>
                        </Select>
                    </Grid>
                </Grid>
                
            </form>
            <Grid item className={classes.submitButton}>
                    <Button  variant="outlined">submit</Button>
            </Grid>
        </Grid>
    )
}