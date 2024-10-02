import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function About1() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            <section className="about-section">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-xl-6 col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                <span className="sub-title">Hoexr Luxury Hotel</span>
                                <h2>Most Safe & Rated <br/>Hotel in London.</h2>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>tempor incididunt ut labore et dolore magna aliqua. Quis ipsum <br/>suspendisse ultrices gravida. Risus commodo maecenas accumsan<br/> lacus vel facilisis.</div>
                                </div>
                                <div className="outer-box">
                                <div className="info-block">
                                    <div className="inner">
                                    <div className="icon-box"><i className="flaticon-light"></i></div>
                                    <h4 className="title">The Best <br/>Lighting</h4>
                                    </div>
                                </div>
                                <div className="info-block">
                                    <div className="inner">
                                    <div className="icon-box"><i className="flaticon-pool"></i></div>
                                    <h4 className="title">The Best <br/>Swiming</h4>
                                    </div>
                                </div>
                                </div>
                                <div className="btn-box">
                                <a href="page-about.html" className="theme-btn btn-style-one"><span className="btn-title">Discover More</span></a>
                                <div className="contact-info">
                                    <div className="icon-box"><i className="flaticon-customer-service"></i></div>
                                    <span>Booking Now</span>
                                    <h4 className="title">956 220 6666</h4>
                                </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-6">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about1-1.jpg" alt=""/></figure>
                                <figure className="image-2 overlay-anim wow fadeInLeft"><img src="images/resource/about1-2.jpg" alt=""/></figure>
                                <div className="btn-box">
                                    <a onClick={() => setOpen(true)} className="play-now-two"><i className="icon fa fa-play" aria-hidden="true"></i><span className="ripple"></span></a>
                                </div>
                                <div className="exp-box bounce-y">
                                <figure className=" overlay-anim wow fadeInLeft"><img src="images/resource/exp-icon.png" alt=""/></figure>
                                <h4 className="title">Luxury Room</h4>
                                <div className="text">Donec in quis the asd <br/>pellentesque velit. Donec id <br/>velit arcu posuere blane.</div>
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
