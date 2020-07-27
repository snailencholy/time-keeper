import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import clock from '../../assets/better-clock.png';

const useStyles = makeStyles((theme) => ({

    mainContainer: {
        paddingTop: "10em",
        paddingBottom: "10em",
    },

    email: {
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
        paddingLeft: "1em"
    },

}))


export default function Login () {
    const classes = useStyles()

    const [email, setEmail] = useState('')
    const [emailHelper, setEmailHelper] = useState('')

    const [password, setPassword] = useState('')
    const [passwordHelper, setPasswordHelper] = useState('')
 

    return(
        <Grid container direction="column" alignContent="center" alignItems="center" className={classes.mainContainer}>
            <Grid item >
            <img src={clock} height="80" width="80" alt=""/>
            </Grid>
            
            <form>
                <Grid item className={classes.email}>
                    <Input
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </Grid>
                <Grid item className={classes.password}>
                    <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
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
                    <Grid item className={classes.registerButton}>
                        <Button component={Link} to="/register">Register</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}