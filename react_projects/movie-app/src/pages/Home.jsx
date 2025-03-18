import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "Shaktiman", release_date: "2005" },
    { id: 2, title: "Shakalaka boom boom", release_date: "2007" },
    { id: 3, title: "Lucky", release_date: "2006" },
    { id: 4, title: "MAD", release_date: "2014" },
  ];

  const handleSearch = (e) => {
    e.preventDefault()
    // alert(searchQuery)
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movie..."
          className="search-movie"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && (
          <MovieCard movie={movie} key={movie.id} />
        ))}
        {/* {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && (
          <MovieCard movie={movie} key={movie.id} />
        ))} */}
      </div>
    </div>
  );
}

export default Home;
