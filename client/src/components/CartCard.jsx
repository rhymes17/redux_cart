import { VscAdd, VscChromeMinimize, VscChromeClose } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import {
  decreaseItemCount,
  increaseItemCount,
  removeItemFromCart,
} from "../features/Cart/cartReducer";

const CartCard = ({ item }) => {
  const { title, id, category, price, quantity, imgUrl } = item;

  const dispatch = useDispatch();

  return (
    <div className="h-full w-full">
      <div className="w-full flex p-3 bg-gradient-to-b from-[#21283F]/50 to-[#21283F]/30 bg-white/10 rounded-md justify-between">
        <div className=" flex gap-3 ">
          <div className="flex-1 rounded-md object-contain flex  items-center ">
            <img src={imgUrl} className="w-full object-contain rounded-md" />
          </div>

          <div className="flex flex-1  w-full flex-col justify-between">
            <div className="flex flex-col">
              <h1 className="">{title}</h1>
              <h3 className="text-sm text-white/30">{category.name}</h3>
            </div>
            <div className="flex gap-3 items-center">
              <div className="border p-[0.15rem] rounded-sm">
                <VscChromeMinimize
                  onClick={() => dispatch(decreaseItemCount(id))}
                  className="text-sm cursor-pointer"
                />
              </div>
              <p className="text-lg">{quantity}</p>
              <div className="border p-[0.15rem] rounded-sm">
                <VscAdd
                  onClick={() => dispatch(increaseItemCount(id))}
                  className="text-sm cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex w-full flex-col justify-between items-end">
          <VscChromeClose
            onClick={() => dispatch(removeItemFromCart(id))}
            className="cursor-pointer"
          />

          <h3 className="font-[450] ">₹.{price}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
