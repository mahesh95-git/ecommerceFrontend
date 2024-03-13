import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/Header.css";
import "./styles/ProductAdd.css";
import "./styles/CategoryName.css";
import "./styles/product.css";
import "./styles/ProductListing.css";
import "./styles/ProductDetail.css";
import "./styles/ProductReview.css";
import "./styles/Footer.css";
import "./styles/cart.css";
import "./styles/categoryProducts.css";
import "./styles/signIn.css";
import "./styles/Me.css";
import "./styles/Loader.css";
import "./styles/navigation.css";
import "./styles/Orders.css";
import "./styles/admin.css";
import "./styles/listTable.css"
import "./styles/newProduct.css"
import ProductReviews from "./pages/ProductReviews";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import Carts from "./pages/carts";
import CategoryPage from "./pages/Cetegory.page";
import { Dashboard, SignUp, SingIn,AdminProducts,AdminCustomers,AdminTransaction, AddNew } from "./commponets";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productReview/:id" element={<ProductReviews />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/products/:category" element={<CategoryPage />}></Route>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="signin" element={<SingIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<Admin />} >
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="products" element={<AdminProducts/>}/>
          <Route path="customers" element={<AdminCustomers/>}/>
          <Route path="transactions" element={<AdminTransaction/>}/>
          </Route>
          <Route path="newProduct" element={<AddNew/>}/>
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
