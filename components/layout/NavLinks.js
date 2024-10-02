import Link from 'next/link';
import React from 'react';

const NavLinks = ({ extraClassName }) => {
  return (
  <ul className="navigation ${extraClassName}">
    <li className="current dropdown"><Link href="/">Home</Link>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/index-2">Home Layout 2</Link></li>
      </ul>
    </li>
    <li className="dropdown">
      <Link href="#">Rooms & Suites</Link>
      <ul>
        <li>
          <Link href="/page-rooms">Rooms</Link>
        </li>
        <li>
          <Link href="/page-rooms-suite">Rooms and Suits</Link>
        </li>
        <li>
          <Link href="/room-details">Room Details</Link>
        </li>
      </ul>
    </li>
    <li className="dropdown">
      <Link href="#">Pages</Link>
      <ul>
        <li>
          <Link href="/page-about">About</Link>
        </li>
        <li>
          <Link href="/page-pricing">Pricing Table</Link>
        </li>
        <li>
          <Link href="/page-testimonial">Testimonials</Link>
        </li>
        <li className="dropdown">
          <Link href="/">Team</Link>
          <ul>
            <li>
              <Link href="/page-team">Team grid</Link>
            </li>
            <li>
              <Link href="/page-team-details">Team Details</Link>
            </li>            
          </ul>
        </li>
      </ul>
    </li>
    <li className="dropdown"><Link href="/news-grid">News</Link>
      <ul>
        <li><Link href="/news-grid">News Grid</Link></li>
        <li><Link href="/news-details">News Details</Link></li>
      </ul>
    </li>
    <li><Link href="/page-contact">Contact</Link></li>
  </ul>
  );
};

export default NavLinks;