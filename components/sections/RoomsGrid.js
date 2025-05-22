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
      setRooms(theRooms);
    }
  }, [isReady, roomsService]);

  const renderRoomBlock = (room, index) => {
    if (!room) return null;

    return (
      <div key={room.id} className="room-block col-lg-6 col-md-6 col-sm-12">
        <div className="inner-box wow fadeIn" data-wow-delay={`${index * 100}ms`}>
          <div className="image-box">
            <figure className="image-2 overlay-anim">
              <img src={room.image || "images/resource/room-1.jpg"} alt={room.name} />
            </figure>
          </div>
          <div className="content-box">
            <h6 className="title">
              <Link href={`/room-details/${room.id}`}>{room.name}</Link>
            </h6>
            <span className="price">{room.maxOccupancy} guests</span>
          </div>
          <div className="box-caption">
            <Link href={`/room-details/${room.id}`} className="book-btn">
              view details
            </Link>
            <ul className="bx-links">
              <li>
                <Link href={`/room-details/${room.id}`}>
                  <i className="fa fa-wifi"></i>
                </Link>
              </li>
              <li>
                <Link href={`/room-details/${room.id}`}>
                  <i className="fa fa-bed"></i>
                </Link>
              </li>
              <li>
                <Link href={`/room-details/${room.id}`}>
                  <i className="fa fa-bath"></i>
                </Link>
              </li>
              <li>
                <Link href={`/room-details/${room.id}`}>
                  <i className="fa fa-shower"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="rooms-section pb-100">
      <div className="auto-container">
        <div className="sec-title text-center wow fadeInUp">
          <h2>Our Rooms</h2>
        </div>
        <div className="row">
          {isReady && rooms.ac && rooms.ac.map((room, index) => renderRoomBlock(room, index))}
          {isReady && rooms.fan && rooms.fan.map((room, index) => renderRoomBlock(room, index))}
        </div>
      </div>
    </section>
  );
}
