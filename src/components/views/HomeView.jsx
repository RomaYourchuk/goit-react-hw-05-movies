import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as moviesSearchService from '../../services/fetchMoviesApi';

function HomeView() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    moviesSearchService.FetchMovieApi().then(setMovies).catch(setError);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}

      <hr />
      {error && <strong>{error}</strong>}
    </>
  );
}

export default HomeView;