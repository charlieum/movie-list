import React from 'react';
import Search from './Search.jsx';
import MovieInput from './MovieInput.jsx';
import MovieView from './MovieView.jsx';
import MovieDisplay from './MovieDisplay.jsx';
import MovieEntry from './MovieEntry.jsx';



const App = (props) => {

  var movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  const [movieList, setMovieList] = React.useState(movies);
  const [movieSearch, setMovieSearch] = React.useState(movies);

  const searchMovie = (search) => {
    event.preventDefault();
    var newList = [];
    var lowercaseSearch = search.toLowerCase();

    for (var i = 0; i < movies.length; i++) {
      var lowercaseTitle = movies[i].title.toLowerCase();
      if (lowercaseTitle.indexOf(lowercaseSearch) !== -1) {
        newList.push(movies[i]);
      }
    }

    if(newList.length === 0) {
      newList.push({title: 'no movie by that name found'})
    }

    setMovieList(newList);
  };

  const addMovie = (add) => {
    event.preventDefault();
    movies.push({title: add});
    console.log(movies);
    setMovieList(movies);
  };

  return (
    <div>
      <div className="header">
        <h1>Movie List</h1>
      </div>
      <Search searchMovie={searchMovie}/>
      <div className="navBar">
        <MovieView />
        <MovieInput addMovie={addMovie} />
      </div>

      <MovieDisplay movieList={movieList} searchMovie={searchMovie}/>
    </div>
  )
};

export default App;
