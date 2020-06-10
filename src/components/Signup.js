import React from 'react';
import { makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    itemStyle: {
        margin: "1em"
    },

    buttonStyle: {
        margin: "1em",
        width: "15rem",
        borderRadius: "50px",
        ...theme.typography.standardButton,
      },
}));

export default function Signup() {
    const classes = useStyles();
    const theme = useTheme();

    return(
        <Grid container justify="center">
            <Grid container justify="center">
                <Grid item className={classes.itemStyle}>
                    <Button
                     variant="outlined"
                     className={classes.buttonStyle}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}