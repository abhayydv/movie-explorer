import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=b2af8831&s=${query}`
    );
    const data = await res.json();
    setMovies(data.Search || []);
  };

  return (
    <div className="app" >
      <h1>MOVIE EXPLORER </h1>
      <SearchBar onSearch={fetchMovies} />

      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((m) => <MovieCard key={m.imdbID} movie={m} />)
        ) : (
          <p className="no-movies">search for movies above</p>
        )}
      </div>
    </div>
  );
}

export default App;
