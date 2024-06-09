import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { axiosInstance } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query");

    if (query) {
      axiosInstance
        .get(`/search/movie?query=${query}`)
        .then((response) => setMovies(response.data.results))
        .catch((error) => console.error("Error searching movies:", error));
    }
  }, [searchParams]);

  return (
    <div>
      <h1 className="title-page">Search Movies</h1>
      <SearchForm setSearchParams={setSearchParams} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
