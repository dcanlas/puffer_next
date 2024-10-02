import React from 'react';

export default function Form() {
    
    return (
        <>
        <section className="booking-section">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6 booking-form-column wow fadeInUp">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">ROOMS & SUITES</span>
                    <h2>Hotel Booking </h2>
                  </div>
                  <form className="bk-form">
                    <div className="frm-field">
                      <input type="text" name="check-in" className="date-pick" placeholder="Check in" />
                      <img src="images/icons/mail.png" alt="" />
                    </div>
                    <div className="frm-field">
                      <input type="text" name="check-in" className="date-pick" placeholder="Check out" />
                      <img src="images/icons/mail.png" alt="" />
                    </div>
                    <div className="frm-field">
                      <select>
                        <option>Adult</option>
                        <option>Adult</option>
                        <option>Adult</option>
                        <option>Adult</option>
                      </select>
                      <i className="fa fa-angle-down"></i>
                    </div>
                    <div className="frm-field">
                      <select>
                        <option>Children</option>
                        <option>Children</option>
                        <option>Children</option>
                        <option>Children</option>
                      </select>
                      <i className="fa fa-angle-down"></i>
                    </div>
                    <div className="form-submit">
                      <button type="submit">Check Availability</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 booking-content-column wow fadeInRight" data-wow-delay="200ms">
                <div className="inner-column">
                  <div className="sec-title white">
                    <span className="sub-title">Hoexr HOTEL</span>
                    <h2>Check Availability </h2>
                  </div>
                  <p>Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.</p>
                  <p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                  <div className="contact-info">
                    <div className="icon-box"><i className="flaticon-customer-service"></i></div>
                    <span>Booking Now</span>
                    <h4 className="title">956 220 6666</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
