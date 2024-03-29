import "./App.css";
import { useState, useEffect } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import { loadStripe } from "@stripe/stripe-js";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ResetPassword from "./component/User/ResetPassword";
import ForgotPassword from "./component/User/ForgotPassword";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser from "./component/Admin/UpdateUser.js";
import ProductReviews from "./component/Admin/ProductReviews.js";
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound.js";
import WriteBlogPost from "./component/Admin/WriteBlogPost.js";
import Blogs from "./component/Blogs/Blogs.js";
import BlogDetails from "./component/Blogs/BlogDetails";
import AdminBlogs from "./component/Admin/AdminBlogs";
import UpdateBlog from "./component/Admin/UpdateBlog.js";
import SolarCalculator from "./component/layout/Calculator/SolarCalculator";
import FAQ from "./component/layout/FAQ/FAQ";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  const isLoginPage = window.location.pathname === "/login";

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      {!isLoginPage && <Header />}
      {isAuthenticated && <UserOptions user={user} />}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Routes>
            <Route exact path="/process/payment" element={<Payment />} />
          </Routes>
        </Elements>
      )}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/products/:HomeCategory" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blogs/:id" element={<BlogDetails />} />
        <Route exact path="/solar-calculator" element={<SolarCalculator />} />
        <Route exact path="/frequently-asked-question" element={<FAQ />} />

        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route
          element={
            window.location.pathname === "/process/payment" ? null : (
              <NotFound />
            )
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route exact path="/account" element={<Profile />} />
          <Route exact path="/me/update" element={<UpdateProfile />} />
          <Route exact path="/password/update" element={<UpdatePassword />} />
          <Route exact path="/login/shipping" element={<Shipping />} />
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
          <Route exact path="/success" element={<OrderSuccess />} />
          <Route exact path="/orders" element={<MyOrders />} />
          <Route exact path="/order/:id" element={<OrderDetails />} />
        </Route>
        <Route element={<ProtectedRoute isAdmin="true" />}>
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/products" element={<ProductList />} />
          <Route exact path="/admin/product" element={<NewProduct />} />
          <Route exact path="/admin/orders" element={<OrderList />} />
          <Route exact path="/admin/users" element={<UsersList />} />
          <Route exact path="/admin/reviews" element={<ProductReviews />} />
          <Route exact path="/admin/user/:id" element={<UpdateUser />} />
          <Route exact path="/admin/order/:id" element={<ProcessOrder />} />
          <Route exact path="/admin/product/:id" element={<UpdateProduct />} />
          <Route exact path="/admin/blog" element={<WriteBlogPost />} />
          <Route exact path="/admin/blogs" element={<AdminBlogs />} />
          <Route exact path="/admin/update-blog/:id" element={<UpdateBlog />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
