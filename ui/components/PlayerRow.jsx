import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import DeleteForever from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import EditableField from 'components/EditableField';

import deletePlayer from 'actions/delete-player';
import updatePlayer from 'actions/update-player';
import { isNumber } from 'ui/utils';

const styles = {
  root: {
    display: 'flex',
    height: 48,
    borderBottom: '1px solid #eceaea',
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

  change = key => (value) => {
    let v = value;

    // score is constraint to [0, 100]
    if (key === 'score') {
      v = parseInt(v, 10);
      if (!isNumber(v) || v < 0 || v > 100) {
        v = '';
      }
    }

    this.setState({
      [key]: v,
    });
  }

  complete = key => (value) => {
    const { player: original } = this.props;

    // if any player details is blank or matches the orginal, then
    // do NOT update and return
    if (value === '' || value === original[key]) {
      this.setState({
        [key]: original[key],
      });
      return;
    }

    const player = this.state;
    updatePlayer({ ...player });
  };

  render() {
    const { classes } = this.props;
    const {
      _id, firstName, lastName, score,
    } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.nameContainer}>
          <EditableField
            onChange={this.change('lastName')}
            onComplete={this.complete('lastName')}
            value={lastName}
          />
        ,
          <EditableField
            className={classes.firstName}
            onChange={this.change('firstName')}
            onComplete={this.complete('firstName')}
            value={firstName}
          />
        </div>
        <div className={classes.scoreContainer}>
          <EditableField
            onChange={this.change('score')}
            onComplete={this.complete('score')}
            value={score}
            showChip
          />
        </div>
        <div className={classes.deleteContainer}>
          <Tooltip title="Delete Player" placement="right-start">
            <IconButton onClick={() => deletePlayer(_id)}>
              <DeleteForever />
            </IconButton>
          </Tooltip>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(PlayerRow);
