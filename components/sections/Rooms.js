import Link from 'next/link';
import React from 'react';

export default function Rooms() {
    
    return (
        <>
        <section className="rooms-section pb-100">
          <div className="auto-container">
            <div className="sec-title text-center wow fadeInUp">
              <span className="sub-title">Hoexr Luxury Rooms</span>
              <h2>Luxury Rooms & Suites</h2>
            </div>
            <div className="row">

              <div className="room-block col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box wow fadeIn">
                  <div className="image-box">
                    <figure className="image-2 overlay-anim"><img src="images/resource/room-1.jpg" alt=""/></figure>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><Link href="/room-details">Junior Suite</Link></h6>
                    <span className="price">150$ / NIGHT</span>
                  </div>
                  <div className="box-caption">
                    <Link href="/room-details" title="" className="book-btn">book now</Link>
                    <ul className="bx-links">
                      <li><Link href="/room-details" title=""><i className="fa fa-wifi"></i></Link></li>
                      <li><Link href="/room-details" title=""><i className="fa fa-bed"></i></Link></li>
                      <li><Link href="/room-details" title=""><i className="fa fa-bath"></i></Link></li>
                      <li><Link href="/room-details" title=""><i className="fa fa-shower"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="room-block col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box wow fadeIn" data-wow-delay="200ms">
                  <div className="image-box">
                    <figure className="image-2 overlay-anim"><img src="images/resource/room-2.jpg" alt=""/></figure>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><Link href="/room-details">Family Room</Link></h6>
                    <span className="price">200$ / NIGHT</span>
                  </div>
                  <div className="box-caption">
                    <Link href="/room-details" title="" className="book-btn">book now</Link>
                    <ul className="bx-links">
                      <li><Link href="/room-details" title=""><i className="fa fa-wifi"></i></Link></li>
                      <li><Link href="/room-details" title=""><i className="fa fa-bed"></i></Link></li>
                      <li><Link href="/room-details" title=""><i className="fa fa-bath"></i></Link></li>
                      <li><Link href="/room-details" title=""><i className="fa fa-shower"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="room-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box wow fadeIn" data-wow-delay="300ms">
                  <div className="image-box">
                    <figure className="image-2 overlay-anim"><img src="images/resource/room-3.jpg" alt=""/></figure>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><Link href="/room-details">Double Room</Link></h6>
                    <span className="price">250$ / NIGHT</span>
                  </div>
                  <div className="box-caption">
                    <Link href="/room-details" title="" className="book-btn">book now</Link>
                    <ul className="bx-links">
                      <li><Link href="/room-details" title=""><i className="fa fa-wifi"></i></Link></li>
                      <li><Link href="/room-details" title=""><i className="fa fa-bed"></i></Link></li>
                      <li><Link href="/room-details" title=""><i className="fa fa-bath"></i></Link></li>
                      <li><Link href="/room-details" title=""><i className="fa fa-shower"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="room-block col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box large-style wow fadeIn" data-wow-delay="400ms">
                  <div className="image-box">
                    <figure className="image-2 overlay-anim"><img src="images/resource/room-4.jpg" alt=""/></figure>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><Link href="/room-details">Double Room</Link></h6>
                    <span className="price">250$ / NIGHT</span>
                  </div>
                  <div className="box-caption">
                    <Link href="/room-details" title="" className="book-btn">book now</Link>
                    <ul className="bx-links">
                      <li><Link href="/room-details" title=""><i className="fa fa-wifi"></i></Link></li>
                      <li><Link href="/room-details" title=""><i className="fa fa-bed"></i></Link></li>
                      <li><Link href="/room-details" title=""><i className="fa fa-bath"></i></Link></li>
                      <li><Link href="/room-details" title=""><i className="fa fa-shower"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="room-block col-lg-3 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeIn" data-wow-delay="500ms">
                    <div className="image-box">
                      <figure className="image-2 overlay-anim"><img src="images/resource/room-5.jpg" alt=""/></figure>
                    </div>
                    <div className="content-box">
                      <h6 className="title"><Link href="/room-details">Deluxe Room</Link></h6>
                      <span className="price">300$ / NIGHT</span>
                    </div>
                    <div className="box-caption">
                      <Link href="/room-details" title="" className="book-btn">book now</Link>
                      <ul className="bx-links">
                        <li><Link href="/room-details" title=""><i className="fa fa-wifi"></i></Link></li>
                        <li><Link href="/room-details" title=""><i className="fa fa-bed"></i></Link></li>
                        <li><Link href="/room-details" title=""><i className="fa fa-bath"></i></Link></li>
                        <li><Link href="/room-details" title=""><i className="fa fa-shower"></i></Link></li>
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
