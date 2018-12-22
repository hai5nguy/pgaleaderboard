import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import AddCircle from '@material-ui/icons/AddCircle';

import Header from 'components/Header';
import PlayerRow from 'components/PlayerRow';

import addPlayer from 'actions/add-player';

const styles = {
  root: {
    margin: 10,
  },
  addIcon: {
    fontSize: '2rem',
  },
};

const Board = ({ classes, players }) => (
  <Paper className={classes.root}>
    <Header />
    {players.map(p => (<PlayerRow key={p._id} player={p} />))}
    <Tooltip title="Add Player" placement="right-start">
      <IconButton onClick={addPlayer}>
        <AddCircle className={classes.addIcon} nativeColor="#001d48" />
      </IconButton>
    </Tooltip>
  </Paper>
);

const mapStateToProps = state => ({
  players: state.players,
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(Board);
