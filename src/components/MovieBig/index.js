import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Card, Container, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  paperAlt: {
    position: 'absolute',
    top: '50%',
    right: '50%',
  },
  mainContainer: {},
  backdrop: {
    position: 'absolute',
    width: '100vw',
    height: '300vh',
    zIndex: '-1',
  },

  card: {},
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
        <div
          className={classes.mainContainer}
          style={{
            background: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
            backgroundSize: 'cover',
            width: '100vw',
            minHeight: '95vh',
          }}
        >
          <Container maxWidth='lg'>
            <Card className={classes.card}>
              helloOfficia occaecat irure aute dolor esse veniam culpa dolor
              elit irure excepteur dolor minim anim. Commodo proident cupidatat
              cillum incididunt. Est sint ullamco ut sit ullamco. Et cupidatat
              pariatur minim mollit magna exercitation aliqua veniam ut. Minim
              aute consectetur tempor do aliqua pariatur elit culpa. Tempor
              aliquip ullamco laboris anim ut et sint do elit pariatur nisi eu
              commodo. Cupidatat aliquip ipsum cupidatat do dolor cillum esse
              sunt non dolore eu. Duis eiusmod est elit tempor dolore sint.
              Magna ea reprehenderit fugiat esse in irure sint cupidatat tempor.
              Culpa deserunt adipisicing amet sunt tempor voluptate. Et sint
              magna eiusmod eu proident. Nisi nulla ea duis ipsum elit laboris
              consectetur elit eiusmod amet ullamco deserunt ea mollit. Proident
              ad non sunt qui ex sint sit ullamco. Non ut incididunt duis
              deserunt laborum tempor non exercitation duis non nisi. Veniam
              incididunt mollit mollit irure laboris Lorem. Id ea nulla sit sint
              ullamco ullamco esse nostrud sunt amet commodo labore aliqua sit.
              Mollit ut laborum sint in nostrud. Ea excepteur culpa excepteur
              est proident irure commodo in ea enim et ea esse laboris.
            </Card>
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
