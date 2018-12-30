
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Form from './Form';
import Header from './Header';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          
          <div className="overlay">
             <Header/>
             <button className="button">Weekly Forecast</button>
   <button className="button" >Playlist</button>
   <button className="button" >My Mood</button>
   <button className="renk">#NOFILTERWEATHER</button> 
          
        </div>          
          
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} >
          <div className="gridstyle">
           Nav bar
           </div>
           </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
          <div className="mainStyle">
          <Form/>
</div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
