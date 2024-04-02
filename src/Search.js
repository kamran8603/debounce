import React, { useState, useEffect } from 'react';

function Debounce() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); 

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchResults = [
    "apple", "orange", "banana", "pear", "grapefruit",
    "peach", "apricot", "nectarine", "plum", "mango",
    "strawberry", "blueberry", "kiwi", "passionfruit", "raspberry",
    "watermelon"
  ].filter((fruit) => fruit.includes(debouncedSearchTerm));

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {searchResults.map((result, index) => (
          <p key={index}>{result}</p>
        ))}
      </ul>
    </div>
  );
}

export default Debounce;