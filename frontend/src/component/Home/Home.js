import React, { Fragment, useEffect, useState } from "react";
import Product from "./ProductCard.js";
import "./Home.css";
import MetaData from "../layout/MetaData.js";
import { clearErrors } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";
import lithiumBatteryImg from "../../images/lithium_battery.webp";
import solarInverterImg from "../../images/solar_inverter.webp";
import solarPanelImg from "../../images/solar_panel.webp";
import solarWireImg from "../../images/solar_wire.webp";
import solarStandImg from "../../images/solar_stand.webp";
import blogimg from "../../images/blogimg.png";
import calculatorImg from "../../images/solar_calculator.png";
import chargeControllerImg from "../../images/charge_controller.webp";
import Form from "./Form.js";
import axios from "axios";
import FeaturedProductDetails from "./FeaturedProductDetails.js";
import Carousel1 from "./Carosel.js";
import { Link } from "react-router-dom";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.products);

  let featuredProductIndex = 0;

  const [solarPanel, setSolarPanel] = useState([]);
  const [lithiumBattery, setLithiumBattery] = useState([]);
  const [solarInverter, setSolarInverter] = useState([]);
  const [offgridSystem, setOffgridSystem] = useState([]);

  const getAllProducts = async () => {
    try {
      const data1 = axios.get(`/api/v1/solar-panel`);
      const data2 = axios.get("/api/v1/lithium-battery");
      const data3 = axios.get("/api/v1/solar-inverter");
      const data4 = axios.get("/api/v1/offgrid-system");
      axios.all([data1, data2, data3, data4]).then(
        axios.spread((...allData) => {
          setSolarPanel(allData[0].data.products);
          setLithiumBattery(allData[1].data.products);
          setSolarInverter(allData[2].data.products);
          setOffgridSystem(allData[3].data.products);
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    getAllProducts();
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Livolt Energy | The leading Solar Energy Company " />

          <div>
            <Carousel1 />
          </div>

          {/* category section */}

          <h2 className="homeHeading">Popular categories</h2>

          <div className="category-main-container">
            <Link to="/blogs">
              <div className="category-container">
                <img src={blogimg} alt="Blogs" />
              </div>
              <span>Blogs</span>
            </Link>
            <Link to="/solar-calculator">
              <div className="category-container">
                <img src={calculatorImg} alt="solar calculator" />
              </div>
              <span>Solar Calculator</span>
            </Link>
            <Link to="/products/Solar Panel">
              <div className="category-container">
                <img src={solarPanelImg} alt="Solar panel images" />
              </div>
              <span>Solar Panel</span>
            </Link>
            <Link to="/products/Li-phosphate Battery">
              <div className="category-container">
                <img src={lithiumBatteryImg} alt="Lithium battery" />
              </div>
              <span>Lithium Battery</span>
            </Link>
            <Link to="/products/Solar Inverter">
              <div className="category-container">
                <img src={solarInverterImg} alt="Solar Inverter" />
              </div>
              <span>Solar Inverter</span>
            </Link>
            <Link to="/products/Solar Wire">
              <div className="category-container">
                <img src={solarWireImg} alt="Solar Wire" />
              </div>
              <span>Solar Wire</span>
            </Link>
            <Link to="/products/Solar Stand">
              <div className="category-container">
                <img src={solarStandImg} alt="Solar Panel stand" />
              </div>
              <span>Solar Panel Stand</span>
            </Link>
            <Link to="/products/Charge Controller">
              <div className="category-container">
                <img src={chargeControllerImg} alt="Solar charge controller" />
              </div>
              <span>Solar Charge Controllers</span>
            </Link>
          </div>
          <div className="solar-consultation-container">
            <div className="call-to-action">
              <h1>Get a free Solar</h1>
              <h1> consultation now!</h1>
              <h4>Start your solar journey with a free rooftop evaluation </h4>
              <h4>and solar consultation for your home!</h4>
            </div>
            <div className="form-container">
              <Form />
            </div>
          </div>

          <h2 className="homeHeading">Solar Panel</h2>
          <div className="container" id="container">
            {solarPanel &&
              solarPanel.map((product) => <Product product={product} />)}
          </div>
          <h2 className="homeHeading">Featured Product</h2>
          <div className="container" id="container">
            <FeaturedProductDetails cnt={featuredProductIndex++} />
          </div>
          <div className="battery-banner-container">
            <div className="call-to-action"></div>
          </div>
          <h2 className="homeHeading">Lithium Battery</h2>
          <div className="container" id="container">
            {lithiumBattery &&
              lithiumBattery.map((product) => <Product product={product} />)}
          </div>
          <h2 className="homeHeading">Featured Product</h2>
          <div className="container" id="container">
            <FeaturedProductDetails cnt={featuredProductIndex++} />
          </div>
          <h2 className="homeHeading">Solar Inverter</h2>
          <div className="container" id="container">
            {solarInverter &&
              solarInverter.map((product) => <Product product={product} />)}
          </div>
          <h2 className="homeHeading">Featured Product</h2>
          <FeaturedProductDetails cnt={featuredProductIndex++} />

          <div className="container" id="container"></div>
          <h2 className="homeHeading">Power Backup System</h2>
          <div className="container" id="container">
            {offgridSystem &&
              offgridSystem.map((product) => <Product product={product} />)}
          </div>
          <h2 className="homeHeading">Featured Product</h2>
          <div className="container" id="container">
            <FeaturedProductDetails cnt={featuredProductIndex++} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
