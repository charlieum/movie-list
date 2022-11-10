import React from 'react';

const MovieInput = ({addMovie}) => {

  const [input, setInput] = React.useState('');

  const addFormChange = () => {
    event.preventDefault();
    addMovie(input);
  };

  const callSetInput = (data) => {
    // console.log('data: ', data);
    setInput(data);
  };

  return (
    <span>
      <form onSubmit={() => addFormChange()} className="movieInputForm">
        <input className="inputForm" type="text" onChange={(event) => callSetInput(event.target.value)}/>
        <button className="inputButton" type="submit">INPUT</button>
      </form>
    </span>
  )
};

export default MovieInput;
