import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import { useForgotPasswordMutation } from "../redux/api/auth";
import toast from "react-hot-toast";
import Loader from "./Loader";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [forgotPassword, { data, isLoading, isError, error }] =
    useForgotPasswordMutation();

  useEffect(() => {
    if (data && data.success) {
      toast.success(data.message);
    }
    if (isError) {
      toast.error(error.data.message);
    }
  }, [data, isError, error]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <div className="container-14">
      <form onSubmit={handleSubmit}>
        <Link to="/">
          <h2>MyStore</h2>
        </Link>
        <h4>Forgot Password</h4>
        <InputField
          label={"Enter email"}
          Value={email}
          setValue={setEmail}
          type={"email"}
          placeholder={"Enter registered email"}
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

export default ForgotPassword;
