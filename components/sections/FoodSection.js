import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function FoodSection() {
  const [isOpen, setOpen] = useState(false)
    
    return (
        <>
          <section className="food-section pt-0">
            <div className="auto-container">
              <div className="row">
                <div className="image-column col-xl-4 col-lg-4">
                  <div className="inner-column">
                    <div className="image-box">
                      <figure className="image wow fadeInUp"><img src="images/resource/food-1.jpg" alt=""/></figure>
                    </div>
                    <a onClick={() => setOpen(true)} className="play-now-two"><i className="icon fa fa-play" aria-hidden="true"></i><span className="ripple"></span></a>
                    <div className="quote-box">
                      <div className="icon-box"><i className="flaticon-quotation"></i></div>
                      <div className="text">Great hospitality is the key to Pride of Britain’s longstanding reputation for excellence.</div>
                    </div>
                  </div>
                </div>
                <div className="content-column col-xl-8">
                  <div className="inner-column">
                    <div className="sec-title"> <span className="sub-title">EAT FROM THE LAND</span>
                      <h2>Enjoy Food and Even<br/>
                        Better Hospitality</h2>
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br/>
                        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo <br/>
                        viverra maecenas accumsan lacus vel facilisis. </div>
                      <div className="healthy-food">
                        <div className="food-list">
                          <h4 className="title">Restaurant</h4>
                          <ul>
                            <li><i className="fa-regular fa-square-check"></i>Healthy Food</li>
                            <li><i className="fa-regular fa-square-check"></i>Award-winning Restaurant</li>
                            <li><i className="fa-regular fa-square-check"></i>Individually Styled Bedrooms</li>
                          </ul>
                        </div>
                        <div className="food-list two">
                          <h4 className="title">SPA & Wellness</h4>
                          <ul>
                            <li><i className="fa-regular fa-square-check"></i>Healthy Food</li>
                            <li><i className="fa-regular fa-square-check"></i>Award-winning Restaurant</li>
                            <li><i className="fa-regular fa-square-check"></i>Individually Styled Bedrooms</li>
                          </ul>
                        </div>
                      </div>
                      <div className="image-box">
                        <figure className="image overlay-anim"><img src="images/resource/food-list.jpg" alt=""/></figure>
                        <figure className="image overlay-anim"><img src="images/resource/food-list-2.jpg" alt=""/></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    )
}
