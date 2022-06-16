import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <span className="text-4xl text-red-500 uppercase font-black tracking-wider">
        tv
      </span>
      <span className="text-xl text-gray-600 tracking-wider">time</span>
    </Link>
  );
};

export default Logo;
