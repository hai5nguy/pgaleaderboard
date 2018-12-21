import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import EditableField from 'components/EditableField';

const styles = {
  root: {
    border: '1px solid yellow',
  },
  header: {

  },
};

const PlayerRow = ({ classes, player }) => {
  const { firstName, lastName, score } = player;
  const change = key => (value) => {

  };
  return (
    <div className={classes.root}>
      <EditableField onChange={change('lastName')} value={lastName} />
      ,
      <EditableField onChange={change('firstName')} value={firstName} />
      <EditableField onChange={change('score')} value={score} />
    </div>
  );
};

export default withStyles(styles)(PlayerRow);
