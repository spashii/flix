import React, { useEffect, useState } from 'react';
import { Fade, makeStyles } from '@material-ui/core';
import CarouselSlide from './CarouselSlide';
import Arrow from './Arrow';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flexGrow: 1,
  },
}));

const slides = [
  {
    title: 'slide1',
  },
  {
    title: 'erslide1',
  },
  {
    title: 'sasdflide1',
  },
];

const Carousel = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + slides.length) % slides.length;
    setFadeIn(false);
    setTimeout(() => {
      setIndex(newIndex);
      setFadeIn(true);
    }, 500);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      onArrowClick('right');
    }, 4500);
    return () => {
      clearTimeout(timeout);
    };
  });

  console.log(index);

  return (
    <div className={classes.root}>
      <Arrow direction='left' onClick={() => onArrowClick('left')} />
      <Fade in={fadeIn} timeout={500} appear>
        <div>
          <CarouselSlide content={slides[index]} className={classes.wrapper} />
        </div>
      </Fade>
      <Arrow direction='right' onClick={() => onArrowClick('right')} />
    </div>
  );
};

export default Carousel;
