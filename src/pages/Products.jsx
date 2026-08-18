import { useNavigate } from "react-router-dom";
import { products } from "../mock-data/products";

export default function Products() {
  // react Hook ==> useNavigate() is method
  const navigate = useNavigate();

  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="text-2xl font-bold mb-4">
        <h1>Products</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price.toFixed(2)}</p>

              <div>
                <button
                  type="button"
                  onClick={() => handleViewDetails(product.id)}
                  className="text-white bg-teal-500 px4 py-2 rounded-md hover:bg-teal-200"
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
