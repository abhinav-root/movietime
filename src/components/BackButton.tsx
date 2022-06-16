import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

interface IBackButtonProps {
  navigateTo: () => void;
  name: string;
}

const BackButton = ({ name, navigateTo }: IBackButtonProps) => {
  return (
    <button
      className="flex justify-center items-center mt-6 px-8 py-4 bg-red-600 rounded-md cursor-pointer text-gray-50 capitalize hover:bg-red-500"
      onClick={navigateTo}
    >
      {name}{" "}
      <span>
        <HiOutlineArrowNarrowLeft className="text-gray-50 text-xl ml-2" />
      </span>
    </button>
  );
};

export default BackButton;
