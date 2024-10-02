import Link from 'next/link';
import React from 'react';

export default function Pricing() {
    
  const data = [
    {
        img: "pricing1-1.png",
        subtitile: "Lorem Ipsum is that it smt",
        foodPack: "starter"
    },
    {
        img: "pricing1-2.png",
        subtitile: "Lorem Ipsum is that it smt",
        foodPack: "Vegan"
    },
    {
        img: "pricing1-3.png",
        subtitile: "Lorem Ipsum is that it smt",
        foodPack: "New"
    },
    {
        img: "pricing1-4.png",
        subtitile: "Lorem Ipsum is that it smt",
        foodPack: "starter"
    },
    {
        img: "pricing1-5.png",
        subtitile: "Lorem Ipsum is that it smt",
        foodPack: "starter"
    },
    {
        img: "pricing1-6.png",
        subtitile: "Lorem Ipsum is that it smt",
        foodPack: "Vegan"
    },
    {
        img: "pricing1-7.png",
        subtitile: "Lorem Ipsum is that it smt",
        foodPack: "New"
    },
    {
        img: "pricing1-8.png",
        subtitile: "Lorem Ipsum is that it smt",
        foodPack: "starter"
    }
];
    return (
        <>
        <section className="pricing-section">
          <div className="auto-container">
            <div className="sec-title text-center wow fadeInUp">
              <span className="sub-title">Hoexr best menus</span>
              <h2>Specialities Foods</h2>
            </div>
            <div className="row wow slideInUp">
            {data.map((item, i) => (
              <div key={i} className="pricing-block col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="thumb overlay-anim"><Link href="/page-pricing"><img src={`/images/resource/${item.img}`} alt=""/></Link></figure>
                  <div className="content-box">
                    <span className="designation">{item.subtitile}</span>
                    <h6 className="title">Pasta With Fish<span>$39</span></h6>
                  </div>
                  <span className="food-pack">{item.foodPack}</span>
                </div>
              </div>))}
            </div>
          </div>
        </section>
        </>
    )
}
