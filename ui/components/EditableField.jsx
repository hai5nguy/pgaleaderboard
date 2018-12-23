import React from 'react';
import cx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import updatePlayer from 'actions/update-player';

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

  change = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  click = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing,
    });

    // if editing, then put focus on the input element
    if (this.input.ref) {
      this.input.current.focus();
    }
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
        [name]: originalValue,
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
