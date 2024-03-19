import { useState } from "react";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import {Footer,} from "./index"
function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
   
        <div className="container-14">
      <form>
        <Link to="/">
        <h1>MyStore</h1>
        </Link>
        <h2>Sign In</h2>
        <InputField
          label={"Email"}
          Value={email}
          setValue={setEmail}
          type={"text"}
          placeholder={"Enter Email"}
        />
         <InputField
          label={"Password"}
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
    <Footer/>
    </>

  );
}

export default SingIn;
