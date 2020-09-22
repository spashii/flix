import React from 'react';
import { Router } from '@reach/router';

import { Layout, Home, Movie } from './pages';

function App() {
  return (
    <Router>
      <Layout path='/'>
        <Home path='/' />
        <Movie path='/movie/:movieId' />
      </Layout>
    </Router>
  );
}

export default App;
