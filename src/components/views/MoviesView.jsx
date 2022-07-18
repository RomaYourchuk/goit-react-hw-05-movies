import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchMoviesList from '../views/SearchMoviesList';

import Searchbar from 'components/Seachbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MoviesView() {
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search)?.get('query');
    query && setSearchQuery(query);
  }, [location.search]);

  const onSubmitClick = newQuery => {
    if (newQuery.trim() === '') {
      toast.error('Enter what you want to find ', {
        position: 'top-right',
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      return;
    }

    newQuery && setSearchQuery(newQuery);
    navigate(`?&query=${newQuery}`);
  };

  return (
    <>
      <Searchbar onSubmitClick={onSubmitClick} searchQuery={searchQuery} />

      {searchQuery && <SearchMoviesList searchQuery={searchQuery} />}

      <ToastContainer
        closeButton={false}
        position="bottom-right"
        autoClose={3000}
      />
    </>
  );
}
export default MoviesView;