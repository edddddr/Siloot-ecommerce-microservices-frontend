// import { useCart } from "../features/cart/hooks/useCart";
// import { useRemoveFromCart } from "../features/cart/hooks/useRemoveFromCart";
// import Loader from "../shared/components/Loader";
// import type { cart_display } from "../features/cart/types/index";

// const CartPage = () => {
//   const { data, isLoading } = useCart();
//   const { mutate } = useRemoveFromCart();

//   if (isLoading) return <Loader />;

//   return (
//     <div>
//       <h1>Your Cart</h1>

//       {data?.items?.map((item: cart_display[]) => (
//         <div key={item.id} className="border p-2 mb-2">
//           <p>{item.product_name}</p>
//           <p>Qty: {item.quantity}</p>

//           <button
//             onClick={() => mutate(item.id)}
//             className="bg-red-500 text-white px-2 py-1"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CartPage;


import { useCart } from "../../src/features/cart/hooks/useCart";
import { useRemoveFromCart } from "../../src/features/cart/hooks/useRemoveFromCart";
import { useUpdateCart } from "../../src/features/cart/hooks/useUpdateCart";
import { Button } from "../shared/components/Button";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react"; // For removing items
import { useCreateOrder } from "../features/order/hooks/useCreateOrder";
import { getPaymentDetail } from "../features/payment/api/getPaymentDetail";



const CartPage = () => {
  const { data, isLoading } = useCart();
  const { mutate: removeItem } = useRemoveFromCart();
  const { mutate: updateCart } = useUpdateCart();

  const waitForPayment = async (orderId: string, retries = 10) => {
  for (let i = 0; i < retries; i++) {
    try {
      const payment = await getPaymentDetail(orderId);

      if (payment?.checkout_url) {
        return payment;
      }
    } catch (err: any) {
      if (err.response?.status !== 404) {
        throw err; // real error
      }
    }

    // wait 1 second before retry
    await new Promise((res) => setTimeout(res, 1000));
  }

  throw new Error("Payment not ready");
};
  
  const createOrder = useCreateOrder();
  

  const handleCheckout = async () => {
  // 1. Extract and transform the data
  const orderData = {
    user_id: data.user_id,
    items: data.items.map((item) => ({
      product_id: item.product_id,
      quantity: item.quantity,
      price: item.price,
    })),
  };

  // 2. Pass the transformed data to the mutation
  try {
    const order = await createOrder.mutateAsync(orderData);
    console.log(order.id)
    const payment = await waitForPayment(order.id);
    console.log(payment.id)


     window.location.href = payment.checkout_url;
  } catch { 
    alert("Checkout failed");
  }
};

  const handleQuantityChange = (id: string, currentQty: number, delta: number) => {
    const newQty = currentQty + delta;
    if (newQty > 0) {
      updateCart({ id, data: { quantity: newQty.toString() } });
    }
  };




  if (isLoading) return <div className="py-20 text-center">Loading Cart...</div>;

  const subtotal = data?.items.reduce((acc, item) => acc + (item.price * item.quantity), 0) || 0;
  const shipping = subtotal > 0 ? 0 : 0; // Logic for free shipping
  const total = subtotal + shipping;




  return (

    ((!data?.items || data.items.length === 0) ?
     <> 
    <div className="max-w-7xl mx-auto px-4 py-32 text-center flex flex-col items-center gap-6">
      <h2 className="text-2xl font-medium">Your cart is empty</h2>
      <p className="text-content-muted">Looks like you haven't added anything to your cart yet.</p>
      <Link to="/">
        <Button variant="danger" className="px-10 py-4 bg-[#DB4444] text-white">
          Go Shopping
        </Button>
      </Link>
    </div>
    </> 
    :
    <> 
    <main className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        
        {/* --- Column 1: Cart Items Section --- */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          
          {/* Row 1: Header (Grid for alignment) */}
          <div className="grid grid-cols-4 px-10 py-6 shadow-sm rounded border border-brand-light font-medium text-content-dark bg-white">
            <span>Product</span>
            <span className="text-center">Price</span>
            <span className="text-center">Quantity</span>
            <span className="text-right">Subtotal</span>
          </div>

          {/* Row 2: Actual Cart Items */}
          <div className="flex flex-col gap-6">
            {data?.items.map((item) => (
              <div 
                key={item.id} 
                className="grid grid-cols-4 items-center px-10 py-6 shadow-sm rounded border border-brand-light bg-white relative group"
              >
                {/* Product Detail */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                    {/* Remove button visible on hover */}
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="absolute -top-2 -left-2 bg-brand-accent text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                  <span className="text-sm font-normal truncate">{item.name}</span>
                </div>

                {/* Price */}
                <span className="text-center text-content-dark">${item.price}</span>

                {/* Quantity Selector */}
                <div className="flex justify-center">
                  <div className="flex items-center border border-content-muted rounded px-3 py-2 w-20 justify-between">
                    <span>{item.quantity}</span>
                    <div className="flex flex-col gap-1">
          {/* Arrow Up */}
          <button 
            onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
            className="hover:text-brand-accent transition-colors text-[10px]"
          >
            ▲
          </button>
          {/* Arrow Down */}
          <button 
            onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
            className="hover:text-brand-accent transition-colors text-[10px]"
          >
            ▼
          </button>
        </div>
                  </div>
                </div>

                {/* Subtotal */}
                <span className="text-right font-medium">${item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          {/* Row 3: Action Buttons */}
          <div className="flex justify-between items-center mt-4">
            <Link to="/">
              <Button variant="outline" className="px-12 py-4 border-content-dark text-content-dark">
                Return To Shop
              </Button>
            </Link>
            <Button variant="outline" className="px-12 py-4 border-content-dark text-content-dark">
              Update Cart
            </Button>
          </div>
        </div>

        {/* --- Column 2: Cart Total Section --- */}
        <div className="w-full lg:w-1/3 border-2 border-content-dark rounded px-6 py-8 flex flex-col gap-6 bg-white">
          <h3 className="text-xl font-medium text-content-dark">Cart Total</h3>
          
          <div className="flex flex-col gap-4">
            <div className="flex justify-between border-b border-brand-light pb-4">
              <span className="text-base">Subtotal:</span>
              <span className="text-base font-medium">${subtotal}</span>
            </div>
            
            <div className="flex justify-between border-b border-brand-light pb-4">
              <span className="text-base">Shipping:</span>
              <span className="text-base font-medium">{shipping === 0 ? "Free" : `$${shipping}`}</span>
            </div>
            
            <div className="flex justify-between pt-2">
              <span className="text-base">Total:</span>
              <span className="text-xl font-medium">${total}</span>
            </div>
          </div>

          <Button 
            variant="danger" 
            className="w-full py-4 bg-[#DB4444] text-white rounded font-medium mt-2"
             onClick={handleCheckout}
          >
            {createOrder.isPending ? "Processing..." : "Process to Checkout"}
          </Button>
        </div>

      </div>
    </main>
    </>)
  );
};

export default CartPage;