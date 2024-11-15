import { Minus, Plus } from "lucide-react";
import React from "react";


const CartBestsellers = ({ bestsellersCart, setBestsellersCart }) => {
  const handleAddItem = (item) => {
    const exist = bestsellersCart.find(
      (cart) => cart.bestsellers_aid === item.bestsellers_aid
    );


    if (exist !== undefined) {
      setBestsellersCart(
        bestsellersCart.map((cart) =>
          cart.bestsellers_aid === item.bestsellers_aid
            ? { ...exist, quantity: exist.quantity + 1 }
            : cart
        )
      );
    } else {
      setBestsellersCart([...bestsellersCart, { ...item, quantity: 1 }]);
    }
  };


  const handleRemoveItem = (item) => {
    const exist = bestsellersCart.find(
      (cart) => cart.bestsellers_aid === item.bestsellers_aid
    );
    if (exist.quantity === 1) {
      setBestsellersCart(
        bestsellersCart.filter((cart) => cart.bestsellers_aid !== item.bestsellers_aid)
      );
    } else {
      setBestsellersCart(
        bestsellersCart.map((cart) =>
          cart.bestsellers_aid === item.bestsellers_aid
            ? { ...exist, quantity: exist.quantity - 1 }
            : cart
        )
      );
    }
  };


  return (
    <>
      {bestsellersCart.map((item, key) => (
        <div
          className="card-item  items-center mb-2 pb-2 border-b border-gray-100"
          key={key}
        >
          <div className=" flex justify-between w-full items-center">
            <div>
              <h6 className=" text-[clamp(12px,_6vw,_14px)] text-black">
                {item.bestsellers_title}
              </h6>
              <p className="text-light">
                <span className="text-xs pr-0.5 font-normal ">PHP</span>
                {item.bestsellers_price}
              </p>
            </div>
            <div className="">
              <ul className="flex gap-3 items-center">
                <li className="size-[25px] bg-accent grid place-content-center rounded-full ">
                  <button onClick={() => handleAddItem(item)}>
                    <Plus stroke="#fff" size={15} />
                  </button>
                </li>
                <li className="text-base font-bold">{item.quantity}</li>
                <li className="size-[25px] bg-accent grid place-content-center rounded-full ">
                  <button onClick={() => handleRemoveItem(item)}>
                    <Minus stroke="#fff" size={15} />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};


export default CartBestsellers;




