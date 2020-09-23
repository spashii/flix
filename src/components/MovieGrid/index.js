import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Grid, makeStyles } from '@material-ui/core';
import MovieCard from '../MovieCard';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const MovieGrid = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([
    {
      title: '',
    },
  ]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(2);

  const getUrl = (page) => {
    const TMDB_API_KEY = `${process.env.REACT_APP_API_KEY}`;
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`;
    return url;
  };

  const handleLoadMore = () => {
    const url = getUrl(page);
    setPage(page + 1);
    axios
      .get(url)
      .then((res) => {
        const { results } = res.data;
        console.log(results);
        setMovies(movies.concat(results));
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    setLoading(true);
    const url = getUrl(1);
    axios
      .get(url)
      .then((res) => {
        const { results } = res.data;
        console.log(results);
        setMovies(results);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {!isLoading &&
          movies.map((content) => (
            <Grid key={content.id} item xs={6} sm={4} md={3} lg={2}>
              <MovieCard content={content} />
            </Grid>
          ))}
        <Grid item xs={12}>
          <Box mb={2}>
            <Button
              variant='contained'
              color='primary'
              onClick={() => handleLoadMore()}
            >
              Load More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieGrid;
