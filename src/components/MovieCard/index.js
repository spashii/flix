import React from 'react';
import { navigate } from '@reach/router';
import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  card: {
    transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'translateY(-10px)',
    },
    backgroundColor: grey[100],
  },
  root: {
    display: 'block',
    margin: 0,
    padding: 0,
    borderRadius: '4px 4px 0px 0px',
    overflow: 'hidden',
    position: 'relative',
    textTransform: 'none',
    minHeight: '365px',
    [theme.breakpoints.down('md')]: {
      minHeight: '315px',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '285px',
    },
  },
  media: {
    height: '300px',
    [theme.breakpoints.down('md')]: {
      height: '250px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '220px',
    },
    width: '100%',
    objectFit: 'cover',
  },
  title: {
    color: 'white',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
}));

const MovieCard = ({ content }) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.card}>
      <Button
        component={Box}
        className={classes.root}
        onClick={() => {
          navigate(`/movie/${content.id}`);
        }}
      >
        <img
          alt={content.title + ' cover'}
          src={`https://image.tmdb.org/t/p/w342${content.poster_path}`}
          className={classes.media}
        />
        <Box p={1} display='flex' justifyContent='center' alignItems='center'>
          <Typography variant='body2' align='center'>
            {content.title}
          </Typography>
        </Box>
      </Button>
    </Paper>
  );
};

export default MovieCard;
