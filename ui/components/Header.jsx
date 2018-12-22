import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    display: 'flex',
    height: 56,
    borderBottom: '1px solid #eceaea',
    color: '#0000008a',
  },
  name: {
    color: 'inherit',
    flexBasis: '60%',
    fontSize: '0.75rem',
    padding: '20px 0 20px 15px',
  },
  score: {
    color: 'inherit',
    flexBasis: '20%',
    fontSize: '0.75rem',
    padding: 20,
  },
  empty: {
    flexBasis: '20%',
  },
};

const Header = ({ classes }) => (
  <div className={classes.root}>
    <Typography className={classes.name} variant="subtitle2">Name</Typography>
    <Typography className={classes.score} variant="subtitle2" align="right">Score</Typography>
    <span className={classes.empty} />
  </div>
);

export default withStyles(styles)(Header);
