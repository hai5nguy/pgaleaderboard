import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import Board from 'components/Board';
import getPlayers from 'actions/get-players';

const styles = theme => ({
  root: {
  },
  header: {
    background: theme.palette.secondary.main,
  },
});

class Root extends React.Component {
  constructor() {
    super();
    getPlayers();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.header} variant="h3" align="center" color="primary">PGA Leaderboard</Typography>
        <Board />
      </div>
    );
  }
}

export default withStyles(styles)(Root);
