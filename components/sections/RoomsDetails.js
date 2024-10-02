import Link from 'next/link';
import React from 'react';

export default function RoomDetails() {
  return (
    <>
      <section className="blog-details pt-120 pb-120">
        <div className="auto-container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="testimonial-block-home5 mb-50">
                <div className="inner-box">
                  <div className="image-box"><figure className="image"><img className="w-100" src="/images/resource/room-1.jpg" alt=""/></figure></div>
                </div>
              </div>
              <div className="room-details__left">
                <div className="wrapper">
                  <h3>Description of Room</h3>
                  <p className="text">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
                  <div className="row justify-content-center">
                    <div className="col-xl-12">
                      <div className="room-details__content-right mb-40 mt-20">
                        <div className="room-details__details-box">
                          <div className="row">
                            <div className="col-6 col-md-3">
                              <p className="text mb-0">Room Size</p>
                              <h6>600Sq</h6>
                            </div>
                            <div className="col-6 col-md-3">
                              <p className="text mb-0">Rooms Bed</p>
                              <h6>2 Single Bed</h6>
                            </div>
                            <div className="col-6 col-md-3">
                              <p className="text mb-0">Occupancy</p>
                              <h6>Three Persons</h6>
                            </div>
                            <div className="col-6 col-md-3">
                              <p className="text mb-0">View</p>
                              <h6>Sea View</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
                </div>
                <div className="mt-40">
                  <h4>Room Facilities</h4>
                  <div className="row room-facility-list mb-40">
                    <div className="col-sm-6 col-xl-4">
                      <div className="list-one d-flex align-items-center me-sm-4 mb-3">
                        <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="far fa-air-conditioner"></i></div>
                        <h6 className="title m-0">Air Conditionar</h6>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      <div className="list-one d-flex align-items-center me-sm-4 mb-3">
                        <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="far fa-swimming-pool"></i></div>
                        <h6 className="title m-0">Swiming Pool</h6>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      <div className="list-one d-flex align-items-center me-sm-4 mb-3">
                        <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="far fa-dumbbell"></i></div>
                        <h6 className="title m-0">Gymnasium</h6>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      <div className="list-one d-flex align-items-center me-sm-4 mb-3">
                        <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="fas fa-parking-circle"></i></div>
                        <h6 className="title m-0">Parking</h6>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      <div className="list-one d-flex align-items-center me-sm-4 mb-3">
                        <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="far fa-shield-check"></i></div>
                        <h6 className="title m-0">Security</h6>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      <div className="list-one d-flex align-items-center me-sm-4">
                        <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="far fa-child"></i></div>
                        <h6 className="title m-0">Playground</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-sm-flex align-items-sm-center justify-content-sm-between pt-40 pb-40 border-top">
                  <h6 className="my-sm-0">Share Details</h6>
                  <div className="blog-details__social-list"> <Link href="news-details"><i className="fab fa-twitter"></i></Link> <Link href="news-details"><i className="fab fa-facebook"></i></Link> <Link href="news-details"><i className="fab fa-pinterest-p"></i></Link> <Link href="news-details"><i className="fab fa-instagram"></i></Link> </div>
                </div>
                <div className="p-4 p-lg-5 bg-light">
                  <h4 className="mt-0">Send Us Your Question</h4>
                  <form id="contact_form" name="contact_form" className="" action="includes/sendmail.php" method="post">
                    <div className="row">
                      <div className="col-sm-6 col-xl-4">
                        <div className="mb-3">
                          <input name="form_name" className="form-control bg-white" type="text" placeholder="Enter Name"/>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4">
                        <div className="mb-3">
                          <input name="form_email" className="form-control bg-white required email" type="email" placeholder="Enter Email"/>
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="mb-3">
                          <input name="form_phone" className="form-control bg-white required phone" type="number" placeholder="Enter Phone"/>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <textarea name="form_message" className="form-control bg-white required" rows="5" placeholder="Enter Message"></textarea>
                    </div>
                    <div className="mb-0">
                      <input name="form_botcheck" className="form-control" type="hidden" value=""/>
                      <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title">Submit Comment</span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                <div className="sidebar__post mb-30">
                  <form id="contact_form2" name="contact_form" className="" action="#" method="post">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">Check In</label>
                          <input name="form_name" className="form-control bg-white" type="text" placeholder="Arrive Date"/>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">Check Out</label>
                          <input name="form_name" className="form-control bg-white" type="text" placeholder="Departure Date"/>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">Guests</label>
                          <select className="form-select form-control bg-white">
                            <option selected disabled value="">Select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>More</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <input name="form_botcheck" className="form-control" type="hidden" value=""/>
                      <button type="submit" className="theme-btn btn-style-one w-100" data-loading-text="Please wait..."><span className="btn-title">Book Now</span></button>
                    </div>
                  </form>
                </div>
                <div className="sidebar__single sidebar__post">
                  <h3 className="sidebar__title">Compare Room</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    <li>
                      <div className="sidebar__post-image"> <img src="/images/resource/news-info-1.jpg" alt=""/> </div>
                      <div className="sidebar__post-content">
                        <h3> <span className="sidebar__post-content-meta"><i className="far fa-door-open"></i>Economy Room</span> <Link href="">$175/Night</Link>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image"> <img src="/images/resource/news-info-2.jpg" alt=""/> </div>
                      <div className="sidebar__post-content">
                        <h3> <span className="sidebar__post-content-meta"><i className="far fa-door-open"></i>Deluxe Room</span> <Link href="">$250</Link> </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image"> <img src="/images/resource/news-info-1.jpg" alt=""/> </div>
                      <div className="sidebar__post-content">
                        <h3> <span className="sidebar__post-content-meta"><i className="far fa-door-open"></i>Super Deluxe Room</span> <Link href="">$320</Link> </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
