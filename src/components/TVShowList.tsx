import React from "react";
import { ITVShow } from "../pages/TVShows";
import ShowCard from "./ShowCard";

interface ITShowList {
  shows: ITVShow[];
}

const TVShowList = (props: ITShowList) => {
  return (
    <div className="grid w-[60%] sm:w-[90%] md:w-[100%] lg:w-[95%] 2xl:w-[80%] gap-y-16 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 mx-auto auto-cols-auto">
      {props.shows.map((show: ITVShow) => {
        return (
          <ShowCard
            key={show.id}
            avgVote={show.vote_average}
            id={show.id}
            originalName={show.original_name}
            posterPath={show.poster_path}
            releaseDate={show.first_air_date}
          />
        );
      })}
    </div>
  );
};

export default TVShowList;
