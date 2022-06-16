import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FadeLoader } from "react-spinners";
import { instance } from "../api/axios";
import { urls } from "../api/urls";
import TVShowList from "../components/TVShowList";

export interface ITVShow {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

const TVShows = () => {
  const [shows, setShows] = useState<ITVShow[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const incrementPageNumber = () => {
    setPage(page + 1);
  };

  const getTVShows = async (page: number) => {
    const response = await instance({
      method: "GET",
      url: urls.popularTvShows,
      params: {
        page: page,
      },
    });
    const data = response.data.results;
    return data;
  };

  useEffect(() => {
    (async () => {
      const data = await getTVShows(1);
      setShows(data);
      incrementPageNumber();
    })();
  }, []);

  const getNextMovies = async () => {
    try {
      const nextShows = await getTVShows(page);
      if (nextShows.length === 0) {
        setHasMore(false);
      }
      if (nextShows.length > 0) {
        setShows([...shows, ...nextShows]);
      }
      incrementPageNumber();
    } catch (e) {
      console.log(e);
      setHasMore(false);
    }
  };
  return (
    <InfiniteScroll
      dataLength={shows.length}
      next={getNextMovies}
      hasMore={hasMore}
      loader={<FadeLoader />}
      endMessage={
        <div className="py-8 bg-red-200 text-center text-gray-800">
          You have reached the end
        </div>
      }
    >
      <TVShowList shows={shows} />
    </InfiniteScroll>
  );
};

export default TVShows;
