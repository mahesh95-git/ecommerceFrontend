import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RiAdminLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { data } from "../assets/products";

function Header() {
  const { cart } = useSelector((state) => state.cart);
  const [hamburger, setHamburger] = useState(false);
  const [searchActive, setSearchActive] = useState("active");
  const [query, setQuery] = useState("");
  const [qureyResult, setQueryResult] = useState([]);
  const handleHamburger = () => {
    setHamburger(!hamburger);
  };
  const handleSearch = () => {
    setSearchActive("");
  };
  const handleSearchSpace = () => {
    setSearchActive("active");
  };
  const handleSearchQuery = (value) => {
    setQuery(value);
    const results =
      value &&
      data
        .filter((item) => {
          const title = item.product_title
            ? item.product_title.toLowerCase().trim()
            : "";
          const description = item.product_description
            ? item.product_description.toLowerCase().trim()
            : "";
          const category = item.product_category
            ? item.product_category.toLowerCase()
            : "";

          return (
            title.includes(query.toLowerCase()) ||
            description.includes(query.toLowerCase()) ||
            category.includes(query.toLowerCase())
          );
        })
        .slice(0, 10);
    setQueryResult(() => results);
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
          onFocus={handleSearch}
          onBlur={handleSearchSpace}
          autoComplete="off"
          value={query}
          onChange={(e) => handleSearchQuery(e.target.value)}
        />
        {query ? (
          <div className={`${searchActive} container-1-4`}>
            {qureyResult ? (
              qureyResult.map((itme, index) => (
                <p key={index}>
                  <span>
                    <CiSearch />
                  </span>
                  <span>{itme.product_title.split(" ", 6).join(" ")}</span>
                </p>
              ))
            ) : 
              console.log("hello wrld")
            }
          </div>
        ) : null}
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
          <Link to="/admin/dashboard">
            <RiAdminLine />
          </Link>
        </div>
        <div className="navigate-container">
          <span>{cart.length && cart.length}</span>
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
                      <Link to="/admin/dashboard">
                      <RiAdminLine />
                        <span>Admin</span>
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
                    <li>
                   
                    </li>
                  </ul>
                  <hr />
                  <ul>
                    <li>
                      <a onClick={handleHamburger} href="#footer">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a onClick={handleHamburger} href="#footer">
                        About
                      </a>
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
