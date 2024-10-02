import Link from 'next/link';
import React from 'react';

export default function RoomsInner() {
  return (
    <>
      <section class="feature-section">
        <div class="auto-container">
          <div class="row feature-row g-0 wow slideInUp" data-wow-delay="100ms">
            <div class="image-column col-lg-4 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="image-box">
                  <figure class="image overlay-anim"><img src="/images/resource/feature-1.jpg" alt=""/></figure>
                </div>
              </div>
            </div>
            <div class="content-column col-lg-8 col-md-12 col-sm-12" >
              <div class="inner-column">
                <div class="content-box">
                  <div class="sec-title">
                    <span class="sub-title">MODERN</span>
                    <h2>Fitness Center</h2>
                    <div class="text">Restaurant inilla duiman at elit finibus viverra nec a  lacus themo the <br/>nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru <br/>the ivite dianne onen nivami acsestion augue artine.</div>
                  </div>
                  <Link href="room-details" class="theme-btn btn-style-one read-more">Discover More</Link>
                  <figure class="image-2"><img src="/images/resource/icon.png" alt=""/></figure>
                </div>
              </div>
            </div>
          </div>
          <div class="row feature-row g-0 wow slideInUp" data-wow-delay="200ms">
            <div class="content-column col-lg-8 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="content-box">
                  <div class="sec-title">
                    <span class="sub-title">DISCOVER</span>
                    <h2>The Restaurant</h2>
                    <div class="text">Restaurant inilla duiman at elit finibus viverra nec a 
                    lacus themo the <br/>nesudea seneoice misuscipit non sagie the fermen
                    ziverra tristiue duru <br/>the ivite dianne onen nivami acsestion augue artine.</div>
                  </div>
                  <Link href="room-details" class="theme-btn btn-style-one read-more">Discover More</Link>
                  <figure class="image-2"><img src="/images/resource/icon-2.png" alt=""/></figure>
                </div>
              </div>
            </div>
              <div class="image-column col-lg-4 col-md-12 col-sm-12">
                  <div class="inner-column">
                      <div class="image-box">
                          <figure class="image overlay-anim"><img src="/images/resource/feature-2.jpg" alt=""/></figure>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row feature-row g-0 wow slideInUp" data-wow-delay="300ms">
           <div class="image-column col-lg-4 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="image-box">
                  <figure class="image overlay-anim"><img src="/images/resource/feature-3.jpg" alt=""/></figure>
                </div>
              </div>
            </div>
            <div class="content-column col-lg-8 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="content-box">
                  <div class="sec-title">
                    <span class="sub-title">EXPERIENCES</span>
                    <h2>Spa Center</h2>
                    <div class="text">Restaurant inilla duiman at elit finibus viverra nec a 
                    lacus themo the <br/>nesudea seneoice misuscipit non sagie the fermen
                    ziverra tristiue duru <br/>the ivite dianne onen nivami acsestion augue artine.</div>
                  </div>
                  <Link href="room-details" class="theme-btn btn-style-one read-more">Discover More</Link>
                  <figure class="image-2"><img src="/images/resource/icon-3.png" alt=""/></figure>
                </div> 
              </div>
            </div> 
          </div>
        </div>
      </section>
    </>
  )
}
