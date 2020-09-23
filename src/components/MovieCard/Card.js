import React from 'react';
import { navigate } from '@reach/router';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

import GenreTag from './GenreTag';
import { Rating } from '@material-ui/lab';
import { NavigateBefore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '300px',
    borderRadius: '4px 4px 0px 0px',
    overflow: 'hidden',
    position: 'relative',
  },
  cardActionArea: {
    display: 'flex',
  },
  media: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  contentWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    opacity: 0,
    overflow: 'auto',
    background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))',
    transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      opacity: 1,
    },
  },
  title: {
    color: 'white',
  },
  buttonWrapper: {
    position: 'absolute',
    height: '100%',
    opacity: 0,
  },
}));

const MovieCard = ({ content }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img
        alt={content.title + ' cover'}
        src={`https://image.tmdb.org/t/p/w342${content.poster_path}`}
        className={classes.media}
      />
      <div className={classes.contentWrapper}>
        <Box
          p={2}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          onClick={() => {
            navigate(`/movie/${content.id}`);
          }}
        >
          {/* <Button variant='contained' color='primary'>
            Details
          </Button> */}
          <Typography align='center' variant='body1' className={classes.title}>
            {content.overview}
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default MovieCard;
