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
      ROOM_DETAILS.forEach((room) => {
        const roomCopy = { ...room };
        roomCopy.propertyIds = this.rawRooms.filter((r) => r.name.includes(room.type)).map((r) => r.id);
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
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const roomsService = new RoomsService();

export default roomsService;
