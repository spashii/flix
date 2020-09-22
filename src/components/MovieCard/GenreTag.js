import React from 'react';
import { Chip } from '@material-ui/core';

const genres = [
  { id: 28, name: 'Action', color: '#da4054' },
  { id: 12, name: 'Adventure', color: '#fa633a' },
  { id: 16, name: 'Animation', color: '#0aa312' },
  { id: 35, name: 'Comedy', color: '#248147' },
  { id: 80, name: 'Crime', color: '#1a6894' },
  { id: 99, name: 'Documentary', color: '#193309' },
  { id: 18, name: 'Drama', color: '#c5da3a' },
  { id: 10751, name: 'Family', color: '#0ab9b4' },
  { id: 14, name: 'Fantasy', color: '#a874de' },
  { id: 36, name: 'History', color: '#2e45b2' },
  { id: 27, name: 'Horror', color: '#67e4b5' },
  { id: 10402, name: 'Music', color: '#91b4e4' },
  { id: 9648, name: 'Mystery', color: '#210742' },
  { id: 10749, name: 'Romance', color: '#fe4ea5' },
  { id: 878, name: 'Science Fiction', color: '#25678a' },
  { id: 10770, name: 'TV Movie', color: '#2084b6' },
  { id: 53, name: 'Thriller', color: '#b26cd1' },
  { id: 10752, name: 'War', color: '#e4bf02' },
  { id: 37, name: 'Western', color: '#954b6f' },
];

const GenreTag = ({ id }) => {
  const genre = genres[genres.findIndex((x) => x.id === id)];
  return (
    <Chip
      variant='outlined'
      style={{
        color: `${genre.color}`,
      }}
    >
      {genre.name}
    </Chip>
  );
};

export default GenreTag;
