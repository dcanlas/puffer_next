import Link from 'next/link';
import React from 'react';

export default function CallToAction() {
    
    return (
        <>
        <section className="offer-banner wow slideInUp">
          <div className="auto-container">
            <div className="outer-box">
              <div className="row"> 

                <div className="content-colum col-lg-8 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="content-box"> <span>Risus commodo viverra accumsan lacus vel facilisis. </span>
                      <h6 className="title">Special Holiday Offer</h6>
                    </div>
                  </div>
                </div>

                <div className="btn-column col-lg-4 col-md-12 col-sm-12">
                  <div className="inner-column"> <Link href="/page-contact" className="read-more">Book Now</Link> </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
