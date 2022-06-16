import React from "react";
import MovieCard from "../components/MovieCard";
import { IMovie } from "../pages/Movies";

interface IMovieListProps {
  movies: IMovie[];
}

const MovieList = (props: IMovieListProps) => {
  return (
    <div className="grid w-[60%] sm:w-[90%] md:w-[100%] lg:w-[95%] 2xl:w-[80%] gap-y-16 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 mx-auto auto-cols-auto">
      {props.movies.map((movie: IMovie) => {
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

export default MovieList;
