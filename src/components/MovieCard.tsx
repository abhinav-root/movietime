import React from "react";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { urls } from "../api/urls";
import config from "../utils/config";

interface IMovieCardProps {
  posterPath: string;
  id: number;
  originalTitle: string;
  releaseDate: string;
  avgVote: number;
}

const MovieCard = ({
  avgVote,
  id,
  originalTitle,
  posterPath,
  releaseDate,
}: IMovieCardProps) => {
  const navigate = useNavigate();
  function goToMovieDetailPage(movieId: number) {
    navigate(`/movies/${movieId.toString()}`);
  }
  const imageUrl = `${config.images.secure_base_url}/original/${posterPath}`;
  return (
    <div
      className="w-64 rounded-md cursor-pointer shadow-2xl border hover:opacity-70"
      key={id}
      onClick={() => goToMovieDetailPage(id)}
    >
      <div className="h-96">
        <img
          src={imageUrl}
          alt={originalTitle}
          className="w-full h-full rounded-t-md"
        />
      </div>
      <div className="text-lg mt-2 mb-3 text-gray-600 px-4 text-center">
        {originalTitle}
      </div>
      <div className=" px-3 flex justify-between text-gray-800">
        <span className="font-sans font-semibold">
          {releaseDate.split("-")[0]}
        </span>
        <span className="tracking-wide">
          <span className="text-red-600 text-xl">{`${avgVote}`}</span>
          /10
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
