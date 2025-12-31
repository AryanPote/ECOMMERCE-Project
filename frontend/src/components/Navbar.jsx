import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <h1 className="font-bold">My E-commerce</h1>
      <div>Cart Items: {cartItems.length}</div>
    </nav>
  );
}
