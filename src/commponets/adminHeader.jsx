import { FaUserAlt } from "react-icons/fa";
import { MdDashboard, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";

import { Link } from "react-router-dom";

function AdminHeader() {
  return (
    <>
      <div className="container-25">
        <div className="container-25-1">
          <h2><Link to={"/"}>MyStore</Link><span className="admin">Admin Panel</span></h2>
      
        </div>
        <div className="container-25-2">
          <div className="name">
            <h4>mahesh Rathod</h4>
          </div>
          <div className="profile-pick">
            <img src="/kid.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

 function AdminOption() {
  return (
    <div className="container-26">
      <ul>
        <Link to="/admin/dashboard">
          <li>
            <span>
              <MdDashboard />
            </span>
            <span>Dashboard</span>
          </li>
        </Link>
        <Link to="/admin/products">
          <li>
            <span>
              <MdOutlineProductionQuantityLimits />
            </span>
            <span>Products</span>
          </li>
        </Link>
        <Link to="/admin/customers">
          <li>
            <span>
              <FaUserAlt />
            </span>
            <span>Customers</span>
          </li>
        </Link>
        <Link to="/admin/transactions">
          <li>
            <span>
              <GrTransaction />
            </span>
            <span>Transaction</span>
          </li>
        </Link>

        <li>logout</li>
      </ul>
    </div>
  );
}
export {AdminHeader,AdminOption};
