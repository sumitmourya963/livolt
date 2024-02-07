import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carosel.css";
import { Carousel } from "react-responsive-carousel";
import Lithium_battery_carousel from "../../../src/images/car.webp";
import solar_energy_carousel from "../../../src/images/solar_panel_carousel.webp";
import { Link } from "react-router-dom";

const Carosel1 = () => {
  return (
    <Carousel className="carosel">
      <div>
        <div className="call-to-action-container">
          <h1 className="call-to-action-carosel">Brighten</h1>
          <h1 className="call-to-action-carosel"> Your Home,</h1>
          <h1 className="call-to-action-carosel">Lighten</h1>
          <h1 className="call-to-action-carosel"> Your Bills!</h1>
        </div>

        <img
          className="carosel-img"
          src={solar_energy_carousel}
          alt="solar energy"
        />
      </div>
      <div>
        <Link to="solar-calculator">
          <div>
            <img
              className="carosel-img"
              src={Lithium_battery_carousel}
              alt="lithium battery"
            />
          </div>
        </Link>
      </div>
    </Carousel>
  );
};

export default Carosel1;
