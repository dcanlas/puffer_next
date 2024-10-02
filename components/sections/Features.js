import Link from 'next/link';
import React from 'react';

export default function Features() {
    
    return (
        <>
        <section className="feature-section">
          <div className="auto-container">
            <div className="row feature-row g-0 wow slideInUp" data-wow-delay="100ms">
              <div className="image-column col-lg-4">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="image overlay-anim"><img src="images/resource/feature-1.jpg" alt=""/></figure>
                  </div>
                </div>
              </div>
              <div className="content-column col-lg-8" >
                <div className="inner-column">
                  <div className="content-box">
                    <div className="sec-title">
                      <span className="sub-title">MODERN</span>
                      <h2>Fitness Center</h2>
                      <div className="text">Restaurant inilla duiman at elit finibus viverra nec a  lacus themo the <br/>nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru <br/>the ivite dianne onen nivami acsestion augue artine.</div>
                    </div>
                    <Link href="/room-details" className="theme-btn btn-style-one read-more">Discover More</Link>
                    <figure className="image-2"><img src="images/resource/icon.png" alt=""/></figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="row feature-row g-0 wow slideInUp" data-wow-delay="200ms">
              <div className="content-column col-lg-8">
                <div className="inner-column">
                  <div className="content-box">
                    <div className="sec-title">
                      <span className="sub-title">DISCOVER</span>
                      <h2>The Restaurant</h2>
                      <div className="text">Restaurant inilla duiman at elit finibus viverra nec a 
                      lacus themo the <br/>nesudea seneoice misuscipit non sagie the fermen
                      ziverra tristiue duru <br/>the ivite dianne onen nivami acsestion augue artine.</div>
                    </div>
                    <Link href="/room-details" className="theme-btn btn-style-one read-more">Discover More</Link>
                    <figure className="image-2"><img src="images/resource/icon-2.png" alt=""/></figure>
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-4">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="image overlay-anim"><img src="images/resource/feature-2.jpg" alt=""/></figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="row feature-row g-0 wow slideInUp" data-wow-delay="300ms">
             <div className="image-column col-lg-4">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="image overlay-anim"><img src="images/resource/feature-3.jpg" alt=""/></figure>
                  </div>
                </div>
              </div>
              <div className="content-column col-lg-8">
                <div className="inner-column">
                  <div className="content-box">
                    <div className="sec-title">
                      <span className="sub-title">EXPERIENCES</span>
                      <h2>Spa Center</h2>
                      <div className="text">Restaurant inilla duiman at elit finibus viverra nec a 
                      lacus themo the <br/>nesudea seneoice misuscipit non sagie the fermen
                      ziverra tristiue duru <br/>the ivite dianne onen nivami acsestion augue artine.</div>
                    </div>
                    <Link href="/room-details" className="theme-btn btn-style-one read-more">Discover More</Link>
                    <figure className="image-2"><img src="images/resource/icon-3.png" alt=""/></figure>
                  </div> 
                </div>
              </div> 
            </div>
          </div>
        </section>
        </>
    )
}
