import React from "react";
import CartCard from "../../components/CartCard";
import { useSelector } from "react-redux";
import { getAllCartItems } from "./cartReducer";
import { VscPackage } from "react-icons/vsc";

const Cart = () => {
  const items = useSelector(getAllCartItems);

  const count = items.reduce((acc, cnt) => acc + cnt.quantity, 0);
  const subTotal = items.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const discount = (subTotal * 0.1).toFixed(2);

  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-2">
        {count > 0 ? (
          <p className="text-[0.8rem]">{count} items</p>
        ) : (
          <div className="h-[60vh] flex justify-center items-center flex-col">
            <VscPackage className="text-5xl" />
            <p className="text-[1.8rem]">
              Your cart is empty :( <br /> Kindly add items to your cart.
            </p>
          </div>
        )}

        {/* display */}

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <CartCard key={item.id} item={item} />
          ))}
        </div>

        {count > 0 && (
          <>
            <div className="mt-3 flex flex-col gap-2">
              <h1 className="font-[400]">ORDER SUMMARY</h1>
              <div className="w-full">
                <div className="w-full flex justify-between">
                  <p className="text-white/40 text-[0.8rem]">Subtotal</p>
                  <p className="text-white/60 text-[0.8rem]">
                    ₹{subTotal.toFixed(2)}
                  </p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-white/40 text-[0.8rem]">Discount</p>
                  <p className="text-white/60 text-[0.8rem]">-₹{discount}</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-white/40 text-[0.8rem]">Shipping</p>
                  <p className="text-white/60 text-[0.8rem]">FREE</p>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between">
              <h1 className="text-[1.2rem] font-[450]">Total</h1>
              <h1 className="text-[1.2rem] font-[450]">
                ₹{(subTotal - discount).toFixed(2)}
              </h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
