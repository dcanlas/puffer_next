import { useEffect, useState } from "react";

import DatePicker, { today } from "../elements/DatePicker";
import Select from "../elements/Select";
import { getCustomerId } from "@/services/SmoobuService";

const rooms = [
  {
    label: "Standard",
    value: 1,
  },
  {
    label: "Deluxe",
    value: 2,
  },
  {
    label: "Suite",
    value: 3,
  },
];

export default function Lookup() {
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(null);

  // testing the service
  useEffect(() => {
    async function test() {
      const customerId = await getCustomerId();
    }
    test();
  }, []);

  const [room, setRoom] = useState(1);

  const handleSelect = ({ target }) => {
    const { value } = target;

    setRoom(value);
  };

  const handleSubmit = () => {
    if (checkIn && checkOut && room) {
      const form = {
        checkIn,
        checkOut,
        room,
      };

      alert("Form submitted! Check console for details.");
    } else {
      alert("Complete availability lookup form!");
    }
  };

  return (
    <div className="checkout-form-section wow slideInUp">
      <div className="auto-container">
        <div className="checkout-form">
          <div className="checkout-field">
            <h6>Check in</h6>

            <div className="chk-field">
              <DatePicker defaultValue="today" value={checkIn} onChange={setCheckIn} />
            </div>
          </div>

          <div className="checkout-field">
            <h6>Check out</h6>

            <div className="chk-field">
              <DatePicker defaultValue="" value={checkOut} onChange={setCheckOut} />
            </div>
          </div>

          <div className="checkout-field br-0">
            <h6>Room</h6>

            <div className="chk-field">
              <Select options={rooms} value={room} onChange={handleSelect} />
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
