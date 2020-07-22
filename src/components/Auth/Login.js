import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    userName: {
        
    },

    password: {

    },

    submitButton: {

    }, 

    registerButton: {

    },

}))

function Login () {
    return(
        <Grid container direction="column" alignContent="center">
            <form>
                <Grid item>
                    <Input
                    id="userName"
                    placeholder="Username"
                    />
                </Grid>
                <Grid item>
                    <Input
                    id="password"
                    placeholder="Password"
                    />
                </Grid>
                <Grid container direction="row">
                    <Grid item>
                        <Button>Submit</Button>
                    </Grid>
                    <Grid item>
                        <Button>Register</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}

export default Login;