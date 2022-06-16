import React from "react";
import { NavLink } from "react-router-dom";

interface ILinkProps {
  url: string;
  title: string;
}

const Link = ({ url, title }: ILinkProps) => {
  return (
    <NavLink
      to={url}
      className="text-gray-500 uppercase text-base font-normal tracking-wider hover:text-gray-800"
    >
      {title}
    </NavLink>
  );
};

export default Link;
