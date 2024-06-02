import { useEffect, useState } from "react";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useRegisterMutation } from "../redux/api/auth";
import { setLogin, setUser } from "../redux/controller/user";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [register, { data, error }] = useRegisterMutation();

  const [avatar, setAvatar] = useState();
  const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => state.user);
  useEffect(() => {
  
    if (data && data.success) {
      dispatch(setLogin(true));
      dispatch(setUser({ ...data.newuser }));
      toast.success(data.message);
    } else if (error && error.data.message) {
      toast.error(error.data.message);
    }
  }, [data, error, dispatch, isLogin]);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNo", phoneNo);
    formData.append("password", password);
    formData.append("avatar", avatar);
    await register(formData);
  }
  return (
    <>
      <div className="container-14">
        <form onSubmit={handleSubmit}>
          <Link to="/">
            <h2>MyStore</h2>
          </Link>
          <h4>Sign Up</h4>
          <InputField
            label={"Name"}
            type={"text"}
            value={name}
            placeholder={"Enter Name"}
            setValue={setName}
            required={false}
          />
          <InputField
            label={"Email"}
            type={"email"}
            value={email}
            placeholder={"Enter Email"}
            setValue={setEmail}
            required={false}
          />
          <InputField
            label={"Phone No."}
            type={"number"}
            value={phoneNo}
            placeholder={"Enter Phone"}
            setValue={setPhoneNo}
            required={false}
          />
          <InputField
            label={"Password"}
            type={"password"}
            value={password}
            placeholder={"Enter password"}
            setValue={setPassword}
            required={false}
          />
          {/* 
          <input type="file"  onChange={handlefile}/> */}

          <InputField label={"Avatar"} type={"file"} setValue={setAvatar} />
          <button className="submit-button">Submit</button>
          <p className="forgot">
            Already have Account? <Link to={"/signin"}>SignIn</Link>
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

export default SignUp;
