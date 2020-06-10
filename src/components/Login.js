import React from 'react';
import { makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';


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

export default function Login() {
    const classes = useStyles();
    

    return(
        <Grid container justify="center">
            <Grid item className={classes.itemStyle}>
                <FormControl>
                    <Input
                     id="email"
                     label="Email"
                    />
                </FormControl>
            </Grid>
            <Grid item className={classes.itemStyle}>

            </Grid>
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