import Link from 'next/link';
import React from 'react';
import BackToTop from '../elements/BackToTop'
import Image from 'next/image'
import LogoDark from './../../public/images/logo-2.png';
const Footer1 = () => {
    return (
        <>
  <footer className="main-footer footer-style-one">

		<div className="widgets-section">
			<div className="auto-container">
				<div className="row">
					<div className="footer-column col-xl-3 col-sm-6">
						<div className="footer-widget about-widget">
							<div className="logo">
								<Link href="/"><Image src={LogoDark} title='Hoexr' alt="" /></Link>
							</div>
							<div className="text">Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan volutpat.</div>
							<ul className="social-icon-two">
								<li>
								<Link href="#"><i className="fab fa-twitter"></i></Link>
								</li>
								<li>
								<Link href="#"><i className="fab fa-facebook"></i></Link>
								</li>
								<li>
								<Link href="#"><i className="fab fa-pinterest"></i></Link>
								</li>
								<li>
								<Link href="#"><i className="fab fa-instagram"></i></Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="footer-column col-lg-2 col-sm-6 mb-0">
						<div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
						<h4 className="widget-title">Services Links</h4>
						<div className="widget-content">
							<ul className="user-links">
							<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Home</Link></li>
							<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Rooms & Suites</Link></li>
							<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Restaurant</Link></li>
							<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Spa & Wellness</Link></li>
							<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>About Hotel</Link></li>
							<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Contact</Link></li>
							</ul>
						</div>
						</div>                       
					</div>

					<div className="footer-column col-lg-3 col-sm-6">
						<div className="footer-widget info-widget wow fadeInLeft" data-wow-delay="300ms">
						<h4 className="widget-title">Information</h4>
						<div className="widget-content">

							<article className="recent-post">
							<div className="inner">
								<div className="post-info"><i className="fas fa-phone"></i> 1800-121-3637</div>
								<div className="post-info">+91-7052-101-786</div>
								<div className="post-info"><i className="fa fa-envelope"></i> info@example.com</div>
								<div className="post-info"><i className="fas fa-location"></i> 1247/Plot No. 39, 15th Phase, <br/>United States of America</div>
							</div>
							</article>
						</div>
						</div>
					</div>

					<div className="footer-column col-lg-3 col-sm-6">
						<div className="footer-widget news-widget wow fadeInLeft" data-wow-delay="400ms">
						<h4 className="widget-title">Newsletter</h4>
						<div className="text">Lorem ipsum dolor sit amet consectetur Augue id fermentum</div>
						<div className="subscribe-form-three">
							<form method="post" action="#">
							<div className="form-group">
								<input type="email" name="email" className="email" placeholder="Email Address" required=""/>
								<button type="button" className="theme-btn btn-style-one"><span className="btn-title"><i className="fa fa-paper-plane"></i></span></button>
							</div>
							</form>
						</div>
						<div className="text"><i className="fa-regular fa-circle-check"></i>I agree to all terms and policies</div>
						</div>
					</div>
				</div>
			</div>
		</div>

    <div className="footer-bottom">
      <div className="auto-container">
        <div className="inner-container">
          <div className="copyright-text">&copy; Copyright Reserved by kodesolution.com</div>
          <BackToTop />
        </div>
      </div>
    </div>
  </footer>
        </>
    );
};

export default Footer1;