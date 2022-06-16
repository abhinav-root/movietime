import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../api/axios";
import { urls } from "../api/urls";
import useNavigateBack from "../hooks/useNavigateBack";
import useNavigateToError from "../hooks/useNavigateToError";
import { IMovie } from "../pages/Movies";
import config from "../utils/config";
import BackButton from "./BackButton";

const MovieDetails = () => {
  const navigateToError = useNavigateToError();
  const navigateBack = useNavigateBack();
  const { movieId } = useParams();
  const [movie, setMovie] = useState<IMovie>();

  async function getMovie() {
    const response = await instance({
      method: "GET",
      url: urls.movieDetails(movieId),
    });
    console.log(response.data);
    return response.data;
  }

  const imageUrl = `${config.images.secure_base_url}/original/${movie?.poster_path}`;

  useEffect(() => {
    (async () => {
      try {
        const data = await getMovie();
        setMovie(data);
      } catch (e) {
        console.log(e);
        navigateToError();
      }
    })();
  }, []);

  <div className="h-32 w-200 flex"></div>;
  return (
    <div className="w-[90%] mx-auto">
      <div className="mb-10 flex justify-center items-center">
        <BackButton name="go back" navigateTo={navigateBack} />
      </div>
      <div className="rounded-md shadow-lg border mx-auto px-4 py-2">
        <div className="flex justify-between">
          <div className="w-60 h-72 grow-1 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-[30rem] lg:h-[40rem]">
            <img
              src={imageUrl}
              alt={movie?.original_title}
              className="w-full h-full rounded-t-md"
            />
          </div>
          <div className="grow-2 px-1 py-1 mx-auto">
            <div className="text-xs text-gray-700 flex flex-col  justify-around items-center h-full">
              <div className="text-base text-gray-700">{movie?.title}</div>
              <div className="font-sans text-lg">
                {movie?.release_date.split("-")[0]}
              </div>
              <div className="text-lg space-x-3">
                <span className="">IMDB</span>
                <span className="text-red-500 text-xl">
                  {movie?.vote_average}
                </span>
              </div>
              <div className="text-lg font-mo">
                Adult: {movie?.adult ? "Yes" : "No"}
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-600 leading-5 text-md mt-4 mb-3">
          {movie?.overview}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
