import { useState } from 'react';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import './App.css';

function App() {
  // state to hold the mpvie data
  const [movie, setMovie] = useState(null)

  // Function to fetch movie data
  const getMovie = async (searchTerm) => {
    try{
      const res = await fetch(`https://www.omdbapi.com/?apikey=ef523d3&t=${searchTerm}`);
    const data = await res.json();
    console.log(data);
    setMovie(data); // set the data into our state
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <h1>React Movies</h1>
      <Form movieSearch={getMovie} />
      {movie && <MovieDisplay movie={movie} />}
    </div>
  );
}

export default App;
