import Link from 'next/link';
import React from 'react';

export default function Testimonial2() {
    
    const data = [    
        {
            img: "client.jpg",
            title: "Jina Nillson",
            designation: "Founder of Webflex",
            subtitile: "Upon they're seasons green day beast without form man be firmament years shall the appear moveth signs had."
        },
        {
            img: "client-2.jpg",
            title: "Donald Browfish",
            designation: "Founder of Webflex",
            subtitile: "Upon they're seasons green day beast without form man be firmament years shall the appear moveth signs had."
        },
        {
            img: "client-3.jpg",
            title: "Robotor Doses",
            designation: "Founder of Webflex",
            subtitile: "Upon they're seasons green day beast without form man be firmament years shall the appear moveth signs had."
        }
];
    return (
        <>
            <section className="client-section pb-80">
                <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/3.jpg)' }}></div>
                <div className="auto-container">
                    <div className="sec-title light text-center wow fadeInUp">
                        <span className="sub-title">What says for customer</span>
                        <h2>What Client's Say?</h2>
                    </div>
                        <div className="row wow fadeInUp">
                        {data.map((item, i) => (
                            <div key={i} className="client-block col-lg-4 col-sm-6">
                                <div className="inner-box wow fadeInLeft">
                                    <h4 className="title">{item.title}</h4>
                                    <span>{item.designation}</span>
                                    <div className="image-box">
                                    <figure className="image wow fadeInUp"><img src={`/images/resource/${item.img}`} alt=""/></figure>
                                    <i className="icon fa fa-circle-check"></i>
                                    </div>
                                    <div className="text">{item.subtitile}</div>
                                </div>
                            </div>))}
                        </div>
                </div>
            </section>
        </>
    )
}
