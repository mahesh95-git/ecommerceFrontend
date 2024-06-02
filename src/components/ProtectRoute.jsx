import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "./Loader";

function ProtectRoute({ children, isAuthenticated, redirect, requiredRole=[] }) {
  const { isLogin, isLoading, user } = useSelector((state) => state.user);
console.log(requiredRole.includes(user?.role))
  if (isLoading) {
    return <Loader />;
  }
  if (isLogin !== isAuthenticated) {
    return <Navigate to={redirect} />;
  }
  if (requiredRole && !requiredRole.includes(user.role)) {
    return <Navigate to={redirect} />;
  }

  return children ? children : <Outlet />;
}

export default ProtectRoute;
