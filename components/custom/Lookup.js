import Link from "next/link";

export default function Lookup() {
  return (
    <div className="checkout-form-section wow slideInUp">
      <div className="auto-container">
        <div className="checkout-form">
          <div className="checkout-field">
            <h6>Check in</h6>

            <div className="chk-field">
              <input
                className="date-pick"
                type="text"
                placeholder="20 June, 2023"
              />

              <i className="fa fa-calendar"></i>
            </div>
          </div>

          <div className="checkout-field">
            <h6>Check out</h6>

            <div className="chk-field">
              <input
                className="date-pick"
                type="text"
                placeholder="20 June, 2023"
              />

              <i className="fa fa-calendar"></i>
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

          <Link href="" className="theme-btn btn-style-one">
            <span className="btn-title">check now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
