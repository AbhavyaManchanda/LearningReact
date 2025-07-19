import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    // This state could be used to manage the search input value
    // and filter the movies based on user input

    const movies = [
        { id: 1, title: "John wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "2021" },
        { id: 3, title: "Mathew", release_date: "2013" },
        { id: 4, title: "insantiates", release_date: "2009" }
    ];
    // This is a hardcoded list of movies, in a real application this data would come from an API


    const handleSearch = (e) => { 
        // This function would handle the search logic, e.g., filtering the movies based on user input
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("--------"); // Clear the search input after submission

    }



    return (
        <>
            <div className="home">

                <form onSubmit={handleSearch} className="search-form">

                    <input type="text"
                        placeholder="Search for movies..." className="search-input"
                        value={searchQuery}
                        onChange={(e)=>setSearchQuery(e.target.value)}
                    />

                    <button type="submit" className="search-button">Search</button>

                </form>


                <div className="movie-grid">
                    {movies.map(mov =>
                    (<MovieCard movie={mov} key={mov.id} />
                    ))}
                </div>
                
            </div>
        </>
    )
}
export default Home;