import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    border: '1px solid red',
  },
};

class EditableField extends React.Component {
    state = {
      editing: false,
    }

    click = () => {
      const { editing } = this.state;
      this.setState({
        editing: !editing,
      });
    }

    blur = () => {
      this.setState({ editing: false });
    }

    render() {
      const { classes, value } = this.props;
      const { editing } = this.state;

      if (editing) {
        return (
          <span
            onClick={this.click}
            onKeyDown={this.click}
            onBlur={this.blur}
            role="textbox"
            tabIndex={0}
          >
            editing
          </span>
        );
      }
      return (
        <span
          className={classes.root}
          onClick={this.click}
          onKeyDown={this.click}
          role="textbox"
          tabIndex={0}
        >
          {value}

        </span>
      );
    }
}

export default withStyles(styles)(EditableField);
