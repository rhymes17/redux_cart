import React from "react";
import {
  VscListSelection,
  VscLockSmall,
  VscHome,
  VscArrowLeft,
} from "react-icons/vsc";
import { useSelector } from "react-redux";

import { Link, useLocation } from "react-router-dom";
import { getAllCartItems } from "../Cart/cartReducer";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const pageName = location.pathname.split("/")[1];
  const items = useSelector(getAllCartItems);
  const countOfItems = items.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="mt-5 mb-6 flex w-full justify-between items-center">
      {pageName === "" ? (
        <div className="p-2 rounded-md bg-white/10 cursor-pointer">
          <VscListSelection className="text-xl " />
        </div>
      ) : (
        <Link to="/">
          <div className="p-2 rounded-md bg-white/10 cursor-pointer">
            <VscArrowLeft className="text-xl " />
          </div>
        </Link>
      )}

      <div>
        <h2 className="font-[500] text-xl">
          {location.pathname === "/"
            ? "Home"
            : pageName.charAt(0).toUpperCase() + pageName.slice(1)}
        </h2>
      </div>

      {pageName === "cart" ? (
        <Link to="/">
          <div className="p-2 rounded-md bg-white/10 cursor-pointer relative">
            <VscHome className="text-xl" />
            {/* <div className="bg-red-500 absolute top-5 right-2 h-[8px] w-[8px] rounded-full"></div> */}
          </div>
        </Link>
      ) : (
        <Link to="/cart">
          <div className="p-2 rounded-md bg-white/10 cursor-pointer relative">
            <VscLockSmall className="text-xl" />
            {countOfItems > 0 && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="bg-red-500 absolute top-5 right-2 h-[8px] w-[8px] rounded-full"
              ></motion.div>
            )}
          </div>
        </Link>
      )}
    </div>
  );
};

export default Header;
