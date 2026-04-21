import { useAddToCart } from "../../cart/hooks/useAddToCart";
import type { Product } from "../types/product";

const ProductCard = ({ product }: { product: Product }) => {
    const { mutate, isPending } = useAddToCart();


  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="font-bold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>

      <button
        onClick={() =>
          mutate({ product_id: product.id, quantity: 1 })
        }
        className="bg-blue-500 text-white px-3 py-1"
      >
        {isPending ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;