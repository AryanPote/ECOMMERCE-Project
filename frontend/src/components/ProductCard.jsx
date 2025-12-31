import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <h2 className="font-bold">{product.name}</h2>
      <p>${product.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
