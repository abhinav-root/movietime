import React, { useEffect, useState } from "react";
import { instance } from "../api/axios";
import { urls } from "../api/urls";
import MovieCard from "../components/MovieCard";
import useNavigateToError from "../hooks/useNavigateToError";
import { IMovie } from "./Movies";

const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const navigateToError = useNavigateToError();

  useEffect(() => {
    (async () => {
      try {
        const response = await instance({
          method: "GET",
          url: urls.topRatedMovies,
        });
        const data = response.data;
        setMovies(data.results);
      } catch (e) {
        console.log(e);
        navigateToError();
      }
    })();
  }, []);

  return (
    <div className="grid w-[60%] sm:w-[90%] md:w-[100%] lg:w-[95%] 2xl:w-[80%] gap-y-16 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 mx-auto auto-cols-auto">
      {movies?.map((movie: IMovie) => {
        return (
          <MovieCard
            key={movie.id}
            avgVote={movie.vote_average}
            id={movie.id}
            originalTitle={movie.original_title}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
          />
        );
      })}
    </div>
  );
};

export default Home;
