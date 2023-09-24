import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import { useAlert } from "react-alert";

const Form = () => {
  const alert = useAlert();

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [pinCode, SetPinCode] = useState("");
  const [avgBill, setAvgBill] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/consultation/form`, {
        name,
        mobileNumber,
        email,
        pinCode,
        avgBill,
      });
      if (res) {
        alert.success("Form submitted successfully.");
        setName("");
        setMobileNumber("");
        setEmail("");
        SetPinCode("");
        setAvgBill("");
      } else {
        alert.error("Something went wrong");
      }
    } catch (error) {
      alert.error("Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <form className="consultation-from" onSubmit={handleSubmit}>
        <div className="consultation-input">
          <div className="form-element">
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-element">
            <input
              type="Number"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="form-element">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-element">
            <input
              type="Number"
              name="pinCode"
              placeholder="Pin Code"
              value={pinCode}
              onChange={(e) => SetPinCode(e.target.value)}
            />
          </div>
          <div className="form-element avgBill">
            <input
              type="Number"
              name="AvgBill"
              placeholder="Average Monthly Electricity Bill"
              value={avgBill}
              onChange={(e) => setAvgBill(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
