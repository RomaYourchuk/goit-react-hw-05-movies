export const genresNames = (genre_ids, genres) =>
  genres
    .filter(({ id }) => genre_ids.includes(id))
    .map(({ name }) => name)
    .join(', ');