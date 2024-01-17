import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/Header.css";
import "./styles/ProductAdd.css";
import "./styles/Category.css";
import "./styles/product.css";
import "./styles/ProductListing.css";
import "./styles/ProductDetail.css";
import "./styles/ProductReview.css"
import "./styles/Footer.css"
import "./styles/cart.css"
import ProductReviews from "./pages/ProductReviews";
import ProductDetails from "./pages/ProductDetails";
import Carts from "./pages/carts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="productDetial/:id" element={<ProductDetails />} />

          <Route path="productReview/:id" element={<ProductReviews />} />
          <Route path="cart" element={<Carts/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
