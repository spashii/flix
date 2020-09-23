import React from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import { Carousel, MovieGrid, Emoji } from '../components';

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginLeft: 0,
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Carousel />
      <Container component={Box} mt={2} p={1} maxWidth='lg'>
        <Typography variant='h4' color='primary' className={classes.title}>
          <Emoji symbol={'💯'} label='100' /> Top Movies
        </Typography>
        <MovieGrid />
      </Container>
    </div>
  );
};

export default App;
