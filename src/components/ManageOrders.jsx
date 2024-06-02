import { useLocation } from "react-router-dom";
import { useGetSingleOrderQuery } from "../redux/api/order";
import { useManageOrderMutation } from "../redux/api/admin";
import Loader from "./Loader";
import { useEffect } from "react";
import toast from "react-hot-toast";

function ManageOrder() {
  const location = useLocation();
  const { data, isLoading } = useGetSingleOrderQuery(
    location.pathname.split("/")[3]
  );
  const [
    updateOrderStatus,
    { isLoading: isLoadingUpdateOrder, data: updateOrderRes, isError, error },
  ] = useManageOrderMutation();
  const user = data?.data?.user || {};
  const paymentInfo = data?.data?.paymentInfo || {};
  const shippingInfo = data?.data?.shippingInfo || {};
  const address = shippingInfo.address || {};
  const orderItems = data?.data?.orderItems || [];

  useEffect(() => {
    if (updateOrderRes && updateOrderRes.success) {
      toast.success(updateOrderRes.message);
    }
    if (isError) {
      toast.error(error.data.message);
    }
  }, [error, updateOrderRes, isError]);
  const handleOrderStatus = async (status) => {
    await updateOrderStatus({
      orderId: location.pathname.split("/")[3],
      status,
    });
  };
  return isLoading || isLoadingUpdateOrder ? (
    <Loader />
  ) : (
    <div className="container-31">
      <div className="container-31-1">
        <h2>ORDER ITEMS</h2>
        <div className="container-31-1-order">
          {orderItems.map((val) => (
            <div key={val._id}>
              <img src={val.image} alt={val.name} />
              <span>{val.name}</span>
              <span>
                ₹{val.price} * {val.quantity} = ₹{val.price * val.quantity}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="container-31-2">
        <h2>ORDER INFO</h2>
        <div className="container-31-2-order">
          <div>
            <h4>User Info</h4>
            <span>Name: {user.name || "N/A"}</span>
            <span>Email: {user.email || "N/A"}</span>
            <span>
              Address:{" "}
              {`${address.streetAddress || "N/A"}, ${address.city || "N/A"}, ${
                address.state || "N/A"
              }, ${address.pinCode || "N/A"}, ${address.country || "N/A"}`}
            </span>
          </div>
          <div>
            <h4>Amount Info</h4>
            <span>SubTotal: ₹{paymentInfo?.subTotal || 0}</span>
            <span>Shipping Charges: ₹{paymentInfo?.shippingPrice || 0}</span>
            <span>Tax: ₹{paymentInfo?.taxPrice || 0}</span>
            <span>Discount: ₹{paymentInfo?.discount || 0}</span>
            <span>Total: ₹{paymentInfo?.totalPrice || 0}</span>
            <span>
              Payment Status: {paymentInfo?.status ? "paid" : "error"}
            </span>
          </div>
          <div>
            <h4>Status Info</h4>
            <span>Status: {data?.data?.orderStatus || "N/A"}</span>
            <button
              className="process-status bg-blue"
              onClick={() => handleOrderStatus("Shipped")}
            >
              SHIPPED
            </button>
            <button
              className="process-status bg-green"
              onClick={() => handleOrderStatus("Accept")}
            >
              ACCEPT
            </button>
            <button
              className="process-status bg-red"
              onClick={() => handleOrderStatus("Cancel")}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageOrder;
