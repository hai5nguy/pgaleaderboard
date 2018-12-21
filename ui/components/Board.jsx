import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import PlayerRow from 'components/PlayerRow';

const styles = {
  root: {
    border: '1px solid blue',
  },
  header: {

  },
};

const Board = ({ classes, players }) => (
  <div className={classes.root}>
    {players.map(p => (<PlayerRow key={p._id} player={p} />))}
  </div>
);

const mapStateToProps = state => ({
  players: state.players,
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(Board);
