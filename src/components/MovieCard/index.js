import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

import GenreTag from './GenreTag';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    margin: theme.spacing(2),
    height: '250px',
  },
  cardActionArea: {
    display: 'flex',
  },
  media: {
    minWidth: '30%',
    maxWidth: '30%',
  },
  content: {},
}));

const MovieCard = ({ content }) => {
  const classes = useStyles();
  console.log(content);
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
          component='img'
          alt={content.title + ' cover'}
          image={`https://image.tmdb.org/t/p/w342${content.poster_path}`}
          className={classes.media}
        />
        <CardContent className={classes.content}>
          <Box p={1} display='flex' flexDirection='column'>
            <Typography variant='h6'>{content.title} </Typography>
            <Typography variant='body2'>{content.overview}</Typography>
            <Rating
              name='half-rating-read'
              defaultValue={content.vote_average / 2}
              precision={0.5}
              readOnly
            />{' '}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
