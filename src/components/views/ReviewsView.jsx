import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesSearchService from '../../services/fetchMoviesApi';

function ReviewsView() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    moviesSearchService.FetchReviewsApi(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews &&
        (reviews.length === 0 ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author_details.username}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ))}
      <hr />
    </>
  );
}
export default ReviewsView;