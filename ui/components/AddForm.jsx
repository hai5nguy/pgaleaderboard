import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/CancelOutlined';

import addPlayer from 'actions/add-player';

const styles = {
  root: {
    display: 'flex',
  },
  lastName: {
    flexBasis: '30%',
    margin: '15px 5px 0 10px',
  },
  comma: {
    marginTop: 23,
  },
  firstName: {
    flexBasis: '30%',
    margin: '15px 5px 0 10px',
  },
  score: {
    flexBasis: '20%',
    margin: '15px 20px 0 15px',

  },
  buttonContainer: {
    flexBasis: '20%',
    display: 'flex',
  },
  icon: {
    fontSize: '2rem',
  },
};

class AddForm extends React.Component {
  state = {
    firstName: '',
    firstNameError: false,
    lastName: '',
    score: '',
  }

  addClick = () => {
    const { firstName, lastName, score } = this.state;

    let hasError = false;
    if (firstName === '') {
      this.setState({
        firstNameError: true,
      });
      hasError = true;
    }
    if (lastName === '') {
      this.setState({
        lastNameError: true,
      });
      hasError = true;
    }
    if (score === '') {
      this.setState({
        scoreError: true,
      });
      hasError = true;
    }

    if (!hasError) {
      addPlayer({ firstName, lastName, score });
      const { onClose } = this.props;
      onClose();
    }
  }

  change = key => (e) => {
    const { value } = e.target;
    this.setState({
      [key]: value,
      firstNameError: false,
      lastNameError: false,
      scoreError: false,
    });
  }

  render() {
    const { classes, onClose } = this.props;
    const {
      firstName, firstNameError, lastName, lastNameError, score, scoreError,
    } = this.state;
    return (
      <form className={classes.root}>
        <TextField
          className={classes.lastName}
          value={lastName}
          placeholder={lastNameError ? 'Last Name is required' : 'Last Name'}
          onChange={this.change('lastName')}
          error={lastNameError}
        />
        <Typography className={classes.comma} variant="h6">,</Typography>
        <TextField
          className={classes.firstName}
          value={firstName}
          placeholder={firstNameError ? 'First Name is required' : 'First Name'}
          onChange={this.change('firstName')}
          error={firstNameError}
        />
        <TextField
          className={classes.score}
          value={score}
          placeholder={scoreError ? 'Score is required' : 'Score'}
          type="number"
          onChange={this.change('score')}
          error={scoreError}
        />
        <div className={classes.buttonContainer}>
          <IconButton onClick={this.addClick}>
            <CheckIcon className={classes.icon} nativeColor="#00a000" />
          </IconButton>
          <IconButton onClick={onClose}>
            <CancelIcon className={classes.icon} nativeColor="#ff0000" />
          </IconButton>
        </div>

      </form>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players,
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(AddForm);
