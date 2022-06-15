import React from "react";
import Link from "./Link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="shadow-md py-6 px-10 flex">
      <div className="grow">
        <Logo />
      </div>
      <div className="grow">
        <ul className="flex justify-around relative top-3">
          <li>
            <Link url="movies" title="movies" />
          </li>
          <li>
            <Link url="shows" title="shows" />
          </li>
          <li>
            <Link url="favorites" title="favorites" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
