function ManageOrder() {
  return (
    <div className="container-31">
      <div className="container-31-1">
        <h2>ORDER ITEMS</h2>
        <div className="container-31-1-order">
       
          <div>
            <img src="/womem.png" alt="" />
            <span>
              Bsubseach Women Long Swimsuit Cover Up Button Down Shirt Dress
              Beach Cover Up with Drawstring
            </span>
            <span>$40 * 4 = $160</span>
          </div>
         
        </div>
      </div>
      <div className="container-31-2">
        <h2>ORDER INFO</h2>
        <div className="container-31-2-order">
          <div>
            <h4>User Info</h4>
            <span>Name:Mahesh Rathod</span>
            <span>Address:kolhapur maharashtra ,India,28899</span>
          </div>
          <div>
            <h4>Amount Info</h4>
            <span>SubTotal: $160</span>
            <span>Shipping Charges: $0</span>
            <span>Tax: $1</span>
            <span>Discount: %0</span>
            <span>Total: $161</span>
          </div>
          <div>
            <h4>Status Info</h4>

            <span>Status: Processing</span>
            <button className="process-status bg-blue">Shipped</button>
            <button className="process-status bg-green">Accept</button>
            <button className="process-status bg-red">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageOrder;
