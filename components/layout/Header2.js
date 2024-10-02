import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import LogoWhite from './../../public/images/logo-v5-black.png';
import LogoDark from './../../public/images/logo-2.png';

const Header1 = ({ handleMobileMenu, searchToggle, handleSearch, scroll, isSearch }) => {



    return (
        <>

            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""} ${isSearch ? "moblie-search-active" : ""}`} >
                <div className="auto-container">
                    <div className="header-top">
                        <div className="inner-box">
                            <div className="top-left">
                                <span><i className="icon fa fa-location"></i>1247/Plot No. 39, 15th Phase, USA</span>
                            </div>
                            <div className="top-right">
                                <ul className="social-icon-one">
                                <li>Follow Us :</li>
                                <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
                                <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link href="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo">
                            <Link href="/"><Image src={LogoWhite} title='Hoexr' alt="" /></Link></div>
                            
                        </div>
                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <NavLinks/>
                            </nav>
                        </div>
                        <div className="outer-box">
                            {/* Header Search */}
                            <button className="search-btn" onClick={handleSearch}>
                                <img src="images/icons/search.png" alt="" />
                            </button>
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><Link href="/"><Image src={LogoDark} title='Soluris' alt="" /></Link></div>
                            <div className="close-btn" onClick={handleMobileMenu}><i className="icon fa fa-times" /></div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link href="tel:+92880098670">+92 (8800) - 98670</Link>
                                </div>
                            </li>
                            <li>
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link href="mailto:help@company.com">help@company.com</Link>
                                </div>
                            </li>
                            <li>
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Send Email</span>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="#"><i className="fab fa-pinterest" /></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="search-popup">
                    <span className="search-back-drop" />
                    <button className="close-search" onClick={handleSearch}><span className="fa fa-times" /></button>
                    <div className="search-inner">
                        <form method="post" action="#">
                            <div className="form-group">
                                <input type="search" name="search-field" defaultValue="" placeholder="Search..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="logo">
                                <Link href="/"><Image src={LogoWhite} title='Soluris' alt="" /></Link>
                            </div>
                            <div className="nav-outer">
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <NavLinks />
                                    </div>
                                </nav>
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    );
};

export default Header1;