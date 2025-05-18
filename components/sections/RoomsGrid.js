import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRoomsService } from "@/hooks/useRoomsService";
import { ROOM_DETAILS } from "@/constants/room-details";

// the A/C rooms
const upperGrid = ROOM_DETAILS.slice(0, 2);

// the fan rooms
const lowerGrid = ROOM_DETAILS.slice(2);

export default function RoomsGrid() {
  const { roomsService, isReady } = useRoomsService();
  const [rooms, setRooms] = useState({});

  useEffect(() => {
    if (isReady) {
      const theRooms = roomsService.getRoomsByType();
      console.log("the rooms", JSON.stringify(theRooms, null, 2));
      setRooms(theRooms);
    }
  }, [isReady]);

  return (
    <>
      <section className="rooms-section pb-100">
        <div className="auto-container">
          <div className="sec-title text-center wow fadeInUp">
            <h2>Our Rooms</h2>
          </div>
          <div className="row">
            <div className="room-block col-lg-6 col-md-6 col-sm-12">
              <div className="inner-box wow fadeIn">
                <div className="image-box">
                  <figure className="image-2 overlay-anim">
                    <img src="images/resource/room-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="content-box">
                  <h6 className="title">
                    <Link href="/room-details">Junior Suite</Link>
                  </h6>
                  <span className="price">150$ / NIGHT</span>
                </div>
                <div className="box-caption">
                  <Link href="/room-details" title="" className="book-btn">
                    book now
                  </Link>
                  <ul className="bx-links">
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-wifi"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-bed"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-bath"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-shower"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="room-block col-lg-6 col-md-6 col-sm-12">
              <div className="inner-box wow fadeIn" data-wow-delay="200ms">
                <div className="image-box">
                  <figure className="image-2 overlay-anim">
                    <img src="images/resource/room-2.jpg" alt="" />
                  </figure>
                </div>
                <div className="content-box">
                  <h6 className="title">
                    <Link href="/room-details">Family Room</Link>
                  </h6>
                  <span className="price">200$ / NIGHT</span>
                </div>
                <div className="box-caption">
                  <Link href="/room-details" title="" className="book-btn">
                    book now
                  </Link>
                  <ul className="bx-links">
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-wifi"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-bed"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-bath"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-shower"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="room-block col-lg-4 col-md-4 col-sm-12">
              <div className="inner-box wow fadeIn" data-wow-delay="300ms">
                <div className="image-box">
                  <figure className="image-2 overlay-anim">
                    <img src="images/resource/room-2.jpg" alt="" />
                  </figure>
                </div>
                <div className="content-box">
                  <h6 className="title">
                    <Link href="/room-details">Double Room</Link>
                  </h6>
                  <span className="price">250$ / NIGHT</span>
                </div>
                <div className="box-caption">
                  <Link href="/room-details" title="" className="book-btn">
                    book now
                  </Link>
                  <ul className="bx-links">
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-wifi"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-bed"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-bath"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-shower"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="room-block col-lg-4 col-md-4 col-sm-12">
              <div className="inner-box wow fadeIn" data-wow-delay="300ms">
                <div className="image-box">
                  <figure className="image-2 overlay-anim">
                    <img src="images/resource/room-2.jpg" alt="" />
                  </figure>
                </div>
                <div className="content-box">
                  <h6 className="title">
                    <Link href="/room-details">Double Room</Link>
                  </h6>
                  <span className="price">250$ / NIGHT</span>
                </div>
                <div className="box-caption">
                  <Link href="/room-details" title="" className="book-btn">
                    book now
                  </Link>
                  <ul className="bx-links">
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-wifi"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-bed"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-bath"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-shower"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="room-block col-lg-4 col-md-4 col-sm-12">
              <div className="inner-box wow fadeIn" data-wow-delay="300ms">
                <div className="image-box">
                  <figure className="image-2 overlay-anim">
                    <img src="images/resource/room-2.jpg" alt="" />
                  </figure>
                </div>
                <div className="content-box">
                  <h6 className="title">
                    <Link href="/room-details">Double Room</Link>
                  </h6>
                  <span className="price">250$ / NIGHT</span>
                </div>
                <div className="box-caption">
                  <Link href="/room-details" title="" className="book-btn">
                    book now
                  </Link>
                  <ul className="bx-links">
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-wifi"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-bed"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-bath"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/room-details" title="">
                        <i className="fa fa-shower"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
