import React from 'react';

function TodoSearch({ searchValue, setSearchValue }) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        placeholder="Search"
        onChange={onSearchValueChange} />
    </div>
  );
}

export { TodoSearch };