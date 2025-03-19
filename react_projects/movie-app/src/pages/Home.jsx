import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const movies = [
  //   { id: 1, title: "Shaktiman", release_date: "2005" },
  //   { id: 2, title: "Shakalaka boom boom", release_date: "2007" },
  //   { id: 3, title: "Lucky", release_date: "2006" },
  //   { id: 4, title: "MAD", release_date: "2014" },
  // ];
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Somenting went wrong. Please try again");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    // alert(searchQuery)
    if(!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try{
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    } catch{
      console.log(err)
      setError("Failed to load movie...")
    } finally{
      setLoading(false)
    }

    // setSearchQuery("")
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

      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
          {/* {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && (
          <MovieCard movie={movie} key={movie.id} />
        ))} */}
        </div>
      )}
    </div>
  );
}

export default Home;
