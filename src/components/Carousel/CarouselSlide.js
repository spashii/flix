import React from 'react';
import { Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75vw',
  },
}));

const CarouselSlide = ({ content }) => {
  const classes = useStyles();
  const { title } = content;
  return (
    <div className={classes.root}>
      <Card>{title}</Card>
    </div>
  );
};

export default CarouselSlide;
