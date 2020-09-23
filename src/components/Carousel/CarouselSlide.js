import React from 'react';
import { navigate } from '@reach/router';
import {
  makeStyles,
  Paper,
  Typography,
  Box,
  Hidden,
  Container,
  Button,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '75vh',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '70vw',
    },
    cursor: 'pointer',
    padding: 0,
    overflow: 'hidden',
  },
  imageWrapper: {},
  image: {
    borderRadius: '4px',
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    width: '100%',
    height: '75vh',
    objectFit: 'cover',
  },
  titleWrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: 'rgba(0.0, 0.0, 0.0, 0.6)',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '4px 0px 0px 4px',
    zIndex: 2,
    padding: theme.spacing(2),
  },
  title: {
    textTransform: 'none',
    color: 'white',
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
  },
  overview: {
    textTransform: 'none',
    color: grey[100],
  },
}));

const CarouselSlide = ({ content }) => {
  const classes = useStyles();
  return (
    <Paper component={Container} maxWidth='lg' className={classes.root}>
      <Button
        onClick={() => navigate(`/movie/${content.id}`)}
        component='div'
        style={{ padding: 0 }}
      >
        <Box className={classes.titleWrapper}>
          <Typography variant='h5' className={classes.title}>
            {content.title}
          </Typography>
          <Hidden smDown>
            <Typography variant='body2' className={classes.overview}>
              {content.overview}
            </Typography>
          </Hidden>
        </Box>
        <img
          src={`https://image.tmdb.org/t/p/original/${content.backdrop_path}`}
          alt={content.title + ' backdrop image'}
          className={classes.image}
        />
      </Button>
    </Paper>
  );
};

export default CarouselSlide;
