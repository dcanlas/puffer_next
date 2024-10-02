import Link from 'next/link';
import React from 'react';

export default function Services() {
    
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
        },
        {
            icon: "flaticon-wifi",
            title: "Fibre Internet",
            subtitile: "Orci varius natoque penatibus magnis ders disney parturient ridiculus"
        }
];
    return (
        <>
            <section className="service-section">
                <div className="auto-container">
                    <div className="sec-title text-center wow fadeInUp">
                        <span className="sub-title">Hoexr SERVICES</span>
                        <h2>Hotel Facilities</h2>
                    </div>
                        <div className="row wow fadeInUp">
                        {data.map((item, i) => (
                            <div key={i} className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeIn" data-wow-delay="100ms">
                              <div className="icon-box wow fadeInUp"><i className={item.icon}></i></div>
                              <div className="content-box">
                                <h4 className="title"><Link href="page-service-details">{item.title}</Link></h4>
                                <div className="text">{item.subtitile}</div>
                              </div>
                            </div>
                            
                            </div>))}
                        </div>
                </div>
            </section>
        </>
    )
}
