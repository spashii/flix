import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  button: {},
}));

const Arrow = ({ direction, onClick }) => {
  const classes = useStyles();
  const Icon = direction === 'left' ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <div className={classes.root}>
      <IconButton onClick={onClick}>
        <Icon className={classes.button} />
      </IconButton>
    </div>
  );
};

export default Arrow;
