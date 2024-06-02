import { FaUserAlt } from "react-icons/fa";
import { MdDashboard, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";

import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../redux/api/auth";
import { setLogin, setUser } from "../redux/controller/user";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";

function AdminHeader() {
const {user}=useSelector((state)=>state.user)

  return (
    <>
      <div className="container-25">
        <div className="container-25-1">
          <h2>
            <Link to={"/"}>MyStore</Link>
            <span className="admin">Admin Panel</span>
          </h2>
        </div>
        <div className="container-25-2">
          <div className="name">
            <h4>{user&&user.name}</h4>
          </div>
          <div className="profile-pick">
            <img src={user&&user?.avatar?.url} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

function AdminOption() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logout, { isLoading, isSuccess, isError, data, error }] =
    useLogoutMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
      dispatch(setUser(null));
      dispatch(setLogin(false));
      navigate("/");
    }

    if (isError) {
      toast.error(error.data.message);
    }
  }, [isSuccess, isError, dispatch, navigate, data, error]);

  const handleLogout = async () => {
    await logout();
  };

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
        <Link to="/admin/newProduct">
          <li>
            <span>
              <IoIosAdd />
            </span>
            <span>New product</span>
          </li>
        </Link>

        <button
          className="logout"
          disabled={isLoading ? true : false}
          onClick={handleLogout}
        >
          {isLoading ? "processing.." : "Logout"}
        </button>
      </ul>
    </div>
  );
}
export { AdminHeader, AdminOption };
