import { useCart } from "../features/cart/hooks/useCart";
import { useRemoveFromCart } from "../features/cart/hooks/useRemoveFromCart";
import Loader from "../shared/components/Loader";
import type { cart_display } from "../features/cart/types/index";

const CartPage = () => {
  const { data, isLoading } = useCart();
  const { mutate } = useRemoveFromCart();

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1>Your Cart</h1>

      {data?.items?.map((item: cart_display[]) => (
        <div key={item.id} className="border p-2 mb-2">
          <p>{item.product_name}</p>
          <p>Qty: {item.quantity}</p>

          <button
            onClick={() => mutate(item.id)}
            className="bg-red-500 text-white px-2 py-1"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;