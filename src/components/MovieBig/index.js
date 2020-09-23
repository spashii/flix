import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  paperAlt: {
    position: 'absolute',
    top: '50%',
    right: '50%',
  },
  mainContainer: {
    backgroundColor: grey[200],
  },
  backdrop: {},
  card: {
    marginTop: theme.spacing(4),
  },
  title: {
    fontWeight: 'bold',
  },
  tagline: {},
  mediaWrapper: {
    overflow: 'hidden',
  },
  media: {
    borderRadius: '4px',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  gridItem: {},
}));

const MovieBig = ({ movieId }) => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const { data } = res;
          setData(data);
        } else {
          setData(null);
        }
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [movieId]);

  return (
    <div className={classes.root}>
      {data ? (
        <div>
          <div
            className={classes.mainContainer}
            style={{
              position: 'fixed',
              top: 0,
              background: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
              backgroundSize: 'cover',
              width: '100vw',
              minHeight: '100vh',
              zIndex: -1,
            }}
          />
          <Container component={Box} mt={4} maxWidth='lg'>
            <Grid
              container
              spacing={4}
              justify='flex-start'
              alignItems='stretch'
            >
              <Grid item xs={12}>
                <Paper
                  component={Box}
                  p={2}
                  display='flex'
                  flexDirecton={{ sm: 'column', md: 'row' }}
                  alignItems='center'
                  className={classes.gridItem}
                >
                  <Box mr={'auto'}>
                    <Typography
                      color='primary'
                      variant='h4'
                      className={classes.title}
                    >
                      {data.title}
                    </Typography>
                    <Typography variant='subtitle1' className={classes.tagline}>
                      {data.tagline}
                    </Typography>
                  </Box>
                  <Box>
                    <Rating
                      name='movie-rating'
                      readOnly
                      defaultValue={data.vote_average}
                      max={10}
                      precision={0.5}
                    />
                    <Typography variant='subtitle1'>
                      ({data.vote_count} votes)
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              {/* <Grid item xs={12} md={5}>
                <Paper
                  style={{
                    height: '100%',
                  }}
                  component={Box}
                  display='flex'
                  alignItems='center'
                  justifyContent='space-evenly'
                  p={2}
                  className={classes.gridItem}
                >
                  <Rating
                    name='movie-rating'
                    readOnly
                    defaultValue={data.vote_average}
                    max={10}
                    precision={0.5}
                  />
                  <Typography variant='subtitle1'>
                    ({data.vote_count} votes)
                  </Typography>
                </Paper>
              </Grid> */}
              <Grid item xs={12} md={4}>
                <div className={classes.mediaWrapper}>
                  <img
                    alt={data.title + ' cover'}
                    className={classes.media}
                    src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <Paper component={Box} p={2} className={classes.gridItem}>
                  <List className={classes.root}>
                    {data.original_title && (
                      <>
                        <ListItem alignItems='flex-start'>
                          <ListItemText
                            primary={
                              <>
                                <Typography
                                  component='span'
                                  variant='h6'
                                  color='primary'
                                >
                                  Original Title
                                </Typography>
                              </>
                            }
                            secondary={
                              <>
                                <Typography component='span' variant='body1'>
                                  {data.original_title}
                                </Typography>
                              </>
                            }
                          />
                        </ListItem>
                        <Divider variant='middle' component='li' />
                      </>
                    )}
                    <ListItem alignItems='flex-start'>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              component='span'
                              variant='h6'
                              color='primary'
                            >
                              Release Date
                            </Typography>
                          </>
                        }
                        secondary={
                          <>
                            <Typography component='span' variant='body1'>
                              {data.release_date}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    <Divider variant='middle' component='li' />
                    <ListItem alignItems='flex-start'>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              component='span'
                              variant='h6'
                              color='primary'
                            >
                              Genres
                            </Typography>
                          </>
                        }
                        secondary={
                          <>
                            <Typography component='span' variant='body1'>
                              {data.genres.map(({ name }) => `${name}  `)}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    <Divider variant='middle' component='li' />
                    <ListItem alignItems='flex-start'>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              component='span'
                              variant='h6'
                              color='primary'
                            >
                              Overview
                            </Typography>
                          </>
                        }
                        secondary={
                          <>
                            <Typography component='span' variant='body1'>
                              {data.overview}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : (
        <Paper component={Box} p={4} className={classes.paperAlt}>
          {isLoading ? 'Loading' : 'This movie was not found.'}
        </Paper>
      )}
    </div>
  );
};

export default MovieBig;
