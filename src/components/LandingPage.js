import React from "react";
import { makeStyles, useTheme, withTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    backgroundColor: theme.palette.common.grey,
    display: "flex",
    flexWrap: "wrap",
  },

  margin: {
    margin: theme.spacing(1),
  },

  TextField: {
    ...theme.typography.textFieldStyle,
    color: "white",
    width: "25ch",
  },

  buttonStyle: {
    margin: "1em",
    width: "15rem",
    borderRadius: "50px",
    ...theme.typography.standardButton,
  },

  gridItemStyle: {
    margin: "1em",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container justify="center" className={classes.containerStyle}>
        <Grid item className={classes.gridItemStyle}>
            <Typography variant="h2">
                Log in to submit hours worked,
                <br/>
                or sign up to begin keeping your time.
            </Typography>
        </Grid>
      <Grid container justify="center">
        <Grid item className={classes.gridItemStyle}>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            className={classes.buttonStyle}
            color={theme.palette.common.blue}
          >
            Log in
          </Button>
        </Grid>

        <Grid item className={classes.gridItemStyle}>
          <Button
            component={Link}
            to="/signup"
            variant="outlined"
            className={classes.buttonStyle}
            color={theme.palette.common.blue}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
