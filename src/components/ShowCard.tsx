import React from "react";
import { useNavigate } from "react-router-dom";
import config from "../utils/config";

interface IShowCardProps {
  posterPath: string;
  id: number;
  originalName: string;
  releaseDate: string;
  avgVote: number;
}

const ShowCard = ({
  avgVote,
  id,
  originalName,
  posterPath,
  releaseDate,
}: IShowCardProps) => {
  const navigate = useNavigate();
  const imageUrl = `${config.images.secure_base_url}/original/${posterPath}`;

  function goToDetailPage(showId: number) {
    navigate(`/shows/${showId.toString()}`);
  }
  return (
    <div
      className="w-64 rounded-md cursor-pointer shadow-2xl border hover:opacity-70"
      key={id}
      onClick={() => goToDetailPage(id)}
    >
      <div className="h-96">
        <img
          src={imageUrl}
          alt={originalName}
          className="w-full h-full rounded-t-md"
        />
      </div>
      <div className="text-lg mt-2 mb-3 text-gray-600 px-4 text-center">
        {originalName}
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

export default ShowCard;
