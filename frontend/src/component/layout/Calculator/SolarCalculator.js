import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();

  const [address, setAddress] = useState("");
  const [avgMonthlyBill, setAvgMonthlyBill] = useState("Your Avg Bill");
  const [systemSize, setSystemSize] = useState("");
  const [currentBill, setCurrentBill] = useState("");
  const [solarBill, setSolarBill] = useState("");
  const [treeAdded, setTreeAdded] = useState("");
  const [carsOff, setCarsOff] = useState("");
  const [systemCost, setSystemCost] = useState("");
  const [lifeTimeSaving, setLifeTimeSaving] = useState("");
  const [roi, setRoi] = useState("");
  const [lightBill, setLightBill] = useState(0);

  const handleSubmit = async () => {
    await setLightBill(avgMonthlyBill);
    await setSystemSize(Math.ceil(1 + (lightBill / 1000 - 1) * 0.8));
    setCurrentBill(lightBill);
    setSolarBill(lightBill - (90 / 100) * lightBill);
    setTreeAdded(systemSize * 50);
    setCarsOff((systemSize - 1) * 5);
    setSystemCost(70000 + (systemSize - 1) * 60000);
    setLifeTimeSaving((lightBill - (lightBill - (90 / 100) * lightBill)) * 300);
    setRoi(Math.floor(((lifeTimeSaving + systemCost) / systemCost) * 100) / 25);
  };

  const formatNumber = (price) => {
    const formatter = new Intl.NumberFormat("en-IN"); // Using 'en-IN' for Indian number formatting

    return `${formatter.format(price)}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <div className="main-container-solar-calculator">
        <div className="background-image-container"></div>
        <div className="calculator-container">
          <div className="main-calculator-cantainer">
            <div>
              <h1 className="headline">Livolt Solar Calculator</h1>
              <p className="subtitile">Instantly Calculate Your Saving</p>
              <input
                className="input-location"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                placeholder="Enter Your Location"
              />
              <input
                className="input-monthly-bill"
                type="number"
                value={avgMonthlyBill}
                onChange={(e) => setAvgMonthlyBill(e.target.value)}
                required
                placeholder="Your Average Monthly Electricity Bill (Rs.)"
              />
            </div>

            {/* ------------------------------------------------------commented code selected option ---------------------------------------*/}

            {/* <p className="select-para">
              Please Select the consumer category Below:
            </p>

            <div className="option-btns">
              <button className="option-btn">RESIDENTIAL</button>
              <button className="option-btn">COMMERCIAL</button>
              <button className="option-btn">INDUSTRIAL</button>
            </div> */}
            <button onClick={handleSubmit} className="calculate-btn">
              CALCULATE
            </button>
          </div>
          <div className="main-div-calculator">
            {/* ------------------------------ This is the main div That shows the required solar system  ----------------------------*/}
            <div className="main-div-solar-system-size">
              <div className="solar-system-size">
                <p className="solar-system-size-para">
                  Recommended Solar System size
                </p>
                <div className="solar-system-size-circle">
                  <p className="size">{systemSize}</p>
                  <p className="unit">KW</p>
                </div>
                <p className="area-required-para">
                  {" "}
                  Area required in {formatNumber(
                    96 + (systemSize - 1) * 60
                  )}{" "}
                  sqft
                </p>
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
                    <p className="without-solar">{formatNumber(currentBill)}</p>
                    <img src={coin_stack} alt="coin-1" />
                    <p className="without-solar">Current Bill</p>
                  </div>
                  <div className="coin-img-cont-2">
                    <p className="with-solar">{formatNumber(solarBill)}</p>
                    <img src={coin_top} alt="coin-2" />
                    <img src={coin_mid} alt="coin-1" />
                    <img src={coin_mid} alt="coin-mid2" />
                    <img src={coin_mid} alt="coin-mid3" />
                    <p className="with-solar">Bill with solar</p>
                  </div>
                  <p className="coin-saving">
                    Start saving <span> 90% </span> from <span>day 1</span>
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
                <p>{formatNumber(treeAdded)} trees added</p>
              </div>
              <div>
                <img src={car_cancle} alt="car off the road" />
                <p>{formatNumber(carsOff)} cars off the road</p>
              </div>
            </div>

            {/* -------------------------- Benefits calculation ----------------------------------------------------- */}
            <div className="enviornment-effect-container">
              <p className="environment-effect-headline">
                Benefits calculations
              </p>
              <div className="benefits-container">
                <div className="calculate-cont">
                  <p className="cal-heading">System Cost</p>
                  <img src={cost} alt="cost" />
                  <p className="cost">₹{formatNumber(systemCost)}</p>
                </div>

                <div className="calculate-cont cal-cont-2">
                  <p className="cal-heading">Life Time Saving</p>
                  <img src={life_time_saving} alt="life time saving" />
                  <p className="cost">₹{formatNumber(lifeTimeSaving)}</p>
                </div>
                <div className="calculate-cont">
                  <p className="cal-heading">Return On Investment</p>
                  <img src={return_on_investment} alt="return on investment" />
                  <p className="cost">{roi}%</p>
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
