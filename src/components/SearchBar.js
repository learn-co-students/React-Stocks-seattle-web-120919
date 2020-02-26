import React from 'react';

const SearchBar = ({ sortAlphabetically, sortByPrice, filterByType }) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input name="sort" type="radio" value="Alphabetically" checked={null} onChange={() => sortAlphabetically()} />
        Alphabetically
      </label>
      <label>
        <input name="sort" type="radio" value="Price" checked={null} onChange={() => sortByPrice()} />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => filterByType(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div >
  );
}


export default SearchBar;
