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
import ProductReviews from "./pages/ProductReviews";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="productDetial/:id" element={<ProductDetails />} />

          <Route path="productReview/:id" element={<ProductReviews />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
