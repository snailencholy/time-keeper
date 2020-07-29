import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    }
}))

export default function Hours() {
    const classes = useStyles();

    const [hoursIn, setHoursIn] = useState("")
    const [minutesIn, setMinutesIn] = useState("")
    const [hoursOut, setHoursOut] = useState("")
    const [minutesOut, setMinutesOut] = useState("")

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
                    <Grid item>
                        <Input
                        id="timeInMinutes"
                        placeholder="Minutes"
                        onChange={onChange}
                        />
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
                    <Grid item>
                        <Input
                        id="timeOutMinutes"
                        placeholder="Minutes"
                        onChange={onChange}
                        />
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}