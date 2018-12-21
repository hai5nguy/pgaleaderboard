import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
  },
  header: {

  },
};

const Board = ({ classes }) => (
  <div className={classes.root}>
    i am board
  </div>
);

export default withStyles(styles)(Board);
