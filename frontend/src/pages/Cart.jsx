import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item._id} className="flex justify-between items-center mb-2">
            <span>{item.name} - ${item.price}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removeFromCart(item._id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
