import React, { useState } from 'react';
import styled from 'styled-components';


function SearchBar({ onSearch }) {
    const [currentSearch, setCurrentSearch] = useState("");
    function handleSubmit(e) {
      e.preventDefault();
      onSearch(currentSearch);
    }
  
    return (
      <Button>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Search Rentals by City"
          value={currentSearch}
          onChange={(e) => setCurrentSearch(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      </Button>
    );
  }
  
  export default SearchBar;

  const Button = styled.div`
    
    input {
      width: 80%;
      margin: 15px;
      height: 40px;
    }
  
    button {
      width: 40px;
      height: 40px;
      position: relative;
      right: 40px;
      bottom: -1px;
      text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
      background: black;
      border-radius: 5px;
      font-size: 20px;
    }
  
  `