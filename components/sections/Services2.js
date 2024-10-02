import Link from 'next/link';
import React from 'react';

export default function Services2() {
    
    const data = [
    {
        icon: "flaticon-bed-2",
        title: "Room Service",
        subtitile: "Orci varius natoque penatibus magnis ders disney parturient ridiculus"
    },
    {
        icon: "flaticon-swimming-pool",
        title: "Swimming Pool",
        subtitile: "Orci varius natoque penatibus magnis ders disney parturient ridiculus"
    },
    {
        icon: "flaticon-car",
        title: "Parking Space",
        subtitile: "Orci varius natoque penatibus magnis ders disney parturient ridiculus"
    },
    {
        icon: "flaticon-breakfast",
        title: "Breakfast",
        subtitile: "Orci varius natoque penatibus magnis ders disney parturient ridiculus"
    },
    {
        icon: "flaticon-travel",
        title: "Pick Up & Drop",
        subtitile: "Orci varius natoque penatibus magnis ders disney parturient ridiculus"
    }
];
    return (
        <>
            <section className="service-section-two">
                <div className="auto-container">
                    <div className="sec-title text-center wow fadeInUp">
                        <span className="sub-title">Hoexr SERVICES</span>
                        <h2>Hotel Facilities</h2>
                    </div>
                        <div className="row wow fadeInUp">
                        {data.map((item, i) => (
                            <div key={i} className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft">
                              <div className="image-box">
                                <div className="icon-box wow fadeInUp"><i className={item.icon}></i></div>
                                <h4 className="title"><Link href="page-service-details">{item.title}</Link></h4>
                              </div>
                              <div className="content-box">
                                <div className="text">{item.subtitile}</div>
                              </div>
                            </div>
                            
                            </div>))}
                            <div className="service-block-two col-lg-4 col-sm-6">
                                <div className="inner-box-two wow fadeInLeft" data-wow-delay="600ms">
                                    <div className="image-box">
                                    <figure className="image wow fadeInUp overlay-anim"><img src="images/resource/service2-1.jpg" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}
