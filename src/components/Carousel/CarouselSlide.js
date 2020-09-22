import React from 'react';
import { navigate } from '@reach/router';
import { makeStyles, Paper, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '400px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '70vw',
    },
    overflow: 'hidden',
    cursor: 'pointer',
  },
  imageWrapper: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  image: {
    borderRadius: '4px',
    objectFit: 'cover',
    objectPosition: '50% 50%',
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  titleWrapper: {
    position: 'absolute',
    bottom: '10%',
    right: '0',
    backgroundColor: 'rgba(0.0, 0.0, 0.0, 0.5)',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '4px 0px 0px 4px',
    zIndex: 2,
  },
  title: {
    textTransform: 'none',
    color: 'white',
    padding: theme.spacing(1),
  },
}));

const CarouselSlide = ({ content }) => {
  const classes = useStyles();
  return (
    <Paper
      className={classes.root}
      onClick={() => navigate(`/movie/${content.id}`)}
    >
      <Box className={classes.titleWrapper}>
        <Typography variant='h6' className={classes.title}>
          {content.title}
        </Typography>
      </Box>
      <div className={classes.imageWrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w780/${content.backdrop_path}`}
          alt={content.title + ' backdrop image'}
          className={classes.image}
        />
      </div>
    </Paper>
  );
};

export default CarouselSlide;
