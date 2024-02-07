import React, { Fragment, useEffect, useState } from "react";
import "./Contact.css";
import { useAlert } from "react-alert";
import axios from "axios";
import profile from "../../../images/Profile.webp";
import MetaData from "../MetaData";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const { pathname } = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const alert = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/contact/form`, {
        name,
        email,
        subject,
        message,
      });
      if (res) {
        alert.success("Form submitted successfully.");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert.error("Something went wrong.");
      }
    } catch (error) {
      alert.error("Something went wrong");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fragment>
      <MetaData title={`Contact Us | LiVolt`} />
      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE,We love to hear from you!</p>
      </section>
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span className="contact-header-1">GET IN TOUCH</span>
          <h2 className="contact-header-2">
            Visit one of our agency locations or contact us today
          </h2>
          <h3 className="contact-header-3">Head office</h3>
          <div className="contact-header-4">
            <li>
              <i className="fa fa-map" />
              <p>
                Address: A wing Room no. 104,105 Riddhi Building,college road
                tembhode,palghar(w)-401404
              </p>
            </li>
            <li>
              <i className="fa fa-envelope" />
              <p>Email: livoltenergy18@gmail.com</p>
            </li>
            <li>
              <i className="fa-solid fa-address-card" />
              <p>Phone No: (+91)9370420908/(+91)9156590531</p>
            </li>
            <li>
              <i className="fa fa-clock" />
              <p className="contact-header-4">Mon-Sat,9.00am-7.00pm</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30050.63824400988!2d72.76282250000001!3d19.6985791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71d7799d80da5%3A0x316eaba0006c3c96!2sLivolt%20Energy!5e0!3m2!1sen!2sin!4v1706864624057!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Livolt Energy Head Office"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <section id="form-details">
        <form onSubmit={handleSubmit}>
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="E-mail"
            name={email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            name="message"
            id=""
            cols={30}
            rows={10}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="normal" type="submit">
            Submit
          </button>
        </form>
        <div className="people">
          <div>
            <img src={profile} alt="sumit mourya profile" />
            <p>
              <span>Sumit Mourya</span>Founding member
              <br />
              Phone: +919370420908 <br />
              Email: sumitmourya963@gmail.com
            </p>
          </div>
          <div>
            <img src={profile} alt="saurabh mourya profile" />
            <p>
              <span>Saurabh Mourya</span>Founding member
              <br />
              Phone: +919156590531
              <br />
              Email: sourabhmourya1199@gmail.com
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
