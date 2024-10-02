import Link from 'next/link';
import React from 'react';

export default function PageTeam() {
    
  const data = [
    {
        img: "team-1.jpg",
        subtitile: "Lorem Ipsum is that it smt"
    },
    {
        img: "team-2.jpg",
        subtitile: "Lorem Ipsum is that it smt",
        foodPack: "Vegan"
    },
    {
        img: "team-3.jpg",
        subtitile: "Lorem Ipsum is that it smt",
        foodPack: "New"
    },
    {
        img: "team-4.jpg",
        subtitile: "Lorem Ipsum is that it smt",
        foodPack: "starter"
    }
];
    return (
        <>
        <section className="team-section">
          <div className="auto-container">
            <div className="row wow slideInUp">
            {data.map((item, i) => (
              <div key={i} className="team-block col-lg-3 col-sm-6">
                <div className="inner-box wow fadeInLeft">
                  <div className="image-box">
                    <figure className="image overlay-anim"><Link href="page-team-details"><img src={`/images/resource/${item.img}`} alt=""/></Link></figure>
                    <div className="info-box">
                      <span className="designation">{item.subtitile}Event Platnner</span>
                      <h4 className="name"><a href="page-team-details.html">{item.title}Michael Dean</a></h4>
                      <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>))}
            </div>
          </div>
        </section>
        </>
    )
}
