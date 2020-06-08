import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    containerStyle: {
        backgroundColor: theme.palette.common.grey,
        display: 'flex',
        flexWrap: 'wrap',
    },
    
    margin: {
        margin: theme.spacing(1),
    },

    TextField: {
        ...theme.typography.textFieldStyle,
        color: "white",
        width: '25ch',
    },

    buttonStyle: {
        margin: "1em",
        borderRadius: "50px",
        ...theme.typography.submitButton,
    }
}));

export default function Form() {
    const classes = useStyles();
    const theme = useTheme();

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return(
        <Grid container  className={classes.containerStyle}>
            <div>
                <TextField
                label="Hours"
                id="hours"
                className={clsx(classes.margin, classes.TextField)}
                />
            </div>
            <div>
                <TextField
                label="Sender's Email"
                id="senderEmail"
                className={clsx(classes.margin, classes.TextField)}
                />

                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                </FormControl>
            </div>
            <div>
                <TextField
                label="Recipient's Email"
                id="recipient"
                className={clsx(classes.margin, classes.TextField)}
                />
            </div>
            <div>
            <Button
             variant="outlined"
             className={classes.buttonStyle}
             color={theme.palette.common.blue}
            >
                Submit
            </Button>
            </div>
           
        </Grid>
    );
}