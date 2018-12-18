import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  root: {
  },
};

const Root = ({ classes }) => (
  <div className={classes.root}>
    i am root
  </div>
);

export default withStyles(styles)(Root);
