import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import Board from 'components/Board';

const styles = theme => ({
  root: {
  },
  header: {
    background: theme.palette.secondary.main,
  },
});

const Root = ({ classes }) => (
  <div className={classes.root}>
    <Typography className={classes.header} variant="h3" align="center" color="primary">PGA Leaderboard</Typography>
    <Board />
  </div>
);

export default withStyles(styles)(Root);
