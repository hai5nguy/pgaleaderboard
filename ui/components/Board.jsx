import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

import Header from 'components/Header';
import PlayerRow from 'components/PlayerRow';

import addPlayer from 'actions/add-player';

const styles = {
  root: {
    margin: 10,
  },
  header: {

  },
};

const Board = ({ classes, players }) => (
  <Paper className={classes.root}>
    <Header />
    {players.map(p => (<PlayerRow key={p._id} player={p} />))}
    <input type="button" value="Add" onClick={addPlayer} />
  </Paper>
);

const mapStateToProps = state => ({
  players: state.players,
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(Board);
