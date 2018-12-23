import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import DeleteForever from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import EditableField from 'components/EditableField';

import deletePlayer from 'actions/delete-player';
import { HEIGHT_OF_PLAYER_ROW } from 'ui/constants';

const styles = {
  root: {
    display: 'flex',
    height: 48,
    borderBottom: '1px solid #eceaea',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    transition: 'top 500ms ease-in-out',
  },
  nameContainer: {
    flexBasis: '60%',
    padding: 13,
    display: 'flex',
  },
  firstName: {
    marginLeft: 5,
  },
  scoreContainer: {
    flexBasis: '20%',
    textAlign: 'right',
    padding: 13,

  },
  deleteContainer: {
    flexBasis: '20%',
  },
};

class PlayerRow extends React.Component {
  constructor(props) {
    super(props);
    const { player } = props;
    this.state = { ...player };
  }

  render() {
    const { classes, player } = this.props;
    const top = player.position * HEIGHT_OF_PLAYER_ROW;

    return (
      <div className={classes.root} style={{ top }}>
        <div className={classes.nameContainer}>
          <EditableField
            name="lastName"
            player={player}
          />
          ,
          <EditableField
            className={classes.firstName}
            name="firstName"
            player={player}
          />
        </div>
        <div className={classes.scoreContainer}>
          <EditableField
            name="score"
            player={player}
            showChip
          />
        </div>
        <div className={classes.deleteContainer}>
          <Tooltip title="Delete Player" placement="right-start">
            <IconButton onClick={() => deletePlayer(player._id)}>
              <DeleteForever nativeColor="#001d48" />
            </IconButton>
          </Tooltip>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  player: state.players.find(p => p._id === props._id),
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(PlayerRow);
