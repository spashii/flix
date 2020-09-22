import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Arrow = ({ direction, onClick }) => {
  const classes = useStyles();
  const Icon = direction === 'left' ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <div className={classes.root} onClick={onClick}>
      <IconButton>
        <Icon />
      </IconButton>
    </div>
  );
};

export default Arrow;
