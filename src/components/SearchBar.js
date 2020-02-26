import React from 'react';

const SearchBar = (props) => {
  console.log(props)
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} 
        onChange={() => props.sortByTicker()}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} 
        onChange={() => props.sortByPrice()}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.filterByType(event.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
