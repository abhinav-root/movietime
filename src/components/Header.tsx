import React from "react";
import Link from "./Link";
import Logo from "./Logo";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <header className="shadow-md py-6 px-10 ">
      <div className="flex">
        <div className="grow">
          <Logo />
        </div>
        <div className="grow">
          <ul className="flex justify-evenly relative top-3">
            <li>
              <Link url="movies" title="movies" />
            </li>
            <li>
              <Link url="shows" title="shows" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
