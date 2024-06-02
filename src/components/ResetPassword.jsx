import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import { useResetPasswordMutation } from "../redux/api/auth";
import toast from "react-hot-toast";
import Loader from "./Loader";


function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location=useLocation();
  
const navigate=useNavigate()
  const [ResetPassword, { data, isLoading, isError, error }] =
    useResetPasswordMutation();

  useEffect(() => {
    if (data && data.success) {
    
      toast.success(data.message);
      navigate("/")
      
    }
    if (isError) {
      toast.error(error.data.message);
    }
  }, [data, isError, error,navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await ResetPassword({
        confirmPassword,
        password,
        token:location.pathname.split("/")[2]
    });
  };
  return isLoading ? (
    <Loader />
  ) : (
    <div className="container-14">
      <form onSubmit={handleSubmit}>
        <Link to="/">
          <h2>MyStore</h2>
        </Link>
        <h4>Reset Password</h4>
        <InputField
          label={"Enter new password"}
          Value={password}
          setValue={setPassword}
          type={"password"}
          placeholder={"Enter new password"}
          required={true}
        />
        <InputField
          label={"Enter confirm password"}
          Value={confirmPassword}
          setValue={setConfirmPassword}
          type={"password"}
          placeholder={"Enter confirm password"}
          required={true}
        />
        <button className="submit-button">Submit</button>

        <div className="footer-bottom">
          <p>&copy; 2024 Your E-commerce Store. All rights reserved.</p>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
