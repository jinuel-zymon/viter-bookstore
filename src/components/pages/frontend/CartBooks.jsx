import { Minus, Plus } from "lucide-react";
import React from "react";


const CartBooks = ({ booksCart, setBooksCart }) => {
  const handleAddItem = (item) => {
    const exist = booksCart.find((cart) => cart.books_aid === item.books_aid);


    if (exist !== undefined) {
      setBooksCart(
        booksCart.map((cart) =>
          cart.books_aid === item.books_aid
            ? { ...exist, quantity: exist.quantity + 1 }
            : cart
        )
      );
    } else {
      setBooksCart([...booksCart, { ...item, quantity: 1 }]);
    }
  };


  const handleRemoveItem = (item) => {
    const exist = booksCart.find((cart) => cart.books_aid === item.books_aid);
    if (exist.quantity === 1) {
      setBooksCart(
        booksCart.filter((cart) => cart.books_aid !== item.books_aid)
      );
    } else {
      setBooksCart(
        booksCart.map((cart) =>
          cart.books_aid === item.books_aid
            ? { ...exist, quantity: exist.quantity - 1 }
            : cart
        )
      );
    }
  };


  return (
    <>
      {booksCart.map((item, key) => (
        <div
          className="card-item  items-center mb-2 pb-2 border-b border-gray-100"
          key={key}
        >
          <div className=" flex justify-between w-full items-center">
            <div>
              <h6 className=" text-[clamp(12px,_6vw,_14px)] text-black">
                {item.books_title}
              </h6>
              <p className="text-light">
                <span className="text-xs pr-0.5 font-normal ">PHP</span>
                {item.books_price}
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


export default CartBooks;




