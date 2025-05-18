import { makeGetQuery } from "./SmoobuService";
import { ROOM_DETAILS } from "@/constants/room-details";

class RoomsService {
  rawRooms = [];
  roomsByType = {};
  isInitialized = false;

  getRoomsByType(type) {
    if (!this.isInitialized) {
      return null;
    }
    if (type == null) {
      return this.roomsByType;
    }
    return this.roomsByType[type];
  }

  async init() {
    if (this.isInitialized) {
      return;
    }
    try {
      const response = await makeGetQuery("/api/apartments");
      this.rawRooms = response.apartments;
      ROOM_DETAILS.forEach(async (room) => {
        const roomCopy = { ...room };
        // change the below to be a  "properties" array where each item will call the getDetailsById method
        const propertyIds = this.rawRooms.filter((r) => r.name.includes(room.smoobuType)).map((r) => r.id);
        roomCopy.properties = await Promise.all(propertyIds.map((id) => this.getDetailsById(id)));
        this.roomsByType[room.type] = roomCopy;
      });
      this.isInitialized = true;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getDetailsById(roomId) {
    try {
      const response = await makeGetQuery(`/api/apartments/${roomId}`);
      const { type, ...roomDetails } = response;
      return roomDetails;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const roomsService = new RoomsService();

export default roomsService;
