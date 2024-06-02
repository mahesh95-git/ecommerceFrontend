import { useEffect, useState } from "react";
import InputField from "./InputField";
import { Link,useNavigate } from "react-router-dom";
import { Footer } from "./index";
import { useLoginMutation } from "../redux/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setUser } from "../redux/controller/user";
import toast from "react-hot-toast";
function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogin } = useSelector((state) => state.user);
  const [login, { data, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
   
    if (data && data.success) {
      dispatch(setUser({ ...data.newuser }));
      dispatch(setLogin(true));
     
      toast.success(data.message);
    }
    if (error && error.data.message) {
      toast.error(error.data.message);
    }
  
  }, [isLogin, navigate, data, dispatch, error]);

  const HandleLogin = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <>
      <div className="container-14">
        <form onSubmit={HandleLogin}>
          <Link to="/">
            <h2>MyStore</h2>
          </Link>
          <h4>Sign In</h4>
          <InputField
            label={"Email"}
            Value={email}
            setValue={setEmail}
            type={"text"}
            placeholder={"Enter Email"}
            required={true}
          />
          <InputField
            label={"Password"}
            Value={password}
            setValue={setPassword}
            type={"password"}
            placeholder={"Enter password"}
            required={true}
          />
          <button className="submit-button" >
            Submit
          </button>
          <p className="forgot">
            <Link to={"/forgotpassword"}>Forgot Password</Link>
          </p>
          <p className="forgot">
          New to MyStore? <Link to={"/signup"}>SignUp</Link>
          </p>
          <div className="footer-bottom">
            <p>&copy; 2024 Your E-commerce Store. All rights reserved.</p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SingIn;
