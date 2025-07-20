import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // This state could be used to manage the search input value
  // and filter the movies based on user input

  // const movies = [
  //     { id: 1, title: "John wick", release_date: "2020" },
  //     { id: 2, title: "Terminator", release_date: "2021" },
  //     { id: 3, title: "Mathew", release_date: "2013" },
  //     { id: 4, title: "matts", release_date: "2009" }
  // ];

  // This is a hardcoded list of movies, in a real application this data would come from an API

  //const movies= getPopularMovies();
  // This function fetches popular movies from an API and returns them as an array

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        setError("Failed to fetch popular movies");
        console.error("Error fetching popular movies:", error);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  // const handleSearch = (e) => {
  //     // This function would handle the search logic, e.g., filtering the movies based on user input
  //     e.preventDefault();
  //     alert(searchQuery);
  //     setSearchQuery("--------"); // Clear the search input after submission

  // }

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    }
    catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    }
    finally {
      setLoading(false);
      }
    setSearchQuery(""); // Clear the search input after submission
    };
    

  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Home;

// Here we map over the movies array and render a MovieCard for each movie
// The key prop is important for React to identify which items have changed, are added, or removed
// We can also filter the movies based on the search query
// mov.title.toLowerCase().startsWith(searchQuery)    &&
// //
// This condition checks if the movie title starts with the search query
