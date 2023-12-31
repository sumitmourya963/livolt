import * as React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import Livolt_logo from "../../../images/livolt-logo.webp";

export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  function home() {
    navigate("/");
  }
  function products() {
    navigate("/products");
  }
  function contact() {
    navigate("/contact");
  }
  function about() {
    navigate("/about");
  }
  function cart() {
    navigate("/cart");
  }
  function login() {
    navigate("/login");
  }

  const searchSubmitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <img
          className="Livolt_logo_sidebar"
          src={Livolt_logo}
          alt="livolt Energy logo"
        />
        {["Home"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={home}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        {["Products"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={products}>
              <ListItemIcon>
                <CategoryTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        {["About"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={about}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        {["Contact"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={contact}>
              <ListItemIcon>
                <ContactPhoneIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        {["Cart"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={cart}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const anchor = "left";
  return (
    <>
      <div className="ham-nav">
        <Button className="nav-button" onClick={toggleDrawer(anchor, true)}>
          <MenuIcon className="nav-menu-icon" />
        </Button>
        <img
          className="Livolt_logo"
          src={Livolt_logo}
          alt="livolt Energy logo"
        />
        <div>
          <SearchIcon className="nav-search-icon" />
          <ShoppingCartIcon onClick={cart} className="nav-cart-icon" />
          {!user ? (
            <LoginIcon onClick={login} className="nav-login-icon" />
          ) : (
            <LoginIcon
              onClick={login}
              style={{ visibility: "hidden" }}
              className="nav-login-icon"
            />
          )}
        </div>

        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
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
    </>
  );
}
