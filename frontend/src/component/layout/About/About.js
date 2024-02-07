import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./aboutSection.css";
import Livolt_battery from "../../../images/Livolt_battery.webp";
import light_bulb from "../../../images/light_bulb.webp";
import MetaData from "../MetaData";

const About = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Fragment>
      <MetaData title={`About Us | LiVolt`} />
      <div className="aboutSection">
        <div className="about-banner"></div>
        <h1 className="about">About us</h1>
        <div className="header-container">
          <p className="about-para">
            Livolt is a leading provider of solar energy and lithium-ion battery
            solutions. We are committed to providing our customers with the best
            possible products and services, and we are passionate about helping
            them reduce their environmental impact. We offer a wide range of
            solar energy products, including solar panels, solar inverters, and
            solar batteries. We also offer a variety of lithium-ion battery
            products, including batteries for electric vehicles, solar storage
            systems, and backup power. Our products are designed to be
            high-quality, reliable, and affordable. We also offer a variety of
            installation and maintenance services to ensure that our customers
            get the most out of their solar energy and lithium-ion battery
            systems.
          </p>
          <img src={Livolt_battery} alt="lithium battery" />
        </div>
        <div className="header-container1">
          <h1 className="header-vision">Our Vision</h1>
          <img src={light_bulb} alt="renewable energy" />
          <div>
            <p className="about-para">
              Our vision is to be the leading provider of solar energy and
              lithium-ion battery solutions. We want to help our customers
              reduce their environmental impact and save money on their energy
              bills. We also want to help create a more sustainable future for
              our planet.
            </p>
          </div>
        </div>
        <div className="header-container1 reverse">
          <h1 className="our-mission-header">Our Mission</h1>
          <img src={Livolt_battery} alt="lithium battery" />
          <div className="our-mission-container">
            <p>
              Our mission is to provide our customers with the best possible
              solar energy and lithium-ion battery products and services. We
              want to help them reduce their environmental impact, save money on
              their energy bills, and create a more sustainable future for our
              planet.
            </p>
          </div>
        </div>

        <h1 className="our-mission-header">Our Values</h1>
        <p className="our-values">
          <span className="our-mission-header">
            We believe in the following values:
          </span>{" "}
          <span className="value-para-header">Sustainability:</span>{" "}
          <p className="our-commitment-para">
            We are committed to providing our customers with clean, renewable
            energy solutions.
          </p>
          <span className="value-para-header">Innovation:</span>
          <p className="our-commitment-para">
            We are constantly innovating to develop new and better solar energy
            and lithium-ion battery products and services.
          </p>
          <span className="value-para-header">Customer service:</span>
          <p className="our-commitment-para">
            We are committed to providing our customers with excellent customer
            service.
          </p>
          <span className="value-para-header">Community:</span>
          <p className="our-commitment-para">
            We are committed to giving back to our community and supporting
            local organizations.
          </p>
        </p>
        <h1 className="our-mission-header">Our Commitment to Sustainability</h1>
        <p className="our-commitment-para">
          We are committed to providing our customers with clean, renewable
          energy solutions. We believe that solar energy and lithium-ion
          batteries are the future of energy, and we are passionate about
          helping our customers reduce their environmental impact. We are
          constantly innovating to develop new and better solar energy and
          lithium-ion battery products and services. We are also committed to
          using recycled materials and energy-efficient manufacturing processes.
          We believe that everyone has a role to play in creating a more
          sustainable future. We are committed to doing our part, and we
          encourage our customers to do the same.
        </p>
      </div>
    </Fragment>
  );
};

export default About;
