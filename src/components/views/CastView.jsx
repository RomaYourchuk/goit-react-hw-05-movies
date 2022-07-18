import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesSearchService from '../../services/fetchMoviesApi';

function CastView() {
  const [credits, setCredits] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    moviesSearchService.FetchCreditsApi(movieId).then(setCredits);
  }, [movieId]);

  return (
    <>
      {credits && (
        <ul>
          {credits.map(credit => (
            <li key={credit.id}>
              {/* <Link to={`/movies/${movie.id}`}>{movie.title}</Link> */}
              <img
                src={`https://image.tmdb.org/t/p/w200${credit.profile_path}`}
                alt={credit.name}
              />
              <h3>{credit.name}</h3>
              <p>character: {credit.character}</p>
            </li>
          ))}
        </ul>
      )}
      <hr />
    </>
  );
}

export default CastView;