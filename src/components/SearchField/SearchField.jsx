import React from 'react';
import './SearchField.scss';

const SearchField = ({ placeholder, handleSearch }) => {
  return (
    <div>
      <input
        type='search'
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  )
}

export default SearchField;