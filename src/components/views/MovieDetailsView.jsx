import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import * as moviesSearchService from '../../services/fetchMoviesApi';
import { Wrapper, Description } from './MovieDetailsView.styled';

function MovieDetailsView() {
  const [movieDetails, setMovieDetails] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    moviesSearchService
      .FetchMovieDetailsApi(movieId)
      .then(r => {
        return r;
      })
      .then(setMovieDetails);
  }, [movieId]);

  const goBack = () => navigate(-1);

  return (
    <>
      <button onClick={goBack}>Go back</button>

      {movieDetails && (
        <Wrapper>
          <img
            src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <Description>
            <h2>
              {movieDetails.original_title}(
              {movieDetails.release_date.split('-')[0]})
            </h2>
            <p>User Score: {movieDetails.vote_average * 10} %</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            {movieDetails.genres.map(genre => genre.name).join(' ')}
          </Description>
        </Wrapper>
      )}
      <hr />
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to={`cast`} replace={true}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={`reviews`} replace={true}>
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
export default MovieDetailsView;