import Link from 'next/link';
import React from 'react';

export default function PageNewsGrid() {
  return (
    <>
  <section class="news-section">
    <div class="auto-container">
      <div class="row">
        <div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
          <div class="inner-box wow fadeInLeft">
            <div class="image-box">
              <figure class="image overlay-anim"><Link href="news-details"><img src="/images/resource/news-1.jpg" alt=""/></Link></figure>
              <span class="date">DEC<br/><small>20</small></span>
            </div>
            <div class="content-box">
              <ul class="post-info">
                <li><i class="fa fa-user"></i>Admin</li>
                <li><i class="fa fa-comments"></i>October 19, 2022</li>
              </ul>
              <h4 class="title"><Link href="news-details">Retore Lighting Design <br/>in The Hotel</Link></h4>
              <Link href="news-details" class="read-more">Read More<i class="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="100ms">
          <div class="inner-box wow fadeInLeft" data-wow-delay="200ms">
            <div class="image-box">
              <figure class="image overlay-anim"><Link href="news-details"><img src="/images/resource/news-2.jpg" alt=""/></Link></figure>
              <span class="date">DEC<br/><small>20</small></span>
            </div>
            <div class="content-box">
              <ul class="post-info">
                <li><i class="fa-solid fa-user"></i>Admin</li>
                <li><i class="fa-solid fa-comments"></i>0 comments</li>
              </ul>
              <h4 class="title"><Link href="news-details">Swiming Benefits is <br/>Good For Your Health</Link></h4>
              <Link href="news-details" class="read-more">Read More<i class="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="200ms">
          <div class="inner-box wow fadeInLeft" data-wow-delay="300ms">
            <div class="image-box">
              <figure class="image overlay-anim"><Link href="news-details"><img src="/images/resource/news-3.jpg" alt=""/></Link></figure>
              <span class="date">DEC<br/><small>20</small></span>
            </div>
            <div class="content-box">
              <ul class="post-info">
                <li><i class="fa-solid fa-user"></i>Category</li>
                <li><i class="fa-solid fa-comments"></i>October 19, 2022</li>
              </ul>
              <h4 class="title"><Link href="news-details">Avalible Now Health <br/>Club For Your Fitness </Link></h4>
              <Link href="news-details" class="read-more">Read More<i class="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
          <div class="inner-box wow fadeInLeft">
            <div class="image-box">
              <figure class="image overlay-anim"><Link href="news-details"><img src="/images/resource/news-1.jpg" alt=""/></Link></figure>
              <span class="date">DEC<br/><small>20</small></span>
            </div>
            <div class="content-box">
              <ul class="post-info">
                <li><i class="fa fa-user"></i>Admin</li>
                <li><i class="fa fa-comments"></i>October 19, 2022</li>
              </ul>
              <h4 class="title"><Link href="news-details">Retore Lighting Design <br/>in The Hotel</Link></h4>
              <Link href="news-details" class="read-more">Read More<i class="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
          <div class="inner-box wow fadeInLeft" data-wow-delay="200ms">
            <div class="image-box">
              <figure class="image overlay-anim"><Link href="news-details"><img src="/images/resource/news-2.jpg" alt=""/></Link></figure>
              <span class="date">DEC<br/><small>20</small></span>
            </div>
            <div class="content-box">
              <ul class="post-info">
                <li><i class="fa-solid fa-user"></i>Admin</li>
                <li><i class="fa-solid fa-comments"></i>0 comments</li>
              </ul>
              <h4 class="title"><Link href="news-details">Swiming Benefits is <br/>Good For Your Health</Link></h4>
              <Link href="news-details" class="read-more">Read More<i class="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="500ms">
          <div class="inner-box wow fadeInLeft" data-wow-delay="300ms">
            <div class="image-box">
              <figure class="image overlay-anim"><Link href="news-details"><img src="/images/resource/news-3.jpg" alt=""/></Link></figure>
              <span class="date">DEC<br/><small>20</small></span>
            </div>
            <div class="content-box">
              <ul class="post-info">
                <li><i class="fa-solid fa-user"></i>Category</li>
                <li><i class="fa-solid fa-comments"></i>October 19, 2022</li>
              </ul>
              <h4 class="title"><Link href="news-details">Avalible Now Health <br/>Club For Your Fitness </Link></h4>
              <Link href="news-details" class="read-more">Read More<i class="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}
