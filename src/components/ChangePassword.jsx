import { useEffect, useState } from "react";
import InputField from "./InputField";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { useChangePasswordMutation } from "../redux/api/auth";
import Loader from "./Loader";
function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate=useNavigate()
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePassword, { isLoading, isError, error, data }] =
    useChangePasswordMutation();
  useEffect(() => {
    if (data && data.success) {
      toast.success(data.message);
      navigate("/profile")
    }
    if (isError) {
      toast.success(error.data.message);
    }
  }, [data, isError, error,navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault()
    await changePassword({
      oldPassword,
      newPassword,
      confirmPassword,
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
        <h4>Change Password</h4>
        <InputField
          label={"Old Password"}
          Value={oldPassword}
          setValue={setOldPassword}
          type={"text"}
          placeholder={"Enter old password"}
          required={true}
        />
        <InputField
          label={"New Password"}
          Value={newPassword}
          setValue={setNewPassword}
          type={"password"}
          placeholder={"Enter new password"}
          required={true}
        />
        <InputField
          label={"Confirm Password"}
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

export default ChangePassword;
