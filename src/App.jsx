// external import
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useGetUserDetailQuery } from "./redux/api/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading, setLogin, setUser } from "./redux/controller/user";

//jsx file import
import {
  ProductDetailsPage,
  ProductsListBaseOnQueryPage,
  HomePage,
  UserProfilePage,
  Admin_allProductPage,
  Admin_allTransactionPage,
  Admin_allUserPage,
  UserCartItemsPage,
  AdminPage,
  UserOrderItemsPage,
  ProductReviewPage,
  SearchResultPage,
} from "./pages";
import {
  ChangePassword,
  ShippingInfo,
  Loader,
  ForgotPassword,
  ManageProduct,
  ManageUser,
  Unauthorized,
  PageNotFound,
  ResetPassword,
  Payment,
  ProtectRoute,
  Dashboard,
  AddNew,
  ManageOrder,
  SignUp,
  SingIn,
} from "./components";
// css file import
import "./App.css";
import "./styles/Header.css";
import "./styles/ProductAdd.css";
import "./styles/CategoryName.css";
import "./styles/product.css";
import "./styles/ProductListing.css";
import "./styles/ProductDetail.css";
import "./styles/ProductReview.css";
import "./styles/Footer.css";
import "./styles/cart.css";
import "./styles/ProductsListBaseOnQuery.css";
import "./styles/signIn.css";
import "./styles/Me.css";
import "./styles/Loader.css";
import "./styles/navigation.css";
import "./styles/Orders.css";
import "./styles/admin.css";
import "./styles/listTable.css";
import "./styles/productAddListing.css";
import "./styles/newProduct.css";
import "./styles/manageOrder.css";
import "./styles/Dashboard.css";
import "./styles/pagination.css";
import "./styles/manageProduct.css";
import "./styles/manageUser.css";
import "./styles/unauthorized.css";
import "./styles/pagNotFound.css";

function App() {
  const { data, isLoading } = useGetUserDetailQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.success) {
      dispatch(setLoading(false));
      dispatch(setUser(data && data.data));
      dispatch(setLogin(true));
    }
  }, [data, dispatch]);
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <BrowserRouter>
        <Routes>
          {/*users routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/productReview/:id" element={<ProductReviewPage />} />
          <Route path="/cart" element={<UserCartItemsPage />} />
          <Route
            path="/products/:category"
            element={<ProductsListBaseOnQueryPage />}
          />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />

          <Route
            path="/"
            element={
              <ProtectRoute
                isAuthenticated={true}
                redirect={"/"}
                requiredRole={["user", "admin"]}
              />
            }
          >
            <Route path="/orders" element={<UserOrderItemsPage />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="/shippinginfo" element={<ShippingInfo />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="changepassword" element={<ChangePassword />} />
          </Route>

          <Route
            path="/"
            element={<ProtectRoute isAuthenticated={false} redirect={"/"} />}
          >
            <Route path="/signin" element={<SingIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          {/*admins routes */}
          <Route
            path="/"
            element={
              <ProtectRoute
                isAuthenticated={true}
                redirect={"/"}
                requiredRole={["admin"]}
              />
            }
          >
            <Route path="/admin" element={<AdminPage />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<Admin_allProductPage />} />
              <Route path="customers" element={<Admin_allUserPage />} />
              <Route
                path="transactions"
                element={<Admin_allTransactionPage />}
              />
            </Route>
            <Route path="admin/newProduct" element={<AddNew />} />
            <Route path="admin/manageorder/:id" element={<ManageOrder />} />
            <Route path="admin/manageproduct/:id" element={<ManageProduct />} />
            <Route path="admin/manageuser/:id" element={<ManageUser />} />
          </Route>

          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
            style: {
              background: "#16161c",
              color: "green",

              fontFamily: "mahesh",
            },
          },
          error: {
            duration: 3000,
            theme: {
              primary: "red",
              secondary: "black",
            },
            style: {
              background: "#16161c",
              color: "green",

              fontFamily: "mahesh",
            },
          },
        }}
      />
    </>
  );
}

export default App;
