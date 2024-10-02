import Link from 'next/link';

const News2 = () => {  
  const data = [
  {
      img: "news2-1.jpg",
      title: "Retore Lighting Design in The Hotel",
      authorTitle: "Jonica Michel"
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
              <section className="news-section-two">
                <div className="auto-container">
                    <div className="sec-title text-center wow fadeInUp">
                      <span className="sub-title">Hoexr Hotel News</span>
                      <h2>Latest News Update</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (   
        <div key={i} className="news-block-two col-lg-4 col-sm-6 wow fadeInUp">
          <div className="inner-box wow fadeInLeft">
            <div className="image-box">
              <figure className="image overlay-anim"><Link href="news-details"><img src={`/images/resource/${item.img}`} alt=""/></Link></figure>
              <span className="date">DEC<br/>
              <small>20</small></span> </div>
            <div className="content-box">
              <div className="info-box">
                <figure className="thumb"><Link href="/news-details"><img src="images/resource/news-thumb.jpg" alt=""/></Link></figure>
                <span className="designation">{item.authorTitle}</span>
              </div>
                <h4 className="title"><a href="news-details.html">{item.title}</a></h4>
              <div className="btn-box">
                <span><i className="icon fa fa-comments"></i>0 Comments</span>
                <Link href="/news-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>  ))}
                    </div>
                  </div>
              </section>
        
        </>
    );
};

export default News2;