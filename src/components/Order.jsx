
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { useGetAllOrdersQuery } from "../redux/api/order";
import { useSelector } from "react-redux";
function Order() {
  const { data, isLoading } = useGetAllOrdersQuery();
  const { user } = useSelector((state) => state.user);

  return (
    <div className="container-21">
      <div className="container-21-1">
        <h2>MY ORDERS</h2>
      </div>
      <div className="container-21-2">
        {isLoading ? (
          <Loader />
        ) : data.data.length? (
          data.data.map((value) =>
            value.orderItems.map((item) => (
              <div className="orderDetail" key={value.name}>
                <div className="productInfo" key={item.name}>
                  <Link to={`/productDetial/`} className="product-order">
                    {" "}
                    <img src={item.image} alt="" />
                    <div className="name">{item.name}</div>
                  </Link>

                

                  <div className="price">
                    <div>
                    Price: {item.price}
                      </div>
                      <div>
                      Quantity: {item.quantity}
                        </div>
                  </div>
                  <div className="shipping-address">
                    <span>Delivery Address:</span>
                    <div>
                      <div>{user && user.name}</div>
                      {value.shippingInfo.address.streetAddress}{" "}
                      {value.shippingInfo.address.city} Subdistrict,{" "}
                      {value.shippingInfo.address.city} District -{" "}
                      {value.shippingInfo.address.pinCode}, state{" "}
                      {value.shippingInfo.address.state},country{" "}
                      {value.shippingInfo.address.country}
                      <div>Phone number:9370079379</div>
                    </div>
                  </div>

                  <div className="order-status">{value.orderStatus}</div>
                  <div className="order-cancle">Cancel</div>
                </div>
              </div>
            ))
          )
        ) : (
          <div className="container-12">
            <p>No Orders</p>
            <Link to={"/"}>
              <h3>Shopping Now</h3>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;

