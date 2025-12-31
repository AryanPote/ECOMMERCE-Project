import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ padding: "20px" }}>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: "1px solid #ccc",
                padding: "16px",
                borderRadius: "6px",
              }}
            >
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
