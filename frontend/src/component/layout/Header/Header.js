import { React, useState, useEffect } from "react";
import livolt_logo from "../../../images/livolt-logo.webp";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../actions/userAction";
import { useAlert } from "react-alert";
import Hamburger from "./Hamburger";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [keyword, setKeyword] = useState("");
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { user } = useSelector((state) => state.user);

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  function home() {
    navigate("/");
  }
  function products() {
    navigate("/products");
  }
  function about() {
    navigate("/about");
  }
  function contact() {
    navigate("/contact");
  }
  function cart() {
    navigate("/cart");
  }
  function login() {
    navigate("/login");
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <>
      {screenSize.width > 600 ? (
        <div id="header">
          <img
            className="livolt-logo-main"
            src={livolt_logo}
            alt="livolt Energy logo"
          />
          <div className="navigation-button">
            <div onClick={home}>Home</div>
            <div onClick={products}>Products</div>
            <div onClick={contact}>Contact</div>
            <div onClick={about}>About</div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search a Product ..."
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit" onClick={searchSubmitHandler}>
              <SearchIcon />
            </button>
          </div>
          <div className="cart-login">
            <ShoppingCartIcon
              className="cart-icon"
              onClick={cart}
              style={{
                color: cartItems.length > 0 ? "rgb(8,184,90)" : "rgb(8,184,90)",
              }}
            />
            {!user ? (
              <button onClick={login}>Login</button>
            ) : (
              <button onClick={logoutUser}>logout</button>
            )}
          </div>
        </div>
      ) : (
        <div className="hamburger">
          <Hamburger />
        </div>
      )}
    </>
  );
};

export default Header;
