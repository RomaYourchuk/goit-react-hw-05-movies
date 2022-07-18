import s from './Searchbar.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

function Searchbar({ onSubmitClick, searchQuery }) {
  const [inputValue, setInputValue] = useState(null);
  console.log(searchQuery);
  const handleSubjectChange = event => {
    setInputValue(event.currentTarget.value);
  };
  useEffect(() => {
    if (inputValue === null && searchQuery !== '') {
      setInputValue(searchQuery);
    }
  }, [searchQuery, inputValue]);

  const handleSubmit = event => {
    event.preventDefault();

    onSubmitClick(inputValue);
    // setSearchQuery('');
  };

  return (
    <form className={s.form__thumb} onSubmit={handleSubmit} autoComplete="off">
      <input
        className={s.form__input}
        type="text"
        name="searchQuery"
        value={inputValue || ''}
        onChange={handleSubjectChange}
      />
      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
}

Searchbar.propTypes = {
  onSubmitClick: PropTypes.func.isRequired,
};

export default Searchbar;