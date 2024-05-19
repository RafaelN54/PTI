import { useEffect, useState } from "react";
import './movie.css';

const MoviesContainer = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function getMovies() {
      const data = await fetchMoviesData();
      setMovies(data.results);
    }
    getMovies();
  }, []);

  async function fetchMoviesData() {
    const url = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjNkYjgyOWFjZTBmNjhjZWU5NzkwNWMwOTljOThhMCIsInN1YiI6IjY2M2RmNDYwY2YxYjE1MWQ5OTdmMGZhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3j6yNOHKY9-Fq8cPdNsZwHFk14KxBSkYjSRV6ZgJ1cI'
      }
    };
    
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  }

  return (
    <div className="container-movie">
      {movies && movies.slice(0, 10).map((movie, index) => (
        <div key={index} className="movie">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div className="movie-details">
            <div className="box">
              <div className="title">{movie.original_title}</div>
              <div className="rating">Rating: {movie.vote_average}</div>
            </div>
            <div className="overview">{movie.overview}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesContainer;
