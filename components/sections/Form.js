import React from "react";
import Link from "next/link";

export default function Form() {
  return (
    <section className="booking-section">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6 booking-form-column wow fadeInUp">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">BOOK YOUR STAY</span>
                <h2>Check Availability</h2>
              </div>
              <div className="booking-content">
                <p>
                  Find the perfect room for your stay at our hotel. We offer a variety of rooms to suit your needs, from
                  budget-friendly fan rooms to comfortable air-conditioned suites.
                </p>
                <Link href="/check-availability" className="theme-btn btn-style-one">
                  <span className="btn-title">Check Availability</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 booking-content-column wow fadeInRight" data-wow-delay="200ms">
            <div className="inner-column">
              <div className="sec-title white">
                <span className="sub-title">OUR AMENITIES</span>
                <h2>What We Offer</h2>
              </div>
              <ul className="amenities-list">
                <li>
                  <i className="fa fa-wifi"></i> Free WiFi
                </li>
                <li>
                  <i className="fa fa-bed"></i> Comfortable Beds
                </li>
                <li>
                  <i className="fa fa-bath"></i> Private Bathrooms
                </li>
                <li>
                  <i className="fa fa-shower"></i> Hot Showers
                </li>
                <li>
                  <i className="fa fa-snowflake-o"></i> Air Conditioning (in AC rooms)
                </li>
                <li>
                  <i className="fa fa-mountain"></i> Mountain View
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
