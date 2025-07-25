import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return (
          <div className="movies-grid">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        );
    }
    return (
        <>
            <div className="favorites-empty">
                <h2>No Favourites Yet</h2>
                <p>Start adding some movies to your favourites!</p>
            </div>
        </>
    )
}
export default Favorites;