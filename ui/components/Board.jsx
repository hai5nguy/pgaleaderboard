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

import AddForm from 'components/AddForm';

const styles = {
  root: {
    margin: 10,
  },
  addIcon: {
    fontSize: '2rem',
  },
};

class Board extends React.Component {
  state = {
    adding: true,
  }

  setAdding = adding => () => {
    this.setState({ adding });
  }

  render() {
    const { classes, players } = this.props;
    const { adding } = this.state;

    return (
      <Paper className={classes.root}>
        <Header />
        {players.map(p => (<PlayerRow key={p._id} player={p} />))}
        { adding ? (
          <AddForm
            onClose={this.setAdding(false)}
          />
        ) : (
          <Tooltip title="Add Player" placement="right-start">
            <IconButton onClick={this.setAdding(true)}>
              <AddCircle className={classes.addIcon} nativeColor="#001d48" />
            </IconButton>
          </Tooltip>
        )}
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players,
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(Board);
