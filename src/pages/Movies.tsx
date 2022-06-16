import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { instance } from "../api/axios";
import { urls } from "../api/urls";
import { FadeLoader } from "react-spinners";
import MovieList from "../components/MovieList";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const incrementPageNumber = () => {
    setPage(page + 1);
  };

  const getMovies = async (page: number) => {
    const response = await instance({
      method: "GET",
      url: urls.popularMovies,
      params: {
        page: page,
      },
    });
    const data = response.data.results;
    return data;
  };

  useEffect(() => {
    (async () => {
      const data = await getMovies(1);
      setMovies(data);
      incrementPageNumber();
    })();
  }, []);

  const getNextMovies = async () => {
    try {
      const nextMovies = await getMovies(page);
      if (nextMovies.length === 0) {
        setHasMore(false);
      }
      if (nextMovies.length > 0) {
        setMovies([...movies, ...nextMovies]);
      }
      incrementPageNumber();
    } catch (e) {
      console.log(e);
      setHasMore(false);
    }
  };
  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={getNextMovies}
      hasMore={hasMore}
      loader={<FadeLoader />}
      endMessage={
        <div className="py-8 bg-red-200 text-center text-gray-800">
          You have reached the end
        </div>
      }
    >
      <MovieList movies={movies} />
    </InfiniteScroll>
  );
};

export default Movies;
