import { useState } from "react";

import DatePicker, { today } from "../elements/DatePicker";

export default function Lookup() {
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(null);

  console.log("checkIn", checkIn); // delete
  console.log("checkOut", checkOut); // delete

  const handleSubmit = () => {
    if (checkIn && checkOut) {
      const form = {
        checkIn,
        checkOut,
      };

      console.log("submitted", form); // delete

      alert("Form submitted! Check console for details."); // delete or convert into validation toast
    } else {
      alert("Complete availability lookup form!"); // delete or convert into validation toast
    }
  };

  return (
    <div className="checkout-form-section wow slideInUp">
      <div className="auto-container">
        <div className="checkout-form">
          <div className="checkout-field">
            <h6>Check in</h6>

            <div className="chk-field">
              <DatePicker
                defaultValue="today"
                value={checkIn}
                onChange={setCheckIn}
              />
            </div>
          </div>

          <div className="checkout-field">
            <h6>Check out</h6>

            <div className="chk-field">
              <DatePicker
                defaultValue=""
                value={checkOut}
                onChange={setCheckOut}
              />
            </div>
          </div>

          <div className="checkout-field br-0">
            <h6>Room</h6>

            <div className="chk-field">
              <i className="fa fa-angle-down"></i>

              <select>
                <option>Standard Room Size </option>
                <option>Standard Room Size </option>
                <option>Standard Room Size </option>
                <option>Standard Room Size </option>
              </select>
            </div>
          </div>

          <button className="theme-btn btn-style-one" onClick={handleSubmit}>
            <span className="btn-title">check now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
