import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Hours() {
    return(
        <Grid container justify="center">
            <Grid container justify="center">
                <Grid item>
                    <Button>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}