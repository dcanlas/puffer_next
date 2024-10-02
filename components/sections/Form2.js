import Link from 'next/link';
import React from 'react';

export default function Form2() {
    
    return (
        <>
        <section className="call-to-action pt-0">
          <div className="auto-container">
            <div className="row">
              <div className="content-colum col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="sec-title"> <span className="sub-title">Call to action</span>
                    <h2>The Thin Escape.</h2>
                  </div>

                  <div className="call-block">
                    <div className="inner-box">
                      <div className="icon-box"> <i className="flaticon-airplane"></i> </div>
                      <h4 className="title">Easy & Free Transport</h4>
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                        eiusmod tempor incididunt dolore magna aliqua.</div>
                    </div>
                  </div>

                  <div className="call-block">
                    <div className="inner-box">
                      <div className="icon-box"> <i className="flaticon-fast-food"></i> </div>
                      <h4 className="title">Clean & Fresh Food</h4>
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                        eiusmod tempor incididunt dolore magna aliqua.</div>
                    </div>
                  </div>

                  <div className="call-block">
                    <div className="inner-box">
                      <div className="icon-box"> <i className="flaticon-swimming-pool-1"></i> </div>
                      <h4 className="title">Play Ground & Swimming Pool</h4>
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                        eiusmod tempor incididunt dolore magna aliqua.</div>
                    </div>
                  </div>
                  <div className="btn-box"> <Link href="" className="read-more">Book A Hotel</Link> </div>
                </div>
              </div>
              <div className="col-lg-6 booking-form-column">
                <div className="inner-column wow fadeInRight" data-wow-delay="200ms">
                  <div className="sec-title"> <span className="sub-title">ROOMS & SUITES</span>
                    <h2>Hotel Booking </h2>
                  </div>
                  <form className="bk-form">
                    <div className="frm-field">
                      <input type="text" name="check-in" className="date-pick" placeholder="Check in" />
                      <img src="images/icons/mail.png" alt="" /> </div>
                    <div className="frm-field">
                      <input type="text" name="check-in" className="date-pick" placeholder="Check out" />
                      <img src="images/icons/mail.png" alt="" /> </div>
                    <div className="frm-field">
                      <select>
                        <option>Adult</option>
                        <option>Adult</option>
                        <option>Adult</option>
                        <option>Adult</option>
                      </select>
                      <i className="fa fa-angle-down"></i> </div>
                    <div className="frm-field">
                      <select>
                        <option>Children</option>
                        <option>Children</option>
                        <option>Children</option>
                        <option>Children</option>
                      </select>
                      <i className="fa fa-angle-down"></i> </div>
                    <div className="form-submit">
                      <button type="submit">Check Availability</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
