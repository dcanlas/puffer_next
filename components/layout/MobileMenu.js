"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <ul className="navigation clearfix">
        <li className="current">
          <Link href="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link href="#">Rooms</Link>
          <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
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
          <div className="dropdown-btn" onClick={() => handleClick(1)}>
            <i className="fa fa-angle-down" />
          </div>
        </li>
        <li>
          <Link href="/check-availability">Book Now</Link>
        </li>
      </ul>
    </>
  );
}
