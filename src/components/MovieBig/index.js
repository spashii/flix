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

import CountryFlag from 'react-country-flag';

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
    height: '100%',
    width: '100%',
  },
  gridItem: {
    backgroundColor: '#fdfdfd',
  },
  gridItemMain: {
    backgroundColor: '#fdfdfd',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
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
              spacing={2}
              justify='flex-start'
              alignItems='stretch'
            >
              <Grid item xs={12}>
                <Paper component={Box} p={2} className={classes.gridItemMain}>
                  <Box>
                    <Typography
                      color='primary'
                      variant='h4'
                      className={classes.title}
                    >
                      {data.title}
                      {typeof data.production_countries !== 'undefined' &&
                        typeof data.production_countries[0] !== 'undefined' &&
                        typeof data.production_countries[0]['iso_3166_1'] !==
                          'undefined' && (
                          <CountryFlag
                            countryCode={
                              data.production_countries[0]['iso_3166_1']
                            }
                            svg
                            style={{
                              paddingBottom: '4px',
                              marginLeft: '8px',
                            }}
                          />
                        )}
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
              <Grid item xs={12} sm={4}>
                <div className={classes.mediaWrapper}>
                  <img
                    alt={data.title + ' cover'}
                    className={classes.media}
                    src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
                    srcSet={`https://image.tmdb.org/t/p/w185${data.poster_path} 300w, https://image.tmdb.org/t/p/w342${data.poster_path} 768w`}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={8}>
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
