import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';

import clock from '../../assets/better-clock.png';

const useStyles = makeStyles((theme) => ({

    mainContainer: {
        paddingTop: "10em",
        paddingBottom: "10em",
    },

    userName: {
        paddingTop: "2em",
        paddingBottom: "2em",
    },

    password: {
        paddingBottom: "2em",
    },

    submitButton: {
        paddingRight: "2em",
    }, 

    registerButton: {

    },

}))

function Login () {
    const classes = useStyles()

    return(
        <Grid container direction="column" alignContent="center" alignItems="center" className={classes.mainContainer}>
            <Grid item alignItems="center">
            <img src={clock} height="80" width="80"/>
            </Grid>
            
            <form>
                <Grid item className={classes.userName}>
                    <Input
                    id="userName"
                    placeholder="Username"
                    />
                </Grid>
                <Grid item className={classes.password}>
                    <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    />
                </Grid>
                <Grid container direction="row">
                    <Grid item>
                        <Button 
                        className={classes.submitButton}
                        >
                            Submit
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}

export default Login;