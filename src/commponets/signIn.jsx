import { useState } from "react";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import {Header} from "./index"
function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
    <Header/>
        <div className="container-14">
      <form>
        <h1>MyStore</h1>
        <h2>Sign In</h2>
        <InputField
          lable={"email"}
          Value={email}
          setValue={setEmail}
          type={"text"}
          placeholder={"Enter Email"}
        />
         <InputField
          lable={"password"}
          Value={password}
          setValue={setPassword}
          type={"password"}
          placeholder={"Enter password"}
        />
        <button className="submit-button">Submit</button>
        <p className="forgot">
     <Link to={'forgotpassword'}>
     Forgot Password</Link>
        </p>
        <p className="forgot">
     <Link to={'/signup'}>
    SignUp</Link>
        </p>
        <div className="footer-bottom">
        <p>&copy; 2024 Your E-commerce Store. All rights reserved.</p>
      </div>
      </form>
    </div>
    </>

  );
}

export default SingIn;
