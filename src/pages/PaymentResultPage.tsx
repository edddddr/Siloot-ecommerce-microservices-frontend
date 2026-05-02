import { useSearchParams } from "react-router-dom";
import { useOrderStatus } from "../features/order/hooks/useOrderStatus"

const PaymentResultPage = () => {
  const [params] = useSearchParams();
  const orderId = params.get("order_id");

  const { data, isLoading } = useOrderStatus(orderId);

  if (!orderId) {
    return <div>Invalid request</div>;
  }

  if (isLoading) {
    return <div>Checking payment status...</div>;
  }

  if (data?.status === "PAID") {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">✅ Payment Successful</h1>
        <p>Your order has been completed.</p>
      </div>
    );
  }

  if (data?.status === "FAILED") {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">❌ Payment Failed</h1>
        <p>Please try again.</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h1>⏳ Processing payment...</h1>
      <p>Please wait...</p>
    </div>
  );
};

export default PaymentResultPage;