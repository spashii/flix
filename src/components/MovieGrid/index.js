import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, makeStyles } from '@material-ui/core';
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

  useEffect(() => {
    setLoading(true);
    const TMDB_API_KEY = `${process.env.REACT_APP_API_KEY}`;
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`;
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
      <Grid container>
        {!isLoading &&
          movies.map((content) => (
            <Grid key={content.id} item xs={12} lg={6}>
              <MovieCard content={content} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default MovieGrid;
