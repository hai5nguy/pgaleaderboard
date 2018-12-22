import React from 'react';
import cx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import { isFocused } from 'ui/utils';

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
    state = {
      editing: false,
    }

    input = React.createRef()

    componentDidUpdate() {
      const input = this.input.current;
      if (input && !isFocused(input)) {
        input.focus();
      }
    }

    click = () => {
      const { editing } = this.state;
      this.setState({
        editing: !editing,
      });
      if (this.input.ref) {
        this.input.current.focus();
      }
    }

    blur = () => {
      const { onComplete, value } = this.props;
      this.setState({ editing: false });
      console.log('value', value);
      onComplete(value);
    }

    keydown = (e) => {
      if (e.key === 'Enter') {
        this.blur();
      }
    }

    render() {
      const {
        className, classes, value, onChange, showChip,
      } = this.props;
      const { editing } = this.state;

      if (editing) {
        return (
          <input
            className={classes.editing}
            type="text"
            value={value}
            onBlur={this.blur}
            onKeyDown={this.keydown}
            ref={this.input}
            onChange={e => onChange(e.target.value)}
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
