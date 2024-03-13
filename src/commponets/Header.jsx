import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaHome } from "react-icons/fa";

function Header() {
  const [hamburger, setHamburger] = useState(false);
  const handleHamburger = () => {
    setHamburger(!hamburger);
  };
  
  return (
    <div className="container-1">
      <div className="container-1-1">
        <Link to="/">
        <h1>MyStore</h1>
        </Link>
      </div>
      <div className="container-1-2">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for Products, Brands and More"
        />
      </div>
     
      <div className="container-1-3">
        <div className="navigate-container">
          <Link to="/">
            <FaHome />
          </Link>
        </div>
        <div className="navigate-container">
          <Link to="/profile">
            <IoPersonSharp />
          </Link>
        </div>
        <div className="navigate-container">
          <span>2</span>
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
        </div>
        <div className="navigate-container">
          <Link to="/orders">
            <IoBag />
          </Link>
        </div>
        <div className="navigate-container">
          <Link to="/signin">
            <div className="signIn">SignIn</div>
          </Link>
        </div>
        <div className="hamburger-container">
          <div className="hamburger">
            {!hamburger ? (
              <GiHamburgerMenu onClick={handleHamburger} />
            ) : (
              <GrClose onClick={handleHamburger} />
            )}
            {hamburger ? (
              <div className="ham-container">
                <GrClose onClick={handleHamburger} className="close" />
                <div className="ham-container-1">
                  <ul>
                    <li onClick={handleHamburger}>
                      <Link to="/">
                        <FaHome /> <span>Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile">
                        <IoPersonSharp /> <span>Profile</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" id="cart">
                        <FaShoppingCart />
                        <span>Cart</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/orders">
                        <IoBag />
                        <span>Orders</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/signin">
                        <div className="signIn">SignIn</div>
                      </Link>
                    </li>
                  </ul>
                  <hr />
                  <ul>
                    <li>
                      <a  onClick={handleHamburger}href="#footer">Contact</a>
                    </li>
                    <li>
                      <a  onClick={handleHamburger} href="#footer">About</a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
