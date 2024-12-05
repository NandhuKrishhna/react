import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList.js";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    // console.log("button clicked")
  };
  return (
    <div className="text-center">
      <h1 className="font-bold text-lg p-4">CART</h1>

      <div className="w-6/12 m-auto">
        {cartItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="bg-black text-white p-2 rounded-md"
          >
            Clear Cart
          </button>
        )}
        <div className="text-red-900 text-lg font-bold">
          {cartItems.length === 0 && (
            <h1>No items in the Cart😥 . Please add items</h1>
          )}
        </div>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
