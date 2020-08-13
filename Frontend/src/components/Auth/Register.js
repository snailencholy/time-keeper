import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
//import db from '../../db';

import clock from '../../assets/correct-clock.png';




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

    loginButton: {
        paddingLeft: "1em"
    },

}))
function Register () {

    const classes = useStyles()

    const [username, setUsername] = useState('')
    const [usernameHelper, setUsernameHelper] = useState('')

    const [email, setEmail] = useState('')
    const [emailHelper, setEmailHelper] = useState('')

    const [password, setPassword] = useState('')
    const [passwordHelper, setPasswordHelper] = useState('')

    const [passwordConifrmation, setPasswordConifrmation] = useState('')
    const [passwordConfHelper, setPasswordConfHelper] = useState('')

    const onChange = event => {
        let valid;

        switch (event.target.id) {
            case 'userName':
                setUsername(event.target.value)
                break;

            case 'email':
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)

                if (!valid) {
                    setEmailHelper("Invalid Email")
                } else {
                    setEmailHelper("")
                }

                break;

            case 'password':
                setPassword(event.target.value)
                valid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(event.target.value)

                if(!valid) {
                    setPasswordHelper("invalid password")
                } else {
                    setPasswordHelper("")
                }
                break;

            case 'passwordConfirmation':
                setPasswordConifrmation(event.target.value)
                break;
            
            default: 
                break;
        }
    }


    const sendToAPI = async (username, email, password) => {
        try {
                const newUser = {
                    username: username,
                    email: email,
                    password: password
                }
                let hasError = false;
                const response = await fetch('http://localhost:5000/user', {
                    method: 'POST',
                    body: JSON.stringify(newUser),
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                });

                if (!response.ok) {
                    hasError = true;
                }

                const responseData = await response.json();

                if (hasError) {
                    throw new Error(responseData.message);
                }
                
            } catch (error) {
                alert(error.message || 'something went wrong');
            };
    }

    const onSubmit = event => {
        setEmail("");
        setUsername("");
        setPassword("");
        setPasswordConifrmation("");

        if (password === passwordConifrmation && username && email) {


                sendToAPI(username, email, password)
                //console.log("got this far")


            // console.log("submitted")
            // let newUser = {
            //     userName: username,
            //     email: email,
            //     password: password,
            // }
            
            // let data = JSON.stringify(newUser, null, 2);

            // fs.writeFile('newUser.json', data, (err) => {
            //     if (err) throw err;
            //     console.log("file written");
            // })
            //This wont work because it's running in the browser
            //have to actually push to a database.
            //console.log(newUser)
        // } else if (password === passwordConifrmation) {
        //     alert("Passwords do not match. Please make sure the password and password confirmation fields are the same.")
        // } else {
        //     alert("Not submitted, please fill the form out.")
        // }
        } else {alert("Didn't work")}
        
    }

    return(
        <Grid container direction="column" alignContent="center" alignItems="center" className={classes.mainContainer}>
            <Grid item >
            <img src={clock} height="80" width="80" alt=""/>
            </Grid>
            
            <form>
                <Grid item className={classes.userName}>
                    <Input
                    id="userName"
                    onChange={onChange}
                    placeholder="Username"
                    required
                    />
                </Grid>
                <Grid item className={classes.password}>
                    <Input
                    id="email"
                    error={emailHelper.length !== 0}
                    helpertext={emailHelper}
                    placeholder="Email"
                    required
                    onChange={onChange}
                    />
                </Grid>
                <Grid item className={classes.password}>
                    <Input
                    id="password"
                    error={passwordHelper.length !== 0}
                    helpertext={passwordHelper}
                    placeholder="Password"
                    type="password"
                    required
                    onChange={onChange}
                    />
                </Grid>
                <Grid item className={classes.password}>
                    <Input
                    id="passwordConfirmation"
                    //error={setPasswordConfHelper.length !== 0}
                    helpertext={passwordConfHelper}
                    error={passwordConfHelper.length !== 0}
                    placeholder="Password Confirmation"
                    type="password"
                    required
                    onChange={onChange}
                    />
                </Grid>
                <Grid container direction="row">
                    <Grid item>
                        <Button 
                        className={classes.submitButton}
                        id="submitButton"
                        onClick={onSubmit}
                        >
                            Submit
                        </Button>
                    </Grid>
                    <Grid item className={classes.loginButton}>
                        <Button component={Link} to="/login">Login</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}

export default Register;