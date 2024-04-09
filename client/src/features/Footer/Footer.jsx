import React, { useEffect, useState } from "react";
import { VscHome, VscHeart, VscAccount, VscSearch } from "react-icons/vsc";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const [current, setCurrent] = useState(location.pathname);

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);

  return (
    <div className="absolute bottom-1 left-0 right-0 flex items-center justify-between py-3 px-3 w-[80%] mx-auto">
      <NavLink to="/">
        <VscHome
          className={`text-2xl ${
            current === "/" ? "opacity-100" : "opacity-30"
          }`}
        />
      </NavLink>
      <NavLink to="/search">
        <VscSearch
          className={`text-2xl ${
            current === "/search" ? "opacity-100" : "opacity-30"
          }`}
        />
      </NavLink>
      <NavLink to="/saved">
        <VscHeart
          className={`text-2xl ${
            current === "/saved" ? "opacity-100" : "opacity-30"
          }`}
        />
      </NavLink>
      <NavLink to="/profile">
        <VscAccount
          className={`text-2xl ${
            current === "/profile" ? "opacity-100" : "opacity-30"
          }`}
        />
      </NavLink>
    </div>
  );
};

export default Footer;
