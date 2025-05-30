import React, { createContext, useContext, useState, useEffect } from "react";
import RoomsService from "../services/RoomsService";

const RoomsContext = createContext();

export function RoomsProvider({ children }) {
  const [roomsService, setRoomsService] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function init() {
      try {
        await RoomsService.init();
        if (mounted) {
          setRoomsService(RoomsService);
          setIsReady(true);
        }
      } catch (err) {
        setError(err);
      }
    }
    init();
    return () => {
      mounted = false;
    };
  }, []);

  return <RoomsContext.Provider value={{ roomsService, isReady, error }}>{children}</RoomsContext.Provider>;
}

export function useRoomsContext() {
  return useContext(RoomsContext);
}
