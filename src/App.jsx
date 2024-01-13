import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/Header.css";
import "./styles/ProductAdd.css";
import "./styles/Category.css"
import "./styles/product.css"
import "./styles/ProductListing.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
