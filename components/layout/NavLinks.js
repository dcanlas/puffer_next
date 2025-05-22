import Link from "next/link";
import React from "react";

const NavLinks = ({ extraClassName }) => {
  return (
    <ul className={`navigation ${extraClassName}`}>
      <li className="current">
        <Link href="/">Home</Link>
      </li>
      <li className="dropdown">
        <Link href="#">Rooms</Link>
        <ul>
          <li>
            <Link href="/check-availability">Check Availability</Link>
          </li>
          <li>
            <Link href="/room-details/family-room">Family Room</Link>
          </li>
          <li>
            <Link href="/room-details/standard-room">Standard Room</Link>
          </li>
          <li>
            <Link href="/room-details/budget-room">Budget Room</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/check-availability">Book Now</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
