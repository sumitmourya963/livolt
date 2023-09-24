import React from "react";
import "./SolarCalculator.css";
import calculator from "../../../images/calculator_calpage.png";
import home from "../../../images/home_calpage.png";
import reapBenefits from "../../../images/reapgain_calpage.png";
import coin_mid from "../../../images/BILLWITH-SOLARc-mid.png";
import coin_top from "../../../images/BILLWITH-SOLARc-top.png";
import coin_stack from "../../../images/coinwith-rupee-blk.png";
import car_cancle from "../../../images/car_cancle.png";
import tree_wbg from "../../../images/tree_wbg.png";
import cost from "../../../images/cost.png";
import life_time_saving from "../../../images/saving.png";
import return_on_investment from "../../../images/ROI.png";

const SolarCalculator = () => {
  return (
    <div>
      <div className="main-container-solar-calculator">
        <div className="background-image-container">
          <h1>LIVOLT Solar Calculator</h1>
          <p>Instantly Calculate Your Saving</p>
        </div>
        <div className="calculator-container">
          <div className="main-calculator-cantainer">
            <div>
              <input
                className="input-location"
                type="number"
                placeholder="Enter Average Electricity Price Per Unit In Your Location"
              />
              <input
                className="input-monthly-bill"
                type="number"
                placeholder="Your Average Monthly Electricity Bill (Rs.)"
              />
            </div>
            <p className="select-para">
              Please Select the consumer category Below:
            </p>

            <div className="option-btns">
              <button className="option-btn">RESIDENTIAL</button>
              <button className="option-btn">COMMERCIAL</button>
              <button className="option-btn">INDUSTRIAL</button>
            </div>
            <button className="calculate-btn">CALCULATE</button>
          </div>
          <div className="main-div-calculator">
            {/* ------------------------------ This is the main div That shows the required solar system  ----------------------------*/}
            <div className="main-div-solar-system-size">
              <div className="solar-system-size">
                <p className="solar-system-size-para">
                  Recommended Solar System size
                </p>
                <div className="solar-system-size-circle">
                  <p className="size">261</p>
                  <p className="unit">KW</p>
                </div>
                <p className="area-required-para"> Area required in sqft</p>
                <p className="net-metering-para">with Net Metering</p>
              </div>
            </div>
            {/* --------------------------  This is the main div that has Your monthly saving on bills container ------------------ */}
            <div className="main-div-solar-system-size">
              <div className="solar-system-size">
                <p className="solar-system-size-para">
                  Your monthly saving on bills
                </p>
                <div className="coin-container">
                  <div className="coin-img-cont-1">
                    <img src={coin_stack} alt="coin-1" />
                    <p className="without-solar">Current Bill</p>
                  </div>
                  <div className="coin-img-cont-2">
                    <img src={coin_top} alt="coin-2" />
                    <img src={coin_mid} alt="coin-1" />
                    <img src={coin_mid} alt="coin-mid2" />
                    <img src={coin_mid} alt="coin-mid3" />
                    <p className="with-solar">Bill with solar</p>
                  </div>
                  <p className="coin-saving">
                    Start saving <span> 50% </span> from <span>day 1</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="main-div-calculator">
            {/* --------------------------  This is the main div that show Impact on environment ------------------ */}

            <div className="enviornment-effect-container">
              <p className="environment-effect-headline">
                Your contribution to the environment
              </p>
              <div>
                <img src={tree_wbg} alt="tree without background" />
                <p>143 trees added</p>
              </div>
              <div>
                <img src={car_cancle} alt="car off the road" />
                <p>3 cars off the road</p>
              </div>
            </div>

            {/* --------------------------Benefits calculation ----------------------------------------------------- */}
            <div className="enviornment-effect-container">
              <p className="environment-effect-headline">
                Benefits calculations
              </p>
              <div className="benefits-container">
                <div className="calculate-cont">
                  <p className="cal-heading">system cost</p>
                  <img src={cost} alt="cost" />
                  <p className="cost">Rs 2000</p>
                </div>

                <div className="calculate-cont">
                  <p className="cal-heading">Life Time Saving</p>
                  <img src={life_time_saving} alt="life time saving" />
                  <p className="cost">Rs 2000</p>
                </div>
                <div className="calculate-cont">
                  <p className="cal-heading">Return On Investment</p>
                  <img src={return_on_investment} alt="return on investment" />
                  <p className="cost">Rs 2000</p>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------- This is the div that contain the solar journey --------------------------- */}
          <div className="your-solar-journey-container">
            <h1>Your Solar Journey</h1>
            <div className="journey-main-container">
              <div>
                <p>Step 01</p>
                <img src={calculator} alt="step1-solar calculator" />
                <hr></hr>
                <h2>Run the calculator</h2>
              </div>
              <div>
                <p>Step 02</p>
                <img src={home} alt="step1-solar calculator" />
                <hr></hr>
                <h2>Schedule Your Site Survey</h2>
              </div>
              <div>
                <p>Step 03</p>
                <img src={reapBenefits} alt="step1-solar calculator" />
                <hr></hr>
                <h2>Buy Solar And Reap Benefits</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarCalculator;
