import React from 'react';
import { makeStyles, Paper, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '400px',
    position: 'relative',
  },
  titleWrapper: {
    position: 'absolute',
    bottom: '10%',
    right: '0',
    borderRadius: '4px 0px 0px 4px',
  },
}));

const CarouselSlide = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Box p={2}>
        <Skeleton animation='wave' height={'300px'} width={'300px'} />
      </Box>
      <Box p={2} className={classes.titleWrapper}>
        <Skeleton animation='wave' width={'50px'} />
      </Box>
    </Paper>
  );
};

export default CarouselSlide;
