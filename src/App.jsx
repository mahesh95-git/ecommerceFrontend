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
import "./styles/listTable.css";
import "./styles/newProduct.css";
import "./styles/manageOrder.css";
import ProductReviews from "./pages/ProductReviews";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import Cart from "./pages/Carts";
import CategoryPage from "./pages/Cetegory.page";
import {
  Dashboard,
  AdminProducts,
  AdminCustomers,
  AdminTransaction,
  AddNew,
  ManageOrder,
} from "./componets/index";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";
import { Toaster } from "react-hot-toast";
import SignUp from "./componets/SignUp"
import SingIn from "./componets/SignUp"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productReview/:id" element={<ProductReviews />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/products/:category" element={<CategoryPage />}></Route>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="signin" element={<SingIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="customers" element={<AdminCustomers />} />
            <Route path="transactions" element={<AdminTransaction />} />
          </Route>
          <Route path="newProduct" element={<AddNew />} />
          <Route path="manageorder" element={<ManageOrder />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={true}
        // Default options for specific types
        toastOptions={{
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
              
            },
            style:{
              background:"#16161c",
              color:"green",
              width:"20vw",
              fontFamily:"mahesh"
            }
          },
        }}
      />
    </>
  );
}

export default App;
