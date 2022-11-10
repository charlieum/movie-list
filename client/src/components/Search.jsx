import React from 'react';

const Search = ({searchMovie}) => {
  const [search, setSearch] = React.useState('');

  const inputChange = () => {
    event.preventDefault();
    searchMovie(search);
  };

  const callSetSearch = (data) => {
    setSearch(data);
  };

  return (
    <div className="search">

      <form onSubmit={() => inputChange()}>
        <input className="searchForm" type="text" onChange={(event) => callSetSearch(event.target.value)}/>
        <button className="searchButton" type="submit">SEARCH</button>
      </form>
    </div>
  )
};

export default Search;
