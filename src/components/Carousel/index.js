import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Fade, makeStyles } from '@material-ui/core';
import CarouselSlide from './CarouselSlide';
import CarouselSlideLoading from './CarouselSlideLoading';
import Arrow from './Arrow';

import { Emoji } from '../';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontWeight: 'bold',
  },
}));

const Carousel = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [slides, setSlides] = useState([
    {
      title: '',
      backdrop_path: '',
    },
  ]);

  const onArrowClick = (direction) => {
    if (!isLoading) {
      const increment = direction === 'left' ? -1 : 1;
      const newIndex = (index + increment + slides.length) % slides.length;
      setFadeIn(false);
      setTimeout(() => {
        setIndex(newIndex);
        setFadeIn(true);
      }, 500);
    } else {
      setIndex(0);
    }
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      onArrowClick('right');
    }, 4500);
    return () => {
      clearTimeout(timeout);
    };
  });

  useEffect(() => {
    setLoading(true);
    const TMDB_API_KEY = `${process.env.REACT_APP_API_KEY}`;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;
    axios
      .get(url)
      .then((res) => {
        const { results } = res.data;
        console.log(results);
        setSlides(results);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Box pt={4} pb={2}>
        <Typography
          variant='h4'
          color='primary'
          align='center'
          className={classes.title}
        >
          <Emoji symbol={'🌟'} label='glowing star' /> Popular Movies
        </Typography>
      </Box>
      <div className={classes.root}>
        <Arrow direction='left' onClick={() => onArrowClick('left')} />
        <Fade in={fadeIn} timeout={500} appear>
          <div>
            {isLoading ? (
              <CarouselSlideLoading />
            ) : (
              <CarouselSlide content={slides[index]} />
            )}
          </div>
        </Fade>
        <Arrow direction='right' onClick={() => onArrowClick('right')} />
      </div>
    </div>
  );
};

export default Carousel;
