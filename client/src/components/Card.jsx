import React, { useEffect, useState } from "react";
import { VscHeart, VscLockSmall } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../features/Cart/cartReducer";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

const Card = ({ item }) => {
  const { title, price, description, images } = item;
  const [cartClicked, setCartClicked] = useState(false);

  const imgUrl = images[0].split('"')[1];

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItemsToCart({ ...item, imgUrl }));
    setCartClicked(true);
  };

  const variants = {
    cartAni: {
      opacity: [0, 1, 0],
      x: [0, 30, 35],
      y: [0, -30, -250],
    },
    transition: {
      duration: 1.5,
      ease: "backInOut",
    },
  };

  const controls = useAnimationControls();

  useEffect(() => {
    if (cartClicked === true) {
      controls.start("cartAni");
    }
    setTimeout(() => {
      setCartClicked(false);
    }, 2000);
  }, [cartClicked]);

  return (
    <div className="relative h-full bg-white/10 z-50 backdrop-blur-2xl rounded-md px-5 py-5 w-[80%] mx-auto flex flex-col gap-3">
      <div className="h-full w-full flex justify-center items-center">
        <div className="max-h-[30%] w-full object-contain flex flex-col items-center justify-center">
          <img
            src={imgUrl}
            className="rounded-xl object-contain w-[80%] max-h-[40%]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 relative ">
        <p className="text-[1rem] font-semibold">Rs. {price}</p>
        <div className="h-[2.5px] w-[15px] bg-amber-500"></div>

        <h1 className="text-[0.9rem]">{title}</h1>
        <p className="text-[0.6rem] opacity-30 truncate w-[70%]">
          {description}
        </p>

        <div className="absolute left-[20%] h-[9px] w-[120px] blur-2xl bg-amber-500 z-[-10]"></div>
      </div>

      <div className="absolute bottom-[5%] right-3">
        <div className="flex gap-3">
          <VscHeart className="text-xl cursor-pointer" />
          <VscLockSmall
            onClick={handleClick}
            className="text-xl cursor-pointer"
          />
        </div>
        {cartClicked && (
          <motion.div
            animate={controls}
            variants={variants}
            className="absolute top-0 right-0.5 h-[15px] w-[15px] rounded-full bg-red-500 "
          ></motion.div>
        )}
      </div>
    </div>
  );
};

export default Card;
