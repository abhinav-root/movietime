import React from "react";
import { CgSmileSad } from "react-icons/cg";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import BackButton from "../components/BackButton";
import useNavigateToHome from "../hooks/useNavigateToHome";

const Error404 = () => {
  const navigateToHome = useNavigateToHome();
  return (
    <div className="text-center bg-red-50 h-[100vh] flex flex-col justify-center items-center">
      <div className="text-2xl flex justify-center items-center text-gray-700">
        Page Not Found{" "}
        <span>
          <CgSmileSad className="text-4xl ml-3" />
        </span>
      </div>
      <BackButton name="Back To Home" navigateTo={navigateToHome} />
    </div>
  );
};

export default Error404;
