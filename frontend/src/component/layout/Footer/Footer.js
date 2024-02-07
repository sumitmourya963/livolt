import React, { useEffect, useState } from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import axios from "axios";
import { useAlert } from "react-alert";

const Footer = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const [email, setEmail] = useState("");

  const newsupdate = async () => {
    try {
      const data = await axios.post("/api/v1/newsLetter", { email });
      if (data) alert.success("newsletter subscribed successfully.");
      else alert.error("something went wrong.");
      setEmail("");
    } catch (error) {
      alert.error("something went wrong in the newsletter.");
    }
  };

  //Main Menu -  Footer
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
  function solarCalculator() {
    navigate("/solar-calculator");
  }

  //Footer Menu - Footer
  function learn() {
    navigate("/blogs");
  }
  function certificates() {
    navigate("/certificates");
  }
  function download() {
    navigate("/download");
  }
  function franchise() {
    navigate("/franchise");
  }
  function career() {
    navigate("/career");
  }

  return (
    <footer id="footer">
      <div>
        <div className="main-menu">
          <span>Main Menu</span>
          <a onClick={home}>
            <span>Home</span>
          </a>
          <a onClick={products}>
            <span>Products</span>
          </a>
          <a onClick={about}>
            <span>About us</span>
          </a>
          <a onClick={contact}>
            <span>Contact</span>
          </a>
          <a onClick={solarCalculator}>
            <span>Calculator</span>
          </a>
        </div>
        <div className="footer-menu">
          <span>Footer Menu</span>
          <a onClick={learn}>
            <span>Blogs</span>
          </a>
          <a onClick={certificates}>
            <span>Certificates</span>
          </a>
          <a onClick={franchise}>
            <span>Franchise</span>
          </a>
          <a onClick={download}>
            <span>Download</span>
          </a>
          <a onClick={career}>
            <span>Careers</span>
          </a>
        </div>
        <div className="subscribe-bar">
          <div className="subs-header">SUBSCRIBE</div>
          <div className="message">
            Leave your email address for news updates
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Enter Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={newsupdate}>Subscribe</button>
          </div>
        </div>
        <div className="follow-us">
          <span>Follow us</span>
          <a href="https://www.facebook.com/livoltenergy/">
            <BsFacebook />
            <span>Facebook</span>
          </a>
          <a href="https://www.instagram.com/livoltenergy/">
            <BsInstagram />
            <span> Instagram</span>
          </a>
          <a href="https://www.twitter.com/livoltenergy/">
            <BsTwitter />
            <span>Twitter</span>
          </a>
          <a href="https://www.linkedin.com/livoltenergy/">
            <BsLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href="https://www.youtube.com/livoltenergy/">
            <BsYoutube />
            <span>Youtube</span>
          </a>
        </div>
      </div>

      <hr className="horizontal-row" />
      <div className="copyright-container">
        <span className="copyright">
          ©2024 Livolt Energy.All Right Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
