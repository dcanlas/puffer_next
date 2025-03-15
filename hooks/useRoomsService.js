import { useState, useEffect, use } from "react";
import RoomsService from "../services/RoomsService";

export function useRoomsService() {
  const [service, setService] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function init() {
      await RoomsService.init();
      setService(RoomsService);
      setIsReady(true);
    }
    init();
  }, []);

  return { roomsService: service, isReady };
}
