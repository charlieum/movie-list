import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const MovieDisplay = ({movieList, searchMovie}) => {

  return (
    <div className="movieDisplay">
      {movieList.map((dataInstance) => {
        return <MovieEntry dataInstance={dataInstance}/>
      })}
      <div>
        &nbsp;
      </div>
    </div>
  )
};

export default MovieDisplay;
