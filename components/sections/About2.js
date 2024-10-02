import Link from 'next/link';
export default function About2() {
    return (
        <>

            <section className="about-section-two">
                <div className="auto-container">
                    <div className="row">

                        <div className="content-column col-lg-7 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Hoexr Luxury Hotel</span>
                                    <h2>We Provide Outdoor <br/>Activities To All Visitors</h2>
                                    <div className="text">San Francisco has hills with views, the coast, excellent food & <br/>has been voted the happiest, healthiest and fittest city in the <br/>States many times.</div>
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
                                <ul className="list-style-two">
                                    <li><i className="icon fa fa-circle-check"></i>It is a long fact that a reader will be distracted by the readable</li>
                                    <li><i className="icon fa fa-circle-check"></i>Lorem Ipsum is simply dummy of the printing and industry</li>
                                    <li><i className="icon fa fa-circle-check"></i>There are many variations of Lorem Ipsum majority</li>
                                </ul>
                                <div className="btn-box">
                                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More</span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="image-column col-lg-5">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about2-1.jpg" alt=""/></figure>
                                <figure className="image-2 overlay-anim wow fadeInLeft"><img src="images/resource/about2-2.jpg" alt=""/></figure>
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
        </>
    )
}
