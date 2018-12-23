import React from 'react';
import cx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import updatePlayer from 'actions/update-player';

import { isNumber } from 'ui/utils';

const styles = theme => ({
  root: {
  },
  editing: {
    width: '100%',
  },
  readOnly: {
    cursor: 'text',
  },
  chip: {
    background: theme.palette.secondary.main,
    borderRadius: 10,
    color: '#fff',
    paddingRight: 10,
  },
});

class EditableField extends React.Component {
  constructor(props) {
    super(props);

    const { name, player } = props;

    this.state = {
      value: player[name],
      editing: false,
    };

    this.input = React.createRef();
  }

  componentDidUpdate() {
    // if editing, then put focus on the input element
    const { editing } = this.state;
    if (editing) {
      this.input.current.focus();
    }
  }

  change = (e) => {
    let { value } = e.target;
    const { name } = this.props;

    if (name === 'score' && value !== '' && isNumber(value)) {
      value = parseInt(value, 10);
      if (value < 0 || value > 100) {
        value = '';
      }
    }

    this.setState({ value });
  }

  click = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing,
    });
  }

  blur = () => {
    this.setState({ editing: false });

    const { value } = this.state;
    const { player, name } = this.props;

    // if value is blank or matches the orginal, then
    // do NOT update and return
    const originalValue = player[name];
    if (value === '' || value === originalValue) {
      this.setState({
        value: originalValue,
      });
      return;
    }

    updatePlayer({ ...player, [name]: value });
  }

  keydown = (e) => {
    if (e.key === 'Enter') {
      this.blur();
    }
  }

  render() {
    const { className, classes, showChip } = this.props;
    const { editing, value } = this.state;

    if (editing) {
      return (
        <input
          className={classes.editing}
          type="text"
          value={value}
          onBlur={this.blur}
          onKeyDown={this.keydown}
          ref={this.input}
          onChange={this.change}
        />
      );
    }
    return (
      <Typography
        className={cx(className, classes.readOnly, showChip && classes.chip)}
        onClick={this.click}
      >
        {value}
      </Typography>
    );
  }
}

export default withStyles(styles)(EditableField);
