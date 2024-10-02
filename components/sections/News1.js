import Link from 'next/link';

const News1 = () => {  
  const data = [
  {
      img: "news-1.jpg",
      title: "Retore Lighting Design in The Hotel",
      authorTitle: "Joseph"
  },
  {
      img: "news-2.jpg",
      title: "Powering Asia Pacific’s Energy Transition",
      authorTitle: "Joseph"
  },
  {
      img: "news-3.jpg",
      title: "Helping Companies in Their Green Transition",
      authorTitle: "Joseph"
  }
];
    return (
        <>
              <section className="news-section">
                <div className="auto-container">
                    <div className="sec-title text-center wow fadeInUp">
                      <span className="sub-title">Hoexr Hotel News</span>
                      <h2>Latest News Update</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (          
                        <div key={i} className="news-block col-lg-4 col-md-6 wow fadeInUp">
                          <div className="inner-box">
                            <div className="image-box">
                              <figure className="image overlay-anim"><Link href="/news-details"><img src={`/images/resource/${item.img}`} alt=""/></Link></figure>
                              <span className="date">DEC<br/><small>20</small></span>
                            </div>
                            <div className="content-box">
                              <ul className="post-info">
                                <li><i className="fa fa-user"></i>{item.authorTitle}</li>
                                <li><i className="fa fa-comments"></i>October 19, 2022</li>
                              </ul>
                              <h4 className="title"><Link href="/news-details">{item.title}</Link></h4>
                              <Link href="/news-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                          </div>
                        </div>))}
                    </div>
                  </div>
              </section>
        
        </>
    );
};

export default News1;